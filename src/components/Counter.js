import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const onCountIncrementHandler = () => {
    setCount((c) => c - 1);
  };
  const onCountDicrementHandler = () => {
    setCount((c) => c + 1);
  };
  const onStepIncrementHandler = () => {
    setStep((s) => s + 1);
  };
  const onStepDicrementHandler = () => {
    setStep((s) => s - 1);
  };
  return (
    <div className="date-counter">
      <div>
        <button onClick={onStepDicrementHandler}>-</button>
        Step:{step}
        <button onClick={onStepIncrementHandler}>+</button>
      </div>
      <div>
        <button onClick={onCountDicrementHandler}>-</button>
        Count:{count}
        <button onClick={onCountIncrementHandler}>+</button>
      </div>
      <p>30 day of today is Wen Jul 21 2027</p>
    </div>
  );
}
