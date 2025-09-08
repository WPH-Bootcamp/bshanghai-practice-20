import React, { useEffect, useRef } from "react";

const UseRefDOM = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.value = "kyra";
    }
  }, []);
  console.log(inputRef);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default UseRefDOM;
