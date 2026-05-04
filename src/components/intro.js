import { useEffect, useState } from "react";

export default function Intro({ done }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHide(true); // fade start
    }, 1200);

    setTimeout(() => {
      done(); // remove overlay
    }, 2000);
  }, []);

  return (
    <div className={`intro ${hide ? "hide" : ""}`}>
      <h1>Laiba • Shaban</h1>
      <div className="line"></div>
    </div>
  );
}