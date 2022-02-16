import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

document.addEventListener('contextmenu', disableRightClick);
function disableRightClick(e) {
    e.preventDefault();
}
document.addEventListener('copy',function(evt){
evt.clipboardData.setData("text/plain","Copying is not allowed");
evt.preventDefault();
})
var ct=0;
document.addEventListener('visibilitychange',()=>{
  if(document.visibilityState==="hidden"){
    alert("DO NOT SWITCH TABS DURING THE TEST, this can result in 0 marks");
    ct=ct+1;
  }
  if(ct>=3)
  {
    alert("You have been caught switching tabs more than 3 times, hence you're debarred from the test");
    document.getElementById('root').innerHTML=`<div>You have been caught switching tabs more than 3 times, hence you're debarred from the test</div>`;
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
