import { useState, useEffect } from "react";

const Countdown = () => {
  const [initialTime, setInitialTime] = useState(30);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;
    if (isRunning && timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    // Cleanup: clear interval
    return () => clearInterval(timerId);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    if (timeLeft > 0) {
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(initialTime);
  };

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    setInitialTime(value);
    setTimeLeft(value);
    setIsRunning(false);
  };

  return (
    <div>
      <h2>Countdown Timer</h2>
      <label>Set Time (seconds): </label>
      <input type="number" value={initialTime} onChange={handleInputChange} />
      <p>Time Left: {timeLeft} seconds</p>
      <button onClick={handleStart} disabled={isRunning || timeLeft === 0}>
        Start
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Countdown;
