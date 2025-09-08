import clsx from "clsx";
import { useState } from "react";

const Clsx = () => {
  const [isactive, setActive] = useState(false);
  const [isloading, setLoading] = useState(false);
  return (
    <div>
      {/* tanpa clsx */}
      <button
        className={`${isactive ? "active" : ""} ${isloading ? "loading" : ""}`}
      >
        Click
      </button>

      <button
        className={clsx({
          active: isactive,
          loading: isloading,
        })}
      >
        click with clsx
      </button>
    </div>
  );
};

export default Clsx;
