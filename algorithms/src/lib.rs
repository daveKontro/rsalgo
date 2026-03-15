mod utils;

use wasm_bindgen::prelude::*;

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
}
