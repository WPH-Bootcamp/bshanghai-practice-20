import React, { useMemo, useState } from "react";

const factorial = (n: number): number => {
  return n === 0 ? 1 : n * factorial(n - 1);
};

const UseMemoHook = () => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  const memoizedFactorial = useMemo(() => factorial(number), [number]);
  return (
    <div>
      <h1>useMemo example</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <p>
        factorial of {number} is {memoizedFactorial}
      </p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text}</p>
    </div>
  );
};

export default UseMemoHook;
