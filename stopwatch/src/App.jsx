import { useState } from "react";

function App() {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(50);
  let secId;

  function startTimer() {
    secId = setInterval(() => {
      setSecond((prevSecond) => prevSecond + 1);
    }, 1000);
  }

  if (second === 59) {
    clearInterval(secId);
    setMinute((prevMinute) => prevMinute + 1);
  }

  return (
    <>
      <div>
        <h1>Stopwatch</h1>
        <p>
          Time:{" "}
          <span>
            <span>{minute}</span> : <span>{second}</span>
          </span>
        </p>
        <button type="button" onClick={startTimer}>
          Start
        </button>
        <button type="button">Stop</button>
        <button type="button">Reset</button>
      </div>
    </>
  );
}

export default App;
