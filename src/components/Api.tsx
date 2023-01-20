import * as React from "react";
import axios from "axios";
import * as Constants from "./config";
import Button from 'react-bootstrap/Button';
import * as Response from "./response";
import { ListFormat } from "typescript";


function Api() {
    const [forecasts, setWeather] = React.useState([]);


    let req = () => {
        // axios.get(Constants.LINK).then(res => {
        //     console.log('res:', res.data);
        //     setWeather(res.data)
        // });
        return (
            setWeather(Response.RESPONSE.list)
        )
    };


    console.log(forecasts[0])

    return (
        <table>
            <thead><tr><th>City</th></tr></thead>
            <tbody>
                <Button variant="success" onClick={() => req()}>Request Weather</Button>
                {forecasts.map(forecast => <tr key={forecast.dt}><td>{forecast.dt_txt}</td></tr>)}

            </tbody>
        </table>
    )
};

export default Api;