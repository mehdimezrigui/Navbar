import React, { Component } from 'react'
import './App.css';
const Nav = ({navitem}) => {
    return (
     <ul>
       {navitem.map(el => (
            <li>
            <a href="#">{el.name}</a>
            {!el.sub ? null:<ul id="subitem">{el.sub.map(el => (<li><a href="#">{el}</a></li>))}</ul>}
            </li>
            ))}
                
     </ul>
     
    )
  }
  export default Nav;
