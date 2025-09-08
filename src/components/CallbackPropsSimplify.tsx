import React, { useState, type ChangeEvent } from "react";

type CheckboxProps = {
  onToggle: (checked: boolean) => void;
};
export const CheckboxCustom: React.FC<CheckboxProps> = ({ onToggle }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    onToggle(e.target.checked);
  };

  return <input type="checkbox" onChange={handleChange} />;
};

const CallbackPropsSimplify = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <CheckboxCustom onToggle={setChecked} />
      <p>Checked: {checked ? "true" : "false"}</p>
    </div>
  );
};

export default CallbackPropsSimplify;
