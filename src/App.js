import "./App.css";
import Counter from "./components/counter/Counter";
import CounterDate from "./components/date/CounterDate";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
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
      <Counter
        count={count}
        step={step}
        onCountDicrementHandler={onCountDicrementHandler}
        onStepIncrementHandler={onStepIncrementHandler}
        onCountIncrementHandler={onCountIncrementHandler}
        onStepDicrementHandler={onStepDicrementHandler}
      />
      <CounterDate count={count} />
    </div>
  );
}

export default App;
