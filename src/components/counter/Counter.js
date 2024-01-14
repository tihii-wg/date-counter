import "./Counter.css";

export default function Counter({
  count,
  step,
  onCountDicrementHandler,
  onStepIncrementHandler,
  onCountIncrementHandler,
  onStepDicrementHandler,
}) {

	
  return (
    <>
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
    </>
  );
}
