import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="date-counter">
      <div>
        <button>-</button>Step:5<button>+</button>
      </div>
      <div>
        <button
          onClick={() => {
            setCount((c) => c - 1);
          }}
        >
          -
        </button>{" "}
        Count:{count}
        <button
          onClick={() => {
            setCount((c) => c + 1);
          }}
        >
          +
        </button>
      </div>
      <p>30 day of today is Wen Jul 21 2027</p>
    </div>
  );
}
