import React from 'react';
import './Card.css';
import clearskyd from "../img/cielo.jpg"
import clearskyn from "../img/cielo1.jpg"
import fewcloudsd from "../img/despejado.jpg"
import fewcloudsn from "../img/despejado1.jpg"
import scatteredcloudsd from "../img/nubesdispersas.jpg"
import scatteredcloudsn from "../img/nubesdispersas1.jpg"
import brokencloudsd from "../img/nublado.jpg"
import brokencloudsn from "../img/nublado1.jpg"
import showerraind from "../img/showrain.jpg"
import showerrainn from "../img/showrain1.jpg"
import raind from "../img/lluvia.jpg"
import rainn from "../img/lluvia1.jpg"
import thunderstormd from "../img/tormenta.jpg"
import thunderstormn from "../img/tormenta1.jpg"
import snowd from "../img/nieve.jpg"
import snown from "../img/nieve1.jpg"
import mistd from "../img/niebla.jpg"
import mistn from "../img/niebla1.jpg"




export default function Card({ min, max, name, img, onClose, id }) {

  let background = '';
  let color = 'black';

  switch (img) {
    case '01d':
      background = clearskyd
      break;
    case '01n':
      background = clearskyn
      color = 'white'
      break;
    case '02d':
      background = fewcloudsd
      break;
    case '02n':
      background = fewcloudsn
      color = 'white'
      break;
    case '03d':
      background = scatteredcloudsd
      color = "white"
      break;
    case '03n':
      background = scatteredcloudsn
      color = 'white'
      break;
    case '04d':
      background = brokencloudsd

      break;
    case '04n':
      background = brokencloudsn
      color = 'white'
      break;
    case '09d':
      background = showerraind
      break;
    case '09n':
      background = showerrainn
      color = 'white'
      break;
    case '10d':
      background = raind
      break;
    case '10n':
      background = rainn
      color = 'white'
      break;
    case '11d':
      background = thunderstormd
      break;
    case '11n':
      background = thunderstormn
      color = 'white'
      break;
    case '13d':
      background = snowd
      break;
    case '13n':
      background = snown
      color = 'white'
      break;
    case '50d':
      background = mistd

      break;
    case '50n':
      background = mistn
      color = 'white'
      break;
    default:
      break;
  }
  return (
    <div className="card" style={{ 'background-image': `url(${background})`, 'color': color }}>
      <div id="closeIcon" className="row">
        <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Min</p>
            <p>{min}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Max</p>
            <p>{max}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img className="iconoClima" src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} width="80" height="80" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
