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
            setWeather(Response.RESPONSE.list)
        )
    };


    console.log(forecasts)

    return (
        <>
            <Button variant="success" onClick={() => req()}>Request Weather</Button>

            <table>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Date&Time</th>
                        <th>Temperature C</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map((forecast, index) => <tr key={forecast.dt}>
                        <td>{index+1}</td>
                        <td>{forecast.dt_txt}</td>
                        <td>{Math.round(forecast.main.temp - 273.15)}</td>
                    </tr>)}
                </tbody>
            </table>
        </>
    )
};

export default Api;