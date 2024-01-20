import "./Counter.css";

export default function Counter({
  count,
  step,
  onCountDicrementHandler,
  onStepIncrementHandler,
  onCountIncrementHandler,
  onStepDicrementHandler,
  onStepInputChange,
  onCountInputChange,
}) {
  return (
    <>
      <div>
        {/*<button onClick={onStepDicrementHandler}>-</button>
        Step:{step}
			  <button onClick={onStepIncrementHandler}>+</button>*/}
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => onStepInputChange(Number(e.currentTarget.value))}
        />
        {step}
      </div>
      <div>
        <button onClick={onCountDicrementHandler}>-</button>
        <input value={count} onChange={(e) => onCountInputChange(Number(e.currentTarget.value))}></input>
        {/*Count:{count}*/}
			  <button onClick={onCountIncrementHandler}>+</button>
			  
      </div>
    </>
  );
}
