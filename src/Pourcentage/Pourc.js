import React, { useEffect, useState } from "react";
import "./Style.css";

function Pourc(props) {
  const [message, setmessage] = useState(`Task's Progress`);
  let list = props.list.length;
  let check = props.check.length;
  // console.log('checked',props.check.length)
  // console.log('list',props.list.length)
  const [pourc, setpourc] = useState(0);
  useEffect(() => {
    if (props.check.length + 1 > 0) {
      const pr =
        (parseInt(props.check.length) * 100) / parseInt(props.list.length);
      setpourc(Math.floor(pr));
      document.getElementById(
        "circle"
      ).style.strokeDashoffset = `calc( 440 - ( 440 * ${pourc} ) / 100 )`;
    }
    if (pourc < 50) {
      document.getElementById("circle").style.stroke = "#eb0101";
    }
    if (pourc > 50 && pourc < 80) {
      document.getElementById("circle").style.stroke = "#fbb112";
    }
    if (pourc > 80) {
      document.getElementById("circle").style.stroke = "#02df35";
    }
    if (pourc == 100) {
      setmessage(`Done,Good job`);
    } else {
      setmessage(`Task's Progress`);
    }
    if (list == 0) {
      document.getElementById("circle").style.stroke = "#03a9f4";
    }
    if (check == 0) {
      setpourc(0);
    }
  });
  return (
    <div>
      <div class="boxx">
        <div class="pourcentage">
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="70" cy="70" r="70" id="circle"></circle>
          </svg>
          {list > 0 ? (
            <div class="number">
              <h2 id="nm">{pourc}</h2> <span>%</span>
            </div>
          ) : (
            <div class="number">
              <h2 id="nm">0</h2> <span>%</span>
            </div>
          )}
        </div>
        <h2 class="text">{message}</h2>
      </div>
    </div>
  );
}

export default Pourc;
