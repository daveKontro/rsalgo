mod utils;

use wasm_bindgen::prelude::*;

// math

#[wasm_bindgen]
pub fn sum(left: i32, right: i32) -> i32 {
    left + right
}

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

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn sum_works() {
        let result = sum(2, 2);

        assert_eq!(result, 4);
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
