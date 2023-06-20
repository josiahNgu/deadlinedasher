import React, { useEffect, useRef, useState } from 'react';
import Button from '../button/Button';

interface Props {
  minutes: number;
}

const playButtonSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    width={50}
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);
const pauseButtonSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    width={50}
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </svg>
);

const Countdown: React.FC<Props> = ({ minutes }): React.ReactElement => {
  const [seconds, setSeconds] = useState(minutes * 60);
  const [isTimerPaused, setIsTimerPaused] = useState(true);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
  };

  const pauseTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const onClick = () => {
    setIsTimerPaused((prevState) => {
      const isPaused = !prevState;
      if (isPaused) {
        pauseTimer();
      } else {
        startTimer();
      }
      return isPaused;
    });
  };

  const formattedTime = `${Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>{formattedTime}</p>
      <button onClick={onClick}>
        {isTimerPaused ? playButtonSVG : pauseButtonSVG}
      </button>
      {isTimerPaused && (
        <div className="flex">
          <Button
            text="Skip"
            type="timer"
            onClick={() => console.log('Skip')}
          ></Button>
          <Button
            text="Reset"
            type="timer"
            onClick={() => console.log('Skip')}
          ></Button>
        </div>
      )}
    </div>
  );
};
export default Countdown;
