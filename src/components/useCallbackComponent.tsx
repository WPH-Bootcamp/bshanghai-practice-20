import React, { ChangeEvent, useCallback, useEffect, useState } from "react";

type ChildProps = {
  fetchData: () => void;
};

export const ChildComponent: React.FC<ChildProps> = ({ fetchData }) => {
  useEffect(() => {
    console.log("fetchData function changed, executing useEffect.");
    fetchData();
  }, [fetchData]);

  return <div>Child Component</div>;
};

type Props = {
  count?: number;
};

export const UseCallbackComponent: React.FC<Props> = ({ count = 0 }) => {
  const [text, setText] = useState("");

  // Menggunakan useCallback untuk mem-memoisasi fungsi `fetchData`
  //   const fetchData = () => console.log("Fetching data, count is:", count);
  const fetchData = useCallback(() => {
    console.log("Fetching data, count is:", count);
  }, [count]);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChangeText} />
      <ChildComponent fetchData={fetchData} />
    </div>
  );
};
