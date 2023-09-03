import React, { useEffect, useState } from "react";
import Days from "./Days/Days";
import Pourc from "./Pourcentage/Pourc";
import Task from "./Tasks/Task";
import Appp from "./Timer/App";
import "./Componenents/Header/style.css";


function App(props) {

  const [position,setposition]=useState() //position of the task
  const [taskk,settaskk]=useState('') //the task in the input
  const [listchecked, setlist] = useState([]); //the task checked done by user
  const [list, setlistt] = useState([]); 
  const [day, setdayy] = useState(current());
  function current() {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const d = new Date();
    let currentdate = weekday[d.getDay()];
    return currentdate;
  }
  function setday(e) {
    setdayy(e);
  }
  function setcheck(e) {
    setlist(e);
  }
  function change(e) {
    setlistt(e);
  }

  return (
    <div>
    <div className="App" id="app">
      <Days cur={day} set={(e) => setday(e)} />
      <Pourc check={listchecked} list={list} />
      <Task
        cur={day}
        check={listchecked}
        sett={(e) => setcheck(e)}
        list={list}
        setlist={(e)=>setlist(e)}
        setlistt={(e) => change(e)}
        blurr={props.change}     
        setpos={(e)=> setposition(e)}
        settask={(e)=>settaskk(e)}
        pos={position}
        tas={taskk}
      />       
    </div>
    <div className="Appp" id='tmr'>
      <Appp 
      change={props.change}
      cur={day}
      positionn={position}
      taskk={taskk}
        check={listchecked}
        sett={(e) => setcheck(e)}
        list={list}
        setlistt={(e) => change(e)}
      /></div>
      </div>
  );
}
export default App;
