import React from 'react';

export default function Card(props) {
  // acá va tu código
  return (
  <div>
    <button onClick={props.onClose}>X</button>
    <p>{props.name}</p>
    <p>Min</p>
    <p>Max</p>
    <p>{props.max}</p>
    <p>{props.min}</p>
    <img src= {`http://openweathermap.org/img/wn/${props.img}@2x.png`}  alt="img not found" />
  </div>)

};