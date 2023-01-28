import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

function tick(){
  const element=(
    <div>
      <h1>Hello India</h1>
      <h2>It is{new Date().toLocaleTimeString()}.</h2>
    </div>
  )
  root.render(
    element
    );
}

setInterval(tick, 1000);

// function Welcome(props){
//   return<h1>Car,{props.name}{props.brand}{props.color}</h1>
// }
// function App(){
//   return(
//  <div>
//   <Welcome name = "sara" />
//   <Welcome brand = "toyato" />
//   <Welcome name = "black" />
//  </div>

//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>)
// function Welcome(props){
//   return<h1>Hello,{props.name}</h1>
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// const element=<Welcome name="sara" />
// root.render (element)
