import * as React from "react";
import axios from "axios";
import * as Constants from "./config";
import Button from 'react-bootstrap/Button';
// import * as Response from "./response";
import * as Response from "./response_kazan"

function Api() {
    const [forecasts, setWeather] = React.useState([]);


    let req = () => {
        // axios.get(Constants.LINK).then(res => {
        //     console.log('res:', res.data.list);
        //     setWeather(res.data.list)
        // });
        let res = Response.RESPONSE_KAZAN;


        var arr = [];

        for (let i = 5; i < res.length; i += 8) {
            arr.push(res[i])
        };

        console.log('array', arr)


        return (
            setWeather(arr)
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
                        <th>Date</th>
                        <th>Temperature C</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map((forecast, index) => <tr key={forecast.dt}>
                        <td>{index + 1}</td>
                        <td>{forecast.dt_txt.slice(0,10)}</td>
                        <td>{Math.round(forecast.main.temp - 273.15)}</td>
                    </tr>)}
                </tbody>
            </table>
        </>
    )
};

export default Api;