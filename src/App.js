import "./App.css";
import Counter from "./components/counter/Counter";
import CounterDate from "./components/date/CounterDate";
import { useState } from "react";

function App() {
	
	const [step, setStep] = useState(1);
	const [count, setCount] = useState(0);
	
  return (
    <div className="date-counter">
      <Counter
        count={count}
        setCount={setCount}
        step={step}
        setStep={setStep}
      />
      <CounterDate count={count} />
    </div>
  );
}

export default App;
