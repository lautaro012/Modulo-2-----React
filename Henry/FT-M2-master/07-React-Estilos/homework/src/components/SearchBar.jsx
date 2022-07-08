import React from 'react';
import s from './SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return (
  <div className={s.container}>
    <div className={s.divendiv}>

    <input type='text' placeholder='Ciudad...'></input>
    <button onClick={props.onSearch} className={s.btn}>Agregar</button>

    </div>

  </div>
  )
};