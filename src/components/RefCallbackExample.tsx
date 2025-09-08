import React, { useEffect, useState } from "react";

export const RefCallbackExample: React.FC = () => {
  // State untuk melacak lebar elemen
  const [width, setWidth] = useState<number | null>(null);

  // Menggunakan ref callback
  const setDivRef = (element: HTMLDivElement | null) => {
    if (element) {
      // Melacak lebar dari elemen saat ini
      setWidth(element.getBoundingClientRect().width);
    }
  };

  useEffect(() => {
    console.log("Component is rendered, width:", width);
  }, [width]);

  return (
    <div>
      {/* Ref callback untuk menetapkan ref ke elemen div */}
      <div
        ref={setDivRef}
        style={{ width: "110%", backgroundColor: "lightgray" }}
      >
        Resize me to see the updated width!
      </div>
      <p>Width of the div: {width}px</p>
    </div>
  );
};
