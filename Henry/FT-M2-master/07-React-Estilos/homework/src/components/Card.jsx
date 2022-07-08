import React from 'react';
import s from './Card.module.css'

export default function Card(props) {
  // acá va tu código
  return (
  <div className={s.divprincipal}>
  <div className={s.card}>  
      
      <button onClick={props.onClose} className={s.btn}>X</button>
      <h3>{props.name}</h3> 
        
      <div className={s.medio}>
       
       
          <div className={s.font}>
          
            <p>Min</p>
            <p>{props.min}</p>    
          </div>
          <div className={s.font}>
           <p>Max</p>
            <p>{props.max}</p>
     
          </div>
       <img src= {`http://openweathermap.org/img/wn/${props.img}@2x.png`}  alt="img not found" />  
        
      </div>    
  </div>
  </div>)

};