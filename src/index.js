import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const d=new Date()
const hr=d.getHours()
// to display message to user like good morning, good evening with a simple toast uploaded by npm website
    if (hr>=4 && hr<12) {
      toast.success('👌😎 Good morning', {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light", })
    }else if (hr >=12 && hr <=17) {
      toast.info('💫🍻  Good afternoon', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light", })
    }else if (hr >=17 && hr <=21) {
      toast.warn('👌☕ Good evening', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light", })
    }else if (hr >=21 || hr>=0) {
      toast.dark('🥱😴 Good Night', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light", })
    }
var a=true
// to set the body of page with or not blur if the user click in the chrono button
function changebody() {
  if (a) {
    document.getElementById("app").style.filter=' blur(10px) ';
    document.getElementById("app").style.zIndex=' -1000px ';
    document.getElementById("tmr").style.opacity=' 1 ';
    document.getElementById("tmr").style.zIndex=' 1 ';
    a=false
  }else{    
    change()
    document.getElementById("tmr").style.opacity=' 0 ';
    document.getElementById("tmr").style.zIndex=' -1 ';
    document.getElementById("tmr").style.position=' absolute ';
    a=true
  }
 }
//called in changebody function
function change() {
  document.getElementById("app").style.filter=' blur(0px) '
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <div> <App change={changebody} /> 
   <ToastContainer /></div>  
  </React.StrictMode>
);


