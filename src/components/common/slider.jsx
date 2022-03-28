import { useEffect, useState } from "react";

export default function Slider({ total, current, type }) {
  const bufferSize = 120;

  const [topPosition, setTopPosition] = useState();
  useEffect(() => {
    const totalHeight = window.innerHeight - bufferSize;

    const topPosition = totalHeight * ((current + 1) / total);
    setTopPosition(topPosition);

    console.log(current, total, topPosition);
  }, [current, total]);

  return (
    <div
      className={`range-vertical container ${type === "info" ? "info" : "danger"}`}
    >
      <div className="line"></div>
      <div className="round" style={{ top: topPosition + "px" }}></div>
    </div>
  );
}
