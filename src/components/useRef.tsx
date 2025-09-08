import { useEffect, useRef, useState, type ChangeEvent } from "react";

const UseRefComponent = () => {
  const [name, setName] = useState("");

  const randomValueRef = useRef(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleOnclickButton = () => {
    randomValueRef.current = Math.random();
    console.log(randomValueRef.current);
  };

  useEffect(() => {
    console.log("component is rerendered");
  });

  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      <p>{name}</p>
      <p>{randomValueRef.current}</p>
      <button onClick={handleOnclickButton}>Click</button>
    </>
  );
};

export default UseRefComponent;
