import React, { useState } from "react";

type ChildComponentProps = {
  onIncrement: () => void; // Callback yang diberikan oleh parent
};

export const ChildComponent: React.FC<ChildComponentProps> = ({
  onIncrement,
}) => {
  return (
    <div>
      <h2>Child Component</h2>
      {/* Memanggil callback dari parent */}
      <button onClick={onIncrement}>Increment Parent Counter</button>
    </div>
  );
};

export const ParentComponent: React.FC = () => {
  // State yang diatur oleh parent
  const [count, setCount] = useState(0);

  // Fungsi untuk menambah count di parent
  const incrementCounter = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Current Count: {count}</p>
      {/* Kirim fungsi incrementCounter ke Child */}
      <ChildComponent onIncrement={incrementCounter} />
    </div>
  );
};

const UpdateStateFromChild = () => {
  return (
    <div>
      <ParentComponent />
    </div>
  );
};

export default UpdateStateFromChild;
