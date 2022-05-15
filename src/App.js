import styles from './App.module.scss';
import Hero from "./Components/Hero/Hero.js";
import Time from './Components/Time/Time';
import Button from './Components/Button/Button';
import { useEffect, useState } from "react";


function App() {
  
  const [totalTime, setTotalTime] = useState(0);
  const [status, setStatus] = useState(0);
  const [inter, setInter] = useState(null);


  useEffect(() => {
    if(status === 1){
      setInter(setInterval(() => setTotalTime(totalTime => totalTime + 1), 10));
    }
    return () => clearInterval(inter);
  }, [status])
  
  const start = () => {
    setStatus(1);
  }

  const stop = () => {
    setInter(clearInterval(inter));
    setStatus(0);
  }

  const clear = () => {
    setTotalTime(0);
    setInter(clearInterval(inter));
    setStatus(0);
  }

    
  return (
    <div className={styles.container}>
      <Hero />
      <Time totalTime={totalTime} />
      <div className={styles.buttons}>
        <Button action={start}>START</Button>
        <Button action={stop}>STOP</Button>
        <Button action={clear}>RESET</Button>
      </div>
    </div>
  );
}

export default App;
