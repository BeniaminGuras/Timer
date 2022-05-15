import { useEffect, useState } from "react";
import styles from './Time.module.scss';

const Time = props => {
     
    const totalTime = props.totalTime;
      
      let miliseconds = Math.floor(totalTime) % 100;
      let seconds = Math.floor(totalTime/100) % 60;
      let minutes = Math.floor(totalTime/100/60) % 60;

      if(miliseconds<10){
          miliseconds = '0' + miliseconds;
      }

      if(seconds<10){
          seconds = '0' + seconds;
      }

      if(minutes<10){
          minutes = '0' + minutes;
      }

    return(
        <h2>{minutes}:{seconds}:{miliseconds}</h2>
    )
}

export default Time;