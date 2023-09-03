import { useState } from 'react';
import './App.css'
import Close from './Close';
import Settings from './Sett';
import SettinsContext from './SettingsContext';
import Timer from './Timer';

function Appp(props) {
  console.log(props.position)
  console.log(props.taskk)
  const [ShowSett,setShowsett]= useState(false)
  const [work,setwork]= useState(1)
  const [br,setbreak]=useState(0)
  return (
   <main>
    <Close id={"dv"} change={props.change}/>
    <SettinsContext.Provider value={{
      ShowSett,
      setShowsett,
      work,
      br,
      setwork,
      setbreak
    }}>
    {ShowSett ? <Settings /> :  <Timer 
     cur={props.cur}
     check={props.check}
     sett={props.sett}
     list={props.list}
     setlistt={props.setlistt}
    position={props.positionn}
    taskk={props.taskk}
    />} 
    </SettinsContext.Provider>
   </main>
  );
}

export default Appp;
