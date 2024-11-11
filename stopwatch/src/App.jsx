import { useEffect, useState } from "react";

function App() {
  const [timerRunning, setTimerRunning] = useState(true);
  const [count, setCount] = useState(0);

  let minute = Math.floor(count / 60);
  let seconds = count % 60;

  let timeId;

  function start() {
    setTimerRunning(true);
    timeId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 100);
  }

  function stop() {
    setTimerRunning(false);
    clearInterval(timeId);
  }

  return (
    <>
      <div>
        <h1>Stopwatch</h1>
        <p>
          Time:{" "}
          <span>
            <span>{minute}</span> : <span>{seconds}</span>
          </span>
        </p>
        {!timerRunning ? (
          <button type="button" onClick={start}>
            Start
          </button>
        ) : (
          <button type="button" onClick={stop}>
            Stop
          </button>
        )}

        <button
          type="button"
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
