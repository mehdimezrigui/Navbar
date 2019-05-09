import React from 'react';
import './App.css';
import Nav from './Nav';


const obj = [
  { name: "Home" },
  { name: "service",
    sub: ["for entrepreneurs", "for students",  "for hobbyists"]},
  { name: "contact" }
];
function App() {
  return (
    <div className="App">
     <Nav navitem={obj} />
  
    </div>
  );
}

export default App;
