import { useEffect, useState } from "react";

const SetStateAsync = () => {
  const [count, setCount] = useState(0);

  const [totalScore, setTotalScore] = useState(0);
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    setPercentage(totalScore / 100);
  }, [totalScore]);

  const handleIncrement = () => {
    setCount(count + 1);
    console.log("count after increment: ", count);
  };

  const handleScoreUpdate = () => {
    setTotalScore((prev) => prev + 10);
    // setPercentage(totalScore / 100); //salah
  };
  return (
    <div>
      <h1>current count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>

      <h1>total score: {totalScore}</h1>
      <h1>percentage: {percentage}</h1>
      <button onClick={handleScoreUpdate}>Update Score</button>
    </div>
  );
};

export default SetStateAsync;
