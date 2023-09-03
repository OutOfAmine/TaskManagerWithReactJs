import React, { useState } from "react";
import Task from "../Tasks/Task";
import "./style.css";

function Days(props) {
  const [list, setlist] = useState([
    { id: 1, name: "Sunday" },
    { id: 2, name: "Monday" },
    { id: 3, name: "Tuesday" },
    { id: 4, name: "Wednesday" },
    { id: 5, name: "Thursday" },
    { id: 6, name: "Friday" },
    { id: 7, name: "Saturday" },
  ]);
  return (
    <div className="all">
      <div class="box">
        <h2>Chose a day please</h2>
        <ul>
          {list.map((elem, i) => {
            return (
              <React.Fragment key={i}>
                {elem.name == props.cur ? (
                  <li className="class">
                    <span>{elem.id}</span>
                    {elem.name}
                  </li>
                ) : (
                  <li onClick={() => props.set(elem.name)}>
                    <span>{elem.id}</span>
                    {elem.name}
                  </li>
                )}
              </React.Fragment>
            ); 
          })}
        </ul>
      </div>
    </div>
  );
}
export default Days;
