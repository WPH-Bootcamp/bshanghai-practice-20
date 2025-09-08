import { useState } from "react";

const ShowItem = () => {
  const [showItem, setShowItem] = useState(false);
  return (
    <>
      {/* conditional rendering */}
      {/* true/false, undefined, null */}
      {null}
      {false}
      {true}
      {undefined}
      {/* && */}
      {showItem && <h1>item</h1>}
      <button onClick={() => setShowItem(!showItem)}>show item</button>
      {/* || */}
      <p>{(showItem && <>item</>) || "no item"}</p>
      {/* ?? */}
      <p>{showItem ?? "no item"}</p>
      {/* ternary */}
      {showItem ? <h1>item</h1> : "no item"}
    </>
  );
};

export default ShowItem;
