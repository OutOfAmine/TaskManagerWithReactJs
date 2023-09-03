import { useContext, useEffect, useRef, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PauseButton from "./PauseButton";
import PlayButton from "./PlayButton";
import SettingsButton from "./Settings";
import SettinsContext from "./SettingsContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const red = "#f54e4e";
const green = "#4aec8c";

function Timer(props) {
  const listchecked = props.check;
  const list = props.list;
  const curr = props.cur;
  const i = props.position;
  const taskkk = props.taskk;
  const [Pause, setpause] = useState(true);
  const SettingInfo = useContext(SettinsContext);
  const [mode, setmode] = useState("work");
  const [seconddazt, setsec] = useState(0);
  const seconddaztref = useRef(seconddazt);
  const Pauseref = useRef(Pause);
  const Moderef = useRef(mode);
  const [Done, setDone] = useState(true);

  function tick() {
    seconddaztref.current--;
    setsec(seconddaztref.current);
  }
  useEffect(() => {
    function switchmode() {
      const nextmode = Moderef.current === "work" ? "break" : "work";
      const nextsecond =
        (nextmode === "work" ? SettingInfo.work : SettingInfo.br) * 60;
      setmode(nextmode);
      Moderef.current = nextmode;
      setsec(nextsecond);
      seconddaztref.current = nextsecond;
      if (seconddaztref.current == 0) {
        setpause(true);
        Pauseref.current = true;
        setDone(false);
        let previous = [...list];
        previous.splice(i, 1, {
          id: i,
          dayy: curr,
          taskk: taskkk,
          status: <i class="fa-solid fa-check"></i>,
        });
        props.setlistt(previous);
        let prvv = [...listchecked];
        prvv.push({ id: i, taskk: taskkk });
        props.sett(prvv);
        document.getElementById(i).style.visibility = "hidden";
        document.getElementById(i).style.position = "absolute";
        document.getElementById(taskkk).style.visibility = "hidden";
        document.getElementById(taskkk).style.position = "absolute";
        toast.success("Wow so easy", {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      }
    }
    seconddaztref.current = SettingInfo.work * 60;
    setsec(seconddaztref.current);
    const interval = setInterval(() => {
      if (Pauseref.current) {
        return;
      }
      if (seconddaztref.current === 0) {
        return switchmode();
      }
      tick();
    }, 1000);
    return () => clearInterval(interval);
  }, [SettingInfo]);
  const totalseconds =
    mode === "work" ? SettingInfo.work * 60 : SettingInfo.br * 60;
  // console.log("second dazt  "+seconddazt)
  const pourcentage = Math.round((seconddazt / totalseconds) * 100);
  const minutes = Math.floor(seconddazt / 60); // 44.8 we want 44 mins
  let secs = seconddazt % 60;
  if (secs < 10) secs = "0" + secs;
  return (
    <div>
      <CircularProgressbar
        value={pourcentage}
        text={Done ? minutes + ":" + secs : "Done"}
        styles={buildStyles({
          textColor: "black",
          pathColor: mode === "work" ? red : green,
          trailColor: "rgba(255,255,255,.9)",
          pathTransition: "2s",
          tailColor: "rgba(255,255,255,.2)",
        })}
      />
      <div style={{ marginTop: "40px" }}>
        {Pause ? (
          <PlayButton
            onClick={() => {
              setpause(false);
              Pauseref.current = false;
            }}
          />
        ) : (
          <PauseButton
            onClick={() => {
              setpause(true);
              Pauseref.current = true;
            }}
          />
        )}
      </div>
      <div style={{ marginTop: "20px" }}>
        <SettingsButton onClick={() => SettingInfo.setShowsett(true)} />
      </div>
    </div>
  );
}
export default Timer;
