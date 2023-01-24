import * as React from "react";
import { YMaps, Map } from "react-yandex-maps";
import Weather from "./Weather";
import "../styles/App.css"

let center = []

var options = {
  enableHighAccuracy: true,
  timeout: 50000,
  maximumAge: 0
};


function Geolocation() {

  var center_obj = {}
  const [cords, setCords] = React.useState({})


  function success(pos) {
    var crd = pos.coords;

    center_obj = {
      lati: crd.latitude.toFixed(2),
      long: crd.longitude.toFixed(2)
    }

    setCords(center_obj)


    center.push(parseFloat(crd.latitude.toFixed(2)));
    center.push(parseFloat(crd.longitude.toFixed(2)));

    console.log('success', center_obj)

  };


  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };



  const Coords = () => {
    navigator.geolocation.getCurrentPosition(success, error, options)
  };

  // Для первоначальной загрузки карты
  /* вызываем функцию coords() при нажатии на кнопку, которая вызывает функцию getCurrentPosition() */
  Coords();

  return (
    <>
      <Weather props={cords} />
      <YMaps>
        <div>
          <h3>My geolocation:</h3>
        </div>
        <Map state={{
            center,
            zoom: 10,
            controls: []
          }}
          width="50vw"
          height="50vh"
        >
        </Map>
      </YMaps>
    </>

  )
};

export default Geolocation;