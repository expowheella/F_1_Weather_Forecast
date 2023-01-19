import * as React from "react";
import Button from 'react-bootstrap/Button';


var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Ваше текущее местоположение:');
  console.log(`Широта: ${crd.latitude}`);
  console.log(`Долгота: ${crd.longitude}`);
  console.log(`Плюс-минус ${crd.accuracy} метров.`);
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};


function Geolocation() {

  let coords = () => navigator.geolocation.getCurrentPosition(success, error, options) 
  console.log(coords)

  return (
    <div>
      Hello
      
      {/* вызываем функцию coords() при нажатии на кнопку, которая вызывает функцию getCurrentPosition() */}
      <Button variant="success" onClick={() => coords()}>Request</Button>
    </div>

  )};

  export default Geolocation;