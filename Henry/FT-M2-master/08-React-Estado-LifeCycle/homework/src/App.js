import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx'

export default function App() {
  const [cities, setCities] = useState([])


  function onSearch(ciudad) {
    //llamo a la API y devuelve la ciudad.

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
    .then(r => r.json())
    .then(recurso => {

      if(recurso.cod === '404') {
        alert('Escribi bien.')
      } else {
      //generar nueva ciudad
      const ciudad = {
        min: Math.round(recurso.main.temp_min),
        max: Math.round(recurso.main.temp_max),
        img: recurso.weather[0].icon,
        id: recurso.id,
        wind: recurso.wind.speed,
        temp: recurso.main.temp,
        name: recurso.name,
        weather: recurso.weather[0].main,
        clouds: recurso.clouds.all,
        latitud: recurso.coord.lat,
        longitud: recurso.coord.lon
      };
      setCities(old => [...old, ciudad]);
    }
    })


  
  }


  function onClose (idcity) {
   setCities(oldcities => oldcities.filter(city => city.id !== idcity))
  }

  return (
    <div className="App">
      { /* Tu código acá: */ }
      <Nav onSearch={onSearch}/>
      <Cards cities={cities} onClose={onClose}/>
    </div>
  );
}


