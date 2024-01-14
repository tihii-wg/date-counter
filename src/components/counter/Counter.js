import "./Counter.css";

export default function Counter({ count, setCount, step, setStep }) {
  const onCountDicrementHandler = () => {
   // setCount(count - step);
     setCount((c) => c - step);
  };
  const onCountIncrementHandler = () => {
    setCount((c) => c + step);
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
    </div>
  );
}
