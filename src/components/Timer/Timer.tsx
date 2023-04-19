import { useState, useEffect } from 'react';

import s from './timer.module.css';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => setSeconds((prev) => prev + 1), 1000);

    return () => clearInterval(timer);
  });

  return <section className={s.timer}>{seconds}</section>;
}

export default Timer;
