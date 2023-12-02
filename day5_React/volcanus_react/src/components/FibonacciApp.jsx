import React, { useState, useMemo } from "react";

const FibonacciSeries = ({ n }) => {
  // Memoized function to calculate Fibonacci series up to the given index
  const calculateFibonacciSeries = useMemo(() => {
    const memo = new Map();

    const fibonacci = (num) => {
      if (num <= 1) return num;

      // Check if the result is already memoized
      if (memo.has(num)) {
        return memo.get(num);
      }

      // Calculate and memoize the result
      const result = fibonacci(num - 1) + fibonacci(num - 2);
      memo.set(num, result);

      return result;
    };

    return fibonacci;
  }, []);

  // Calculate the Fibonacci series up to the given index
  const fibonacciSeries = useMemo(() => {
    const series = [];
    for (let i = 0; i <= n; i++) {
      series.push(calculateFibonacciSeries(i));
    }
    return series;
  }, [n, calculateFibonacciSeries]);

  return (
    <div>
      <h2>Fibonacci Series</h2>
      <p>{fibonacciSeries.join(", ")}</p>
    </div>
  );
};

const FibonacciApp = () => {
  const [inputValue, setInputValue] = useState(0);

  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(parseInt(e.target.value, 10))}
      />
      <FibonacciSeries n={inputValue} />
    </div>
  );
};

export default FibonacciApp;
