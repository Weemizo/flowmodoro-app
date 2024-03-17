import { useState } from 'react';
import './Timer.css';
import Button from '../Button/Button';

function Timer() {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const Toggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <div className="time">{timer}</div>
      <Button onClick={Toggle}>{isActive ? 'Pause' : 'Start'}</Button>
    </div>
  );
}

export default Timer;
