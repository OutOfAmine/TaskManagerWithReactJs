
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Style.css";

let idd = 0;
function Task(props) {
  const listchecked = props.check;
  const list = props.list;
  const [i, seti] = useState(0);
  const [tas, settas] = useState("");
  const [task, settask] = useState("");
  const [message, setmessage] = useState("Add task");
  const curr = props.cur;
  let regex=/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
  const [statuss, setstatuss] = useState(
    <i class="fa fa-duotone fa-spinner"></i>
  );
  function Ajouter(e) {
    e.preventDefault();
    if(regex.test(task)){
      toast.success("Nice form!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }else{
      toast.warn("What this form ?", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    if (regex.test(task)) {
      if (list.length === 0) {
        let prv = [...list];
        prv.push({
          id: ++idd,
          dayy: curr,
          status: statuss,
          taskk: task,
        });
        props.setlistt(prv);
        settask("");
        toast.success("Wow it works!", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      } else if (list.length >0) {
        var inArray=false;
        for (let i = 0; i < list.length; i++) {      
          if (task == list[i]["taskk"]){
             inArray=true;  
             toast.warn("The task is already there !!", {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
            }
          }
          if(inArray==false) {
            let prv = [...list];
            prv.push({
              id: ++idd,
              dayy: curr,
              status: statuss,
              taskk: task,
            });           
            toast.success("Wow it works !", {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              }); 
              props.setlistt(prv);
            settask("");     
        }
    }} else {
      toast.error("Enter a task please", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }
  function update(i, taskkk) {
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
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  function Updatee(e) {
    e.preventDefault();
    const iddd = document.getElementById("id").value;
    if(regex.test(task)){
      toast.success("Nice form!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }else{
      toast.warn("What this form ?", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    if (task!="" && regex.test(task)) {
        for (let i = 0; i < list.length; i++) {
          const tass = list[i]["taskk"];
          if (task != tass) {
            let prv = [...list];
            prv.push({
              id: ++idd,
              dayy: curr,
              status: statuss,
              taskk: task,
            });
            props.setlistt(prv);
            settask("");
            toast.success("The task was been updated", {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
            break           
          } else {
          toast.warn("The task is already there ", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            break;
          }
    }
    let previous = [...list];
    previous.splice(iddd, 1, {
      id: ++idd,
      dayy: props.cur,
      taskk: task,
      status: <i class="fa fa-duotone fa-spinner"></i>,
    });
    props.setlistt(previous);
    let prv = [...listchecked];
    prv.splice(iddd, 1);
    props.sett(prv);
    settask("");
    document.getElementById(i).style.visibility = "visible";
    document.getElementById(i).style.position = "relative";
    document.getElementById(tas).style.visibility = "visible";
    document.getElementById(tas).style.position = "relative";
    document.getElementById("pen").style.opacity = "-1";
    document.getElementById("pen").style.zIndex = "-10000";
  }else{
    toast.warn("Enter a task please ", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
}
  function changeoperation(id, taask) {
    seti(id);
    settas(taask);
    setmessage("Update Task");
    document.getElementById("task").value = taask;
    document.getElementById("id").value = id;
    document.getElementById("pen").style.opacity = "1";
    document.getElementById("pen").style.zIndex = "1";
  }
  function deletee(id) {
    let prvv = [...list];
    prvv.splice(id, 1);
    props.setlistt(prvv);
    let prv = [...listchecked];
    prv.splice(id, 1);
    props.sett(prv);
    toast.info("the task was been removed", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  function Chrono(i, task) {
    props.blurr();
    props.setpos(i);
    props.settask(task);
  }
  return (
    <div class="alll" id="tb">
      <input type="number" id="id" />
      <div class="boox">
        <i class="fa-solid fa-pen" onClick={Updatee} id="pen"></i>
        <form>
          <input
            type="text"
            required
            value={task}
            onChange={(e) => settask(e.target.value)}
            id="task"
          />
          <span id="span">{message}</span>
          <input type="button" value="Goo" onClick={Ajouter} id="input2" />
        </form>
      </div>
      {list.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Day</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          {list.map((elem, i) => {
            return (
              <React.Fragment key={i}>
                {elem.dayy == props.cur ? (
                  <tbody>
                    <tr>
                      <td>{elem.taskk}</td>
                      <td>{elem.dayy}</td>
                      <td>{elem.status}</td>
                      <td>
                        <i
                          class="fa-solid fa-check"
                          onClick={() => update(i, elem.taskk)}
                          id={i}
                        ></i>
                        <i
                          class="fa fa-light fa-stopwatch-20"
                          onClick={() => Chrono(i, elem.taskk)}
                          id={elem.taskk}
                        ></i>
                        <i
                          class="fa-solid fa-pen-to-square"
                          onClick={() => changeoperation(i, elem.taskk)}
                        ></i>
                        <i
                          class="fa fa-solid fa-trash"
                          onClick={() => deletee(i, elem.id)}
                        ></i>
                      </td>
                    </tr>
                  </tbody>
                ) : (
                  ""
                )}
              </React.Fragment>
            );
          })}
        </table>
      ) : (
        ""
      )}
    </div>
  );
}
export default Task;
