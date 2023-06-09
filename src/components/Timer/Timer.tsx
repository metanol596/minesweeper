import { useState, useEffect } from 'react';

import s from './timer.module.css';

interface TimerProps {
  isGameStart: boolean;
  randomMines: number[];
}

function Timer({ isGameStart, randomMines }: TimerProps): JSX.Element {
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);

  useEffect(() => {
    if (isGameStart) {
      let timer = setInterval(() => {
        setSeconds((prev) => prev + 1);

        if (seconds === 59) {
          setMinutes((prev) => prev + 1);
          setSeconds(0);
        }
      }, 1000);

      if (minutes === 59 && seconds === 59) {
        clearInterval(timer);
      }

      return () => clearInterval(timer);
    } else {
      setSeconds((prev) => prev);
      setMinutes((prev) => prev);
    }

    if (randomMines.length === 0) {
      setSeconds(0);
      setMinutes(0);
    }
  });

  return (
    <section className={s.timer}>
      {minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}
    </section>
  );
}

export default Timer;
