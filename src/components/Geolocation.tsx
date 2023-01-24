import * as React from "react";
import Button from 'react-bootstrap/Button';
import { YMaps, Map } from "react-yandex-maps";

let center = []

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  center.push(parseFloat(crd.latitude.toFixed(2)));
  center.push(parseFloat(crd.longitude.toFixed(2)));
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};


function Geolocation() {

  function Coords() {
    return (
      navigator.geolocation.getCurrentPosition(success, error, options)
    )
  };

  // Для первоначальной загрузки карты
  Coords()

  return (
    <>
      <div>
        {/* вызываем функцию coords() при нажатии на кнопку, которая вызывает функцию getCurrentPosition() */}
        <Button variant="success" onClick={() => Coords()}>Request GEO</Button>
        <YMaps>
          <div>My awesome application with maps!</div>

          <Map
            state={{
              center,
              zoom: 9,
              controls: []
            }}
            width="50vw"
            height="50vh"
          >
          </Map>

        </YMaps>
      </div>
    </>

  )
};

export default Geolocation;