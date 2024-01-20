import "./CounterDate.css";

export default function CounterDate({ count, step, resetHandler }) {
  const date = new Date();
  date.setDate(date.getDate() + count);
  console.log(date.toDateString());

  return (
    <div className="date">
      <span>
        {count === 0
          ? "Today is"
          : count > 0
          ? `${count} days from todai is `
          : `${Math.abs(count)} days ago was `}
      </span>
      <span>{date.toDateString()}</span>

      {count === 0 && step === 1 ? null : (
        <div className="rst-btn">
          <button onClick={resetHandler}>Reset</button>
        </div>
      )}
    </div>
  );
}
