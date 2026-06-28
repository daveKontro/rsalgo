mod utils;

use wasm_bindgen::prelude::*;
use std::collections::HashMap;
use std::collections::VecDeque;
use std::collections::HashSet;

// math

#[wasm_bindgen]
pub fn fibonacci_nth(n: i32) -> i32 {
    if n < 0 {
        0
    } else {
        let mut current = 1;
        let mut previous = 0;

        if n == 0 || n == 1 {
            current = n;
        } else {
            for _ in 1..n {
                current += previous;
                previous = current - previous;
            }
        }

        current
    }
}

#[wasm_bindgen]
pub fn fibonacci(n: i32) -> Vec<i32> {
    if n <= 0 {
        Vec::new()
    } else {
        let n = n as usize;
        let mut sequence = Vec::with_capacity(n);

        for i in 0..n {
            if i == 0 || i == 1 {
                sequence.push(i as i32);
            } else {
                sequence.push(sequence[i - 1] + sequence[i - 2]);
            } 
        }

        sequence
    }
}

#[wasm_bindgen]
pub fn is_prime(n: i32) -> bool {
    if n < 2 {
        false
    } else {
        let mut is_n_prime: bool = true;

        for i in 2..=n.isqrt() {
            if n % i == 0 {
                is_n_prime = false;
                break;
            }
        }

        is_n_prime
    }
}

// search

#[wasm_bindgen]
pub fn linear_search(arr: Vec<i32>, target: i32) -> Vec<i32> {
    let mut indices = Vec::new();

    for i in 0..arr.len() {
        if arr[i] == target {
            indices.push(i as i32);
        }
    }

    indices
}

#[wasm_bindgen]
pub fn binary_search(arr: Vec<i32>, target: i32) -> i32 {
    let mut left_index: usize = 0;
    let mut right_index: usize = arr.len() - 1;

    let mut index: i32 = -1;

    while left_index <= right_index && index == -1 {
        let middle_index = (left_index + right_index) / 2;

        if target == arr[middle_index] {
            index = middle_index as i32;
        } else if target < arr[middle_index] {
            right_index = middle_index - 1;
        } else {
            left_index = middle_index + 1;
        }
    }

    index
}

// sort

#[wasm_bindgen]
pub fn bubble_sort(arr: Vec<i32>) -> Vec<i32> {
    let mut arr = arr;

    for i in 0..arr.len() {
        for j in 0..arr.len() - 1 - i {
            if arr[j] > arr[j + 1] {
                arr.swap(j, j + 1);
            }
        }
    }

    arr
}

#[wasm_bindgen]
pub fn insertion_sort(arr: Vec<i32>) -> Vec<i32> {
    if arr.len() < 2 {
        arr
    } else {
        let mut arr = arr;

        for i in 1..arr.len() {
            let mut j = i;

            while j > 0 && arr[j] < arr[j - 1] {
                arr.swap(j, j - 1);
                j -= 1;
            }
        }

        arr
    }
}

#[wasm_bindgen]
pub fn quick_sort(arr: Vec<i32>) -> Vec<i32> {
    if arr.len() < 2 {
        arr
    } else {
        let pivot = arr[arr.len() / 2];
        let mut left = Vec::new();
        let mut middle = Vec::new();
        let mut right = Vec::new();

        for &x in arr.iter() {
            if x < pivot {
                left.push(x);
            } else if x == pivot {
                middle.push(x);
            } else {
                right.push(x);
            }
        }

        [quick_sort(left), middle, quick_sort(right)].concat()
    }
}

#[wasm_bindgen]
pub fn merge_sort(arr: Vec<i32>) -> Vec<i32> {
    fn merge(mut left: Vec<i32>, mut right: Vec<i32>) -> Vec<i32> {
        let mut sorted = Vec::new();

        while !left.is_empty() && !right.is_empty() {
            if left[0] <= right[0] {
                sorted.push(left.remove(0));
            } else {
                sorted.push(right.remove(0));
            }
        }

        [sorted, left, right].concat()
    }

    if arr.len() < 2 {
        arr
    } else {
        let mid = arr.len() / 2;
        let left = arr[..mid].to_vec();
        let right = arr[mid..].to_vec();

        merge(merge_sort(left), merge_sort(right))
    }
}

// graph

type Graph = HashMap<String, Vec<String>>;

struct BfsCallbacks<FVisit, FEnqueue, FComplete>
where
    FVisit: FnMut(&str),
    FEnqueue: FnMut(&str),
    FComplete: FnMut(&[String]),
{
    on_visit: Option<FVisit>,
    on_enqueue: Option<FEnqueue>,
    on_complete: Option<FComplete>,
}

fn bfs<FVisit, FEnqueue, FComplete>(
    graph: &Graph,
    start: &str,
    callbacks: &mut BfsCallbacks<FVisit, FEnqueue, FComplete>,
)
where
    FVisit: FnMut(&str),
    FEnqueue: FnMut(&str),
    FComplete: FnMut(&[String]),
{
    let mut visited: HashSet<String> = HashSet::new();  // fast O(1) lookup
    let mut queue: VecDeque<String> = VecDeque::new();  // has push_back/pop_front
    let mut order: Vec<String> = Vec::new();  // just an ordered list

    visited.insert(start.to_string());
    queue.push_back(start.to_string());

        while let Some(node) = queue.pop_front() {
        order.push(node.clone());

        if let Some(f) = &mut callbacks.on_visit {
            f(&node);
        }

        for neighbor in &graph[&node] {
            if !visited.contains(neighbor) {
                visited.insert(neighbor.clone());
                queue.push_back(neighbor.clone());

                if let Some(f) = &mut callbacks.on_enqueue {
                    f(neighbor);
                }
            }
        }
    }

    if let Some(f) = &mut callbacks.on_complete {
        f(&order);
    }
}

// public wasm wrapper for bfs - no generics
#[wasm_bindgen]
pub fn breadth_first_search(
    graph: JsValue,
    start: &str,
    on_visit: Option<js_sys::Function>,
    on_enqueue: Option<js_sys::Function>,
    on_complete: Option<js_sys::Function>,
) {
    let graph: Graph = serde_wasm_bindgen::from_value(graph).unwrap(); // convert here

    let mut callbacks = BfsCallbacks {
        on_visit: on_visit.map(|f| move |node: &str| {
            f.call1(&JsValue::NULL, &JsValue::from_str(node)).unwrap();
        }),
        on_enqueue: on_enqueue.map(|f| move |node: &str| {
            f.call1(&JsValue::NULL, &JsValue::from_str(node)).unwrap();
        }),
        on_complete: on_complete.map(|f| move |order: &[String]| {
            let js_array = order.iter()
                .map(|s| JsValue::from_str(s))
                .collect::<js_sys::Array>();
            f.call1(&JsValue::NULL, &js_array).unwrap();
        }),
    };

    bfs(&graph, start, &mut callbacks);  // pass as &Graph
}

struct DfsCallbacks<FEnter, FExit>
where
    FEnter: FnMut(&str),
    FExit: FnMut(&str),
{
    on_enter: Option<FEnter>,
    on_exit: Option<FExit>,
}

fn dfs<FEnter, FExit>(
    graph: &Graph,
    start: &str,
    callbacks: &mut DfsCallbacks<FEnter, FExit>,
    visited: &mut HashSet<String>,
)
where
    FEnter: FnMut(&str),
    FExit: FnMut(&str),
{
    visited.insert(start.to_string());

    if let Some(f) = &mut callbacks.on_enter {
        f(start);
    }

    for neighbor in &graph[start] {
        if !visited.contains(neighbor) {
            dfs(graph, neighbor, callbacks, visited);
        }
    }

    if let Some(f) = &mut callbacks.on_exit {
        f(start);
    }
}

// public wasm wrapper for dfs - no generics
#[wasm_bindgen]
pub fn depth_first_search(
    graph: JsValue,
    start: &str,
    on_enter: Option<js_sys::Function>,
    on_exit: Option<js_sys::Function>,
) {
    let graph: Graph = serde_wasm_bindgen::from_value(graph).unwrap(); // convert here

    let mut callbacks = DfsCallbacks {
        on_enter: on_enter.map(|f| move |node: &str| {
            f.call1(&JsValue::NULL, &JsValue::from_str(node)).unwrap();
        }),
        on_exit: on_exit.map(|f| move |node: &str| {
            f.call1(&JsValue::NULL, &JsValue::from_str(node)).unwrap();
        }),
    };

    let mut visited = HashSet::new();

    dfs(&graph, start, &mut callbacks, &mut visited);   // pass as &Graph
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::collections::HashSet;

    fn make_graph() -> Graph {
        HashMap::from([
            ("A".to_string(), vec!["B".to_string(), "C".to_string()]),
            ("B".to_string(), vec!["A".to_string(), "D".to_string(), "E".to_string()]),
            ("C".to_string(), vec!["A".to_string(), "E".to_string()]),
            ("D".to_string(), vec!["B".to_string(), "F".to_string()]),
            ("E".to_string(), vec!["B".to_string(), "C".to_string(), "F".to_string()]),
            ("F".to_string(), vec!["D".to_string(), "E".to_string(), "G".to_string()]),
            ("G".to_string(), vec!["F".to_string()]),
        ])
    }

    #[test]
    fn bfs_works() {
        let graph = make_graph();
        let mut result: Vec<String> = Vec::new();

        {
            let mut callbacks = BfsCallbacks {
                on_visit: None::<fn(&str)>,
                on_enqueue: None::<fn(&str)>,
                on_complete: Some(|order: &[String]| {
                    result = order.to_vec();
                }),
            };

            bfs(&graph, "A", &mut callbacks);
        }

        let expected: Vec<String> = vec!["A", "B", "C", "D", "E", "F", "G"]
            .iter().map(|s| s.to_string()).collect();

        assert_eq!(result, expected);
    }

    #[test]
    fn dfs_works() {
        let graph = make_graph();
        let mut enter_order: Vec<String> = Vec::new();
        let mut exit_order: Vec<String> = Vec::new();

        {
            let mut callbacks = DfsCallbacks {
                on_enter: Some(|node: &str| {
                    enter_order.push(node.to_string());
                }),
                on_exit: Some(|node: &str| {
                    exit_order.push(node.to_string());
                }),
            };

            let mut visited = HashSet::new();
            dfs(&graph, "A", &mut callbacks, &mut visited);
        }

        let expected_enter: Vec<String> = vec!["A", "B", "D", "F", "E", "C", "G"]
            .iter().map(|s| s.to_string()).collect();

        let expected_exit: Vec<String> = vec!["C", "E", "G", "F", "D", "B", "A"]
            .iter().map(|s| s.to_string()).collect();

        assert_eq!(enter_order, expected_enter);
        assert_eq!(exit_order, expected_exit);
    }

    #[test]
    fn fibonacci_nth_works() {
        let result = fibonacci_nth(18);

        assert_eq!(result, 2584);
    }

    #[test]
    fn fibonacci_works() {
        let sequence: Vec<i32> = vec![0, 1, 1, 2, 3, 5, 8, 13];
        let result = fibonacci(8);

        assert_eq!(result, sequence);
    }

    #[test]
    fn is_prime_works() {
        let is_two_prime = is_prime(2);
        let is_three_prime = is_prime(3);
        let is_four_prime = is_prime(4);
        let is_five_prime = is_prime(5);

        assert_eq!(is_two_prime, true);
        assert_eq!(is_three_prime, true);
        assert_eq!(is_four_prime, false);
        assert_eq!(is_five_prime, true);
    }

    #[test]
    fn linear_search_works() {
        let arr: Vec<i32> = vec![2, 6, 3, 4, 3];
        let result = linear_search(arr, 3);

        let expected_result_indices: Vec<i32> = vec![2, 4];

        assert_eq!(result, expected_result_indices);
    }

    #[test]
    fn binary_search_works() {
        let arr: Vec<i32> = vec![-5, 2, 4, 6, 10];

        let result_target_ten = binary_search(arr.clone(), 10);
        let result_target_six = binary_search(arr.clone(), 6);
        let result_target_eleven = binary_search(arr.clone(), 11);

        assert_eq!(result_target_ten, 4);
        assert_eq!(result_target_six, 3);
        assert_eq!(result_target_eleven, -1);
    }

    #[test]
    fn bubble_sort_works() {
        let arr: Vec<i32> = vec![8, 11, -1, 5, -9];

        let result = bubble_sort(arr);

        let expected_result: Vec<i32> = vec![-9, -1, 5, 8, 11];

        assert_eq!(result, expected_result);
    }

    #[test]
    fn insertion_sort_works() {
        let arr: Vec<i32> = vec![8, 20, -2, 4, -6];

        let result = insertion_sort(arr);

        let expected_result: Vec<i32> = vec![-6, -2, 4, 8, 20];

        assert_eq!(result, expected_result);
    }

    #[test]
    fn quick_sort_works() {
        let arr: Vec<i32> = vec![8, 20, -2, 4, -6];

        let result = quick_sort(arr);

        let expected_result: Vec<i32> = vec![-6, -2, 4, 8, 20];

        assert_eq!(result, expected_result);
    }

    #[test]
    fn merge_sort_works() {
        let arr: Vec<i32> = vec![8, 20, -2, 4, -6];

        let result = merge_sort(arr);

        let expected_result: Vec<i32> = vec![-6, -2, 4, 8, 20];

        assert_eq!(result, expected_result);
    }
}
