import React, { useState } from "react";

const HookRules = () => {
  const [count, setCount] = useState(0); //benar

  if (count > 5) {
    const [message, setMessage] = useState(""); //salah
    setMessage("hello");
  }
  return (
    <div>
      <h1>Rules</h1>
      <ul>
        <li>gunakan hooks di top level</li>
        <li>gunakan hooks hanya dalam komponen react/custom hooks</li>
      </ul>
    </div>
  );
};

export default HookRules;
