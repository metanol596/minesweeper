import { useState, useEffect } from 'react';

import s from './timer.module.css';

function Timer() {
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);

  useEffect(() => {
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
  });

  return (
    <section className={s.timer}>
      {minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}
    </section>
  );
}

export default Timer;
