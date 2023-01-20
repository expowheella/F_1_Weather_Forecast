import * as React from "react";
import axios from "axios";
import * as Constants from "./config";
import Button from 'react-bootstrap/Button';
import * as Response from "./response";


function Api() {
    const [forecasts, setWeather] = React.useState([]);


    let req = () => {
        // axios.get(Constants.LINK).then(res => {
        //     console.log('res:', res.data);
        //     setWeather(res.data)
        // });
        return (
            setWeather([Response.RESPONSE])
        )
    };


    console.log(forecasts)

    return (
        <table>
            <thead><tr><th>City</th></tr></thead>
            <tbody>
                {forecasts.map(forecast => <tr><td>{forecast.temp}</td></tr>)}
                <Button variant="success" onClick={() => req()}>Request Weather</Button>
            </tbody>
        </table>
    )
};

export default Api;