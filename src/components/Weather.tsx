import * as React from "react";
import axios from "axios";
import * as Constants from "./config";
import Button from 'react-bootstrap/Button';
import "../styles/Weather.css"

import Table from 'react-bootstrap/Table'




function Weather(props) {
    const [response, setResponse] = React.useState([]);
    const [data, setWholeData] = React.useState([]);

    const [requested, weatherReq] = React.useState(false);

    const LINK = `http://api.openweathermap.org/data/2.5/forecast?lat=${props.props['lati']}&lon=${props.props['long']}&appid=b0cc4996a4a0e6763f3e3f93b19700e6`

    function Req() {
        axios.get(Constants.LINK).then(res => {
            console.log('openweathermap response:', res)
            setResponse(res.data.list)
            setWholeData(res.data)
            weatherReq(true)
        })
    };

    var forecasts = [];

    for (let i = 5; i < response.length; i += 8) {
        forecasts.push(response[i])
    };




    return (
        <>
            <Button variant="success" onClick={() => Req()}>Request Weather</Button>
            <Table>
                <thead>
                    <tr className={!requested ? "requested": ""}>
                        <th>№</th>
                        <th>Date</th>
                        <th>Temperature C</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map((forecast, index) => <tr key={forecast.dt}>
                        <td>{index + 1}</td>
                        <td>{forecast.dt_txt.slice(0, 10)}</td>
                        <td>{Math.round(forecast.main.temp - 273.15)}</td>
                    </tr>)}
                </tbody>
            </Table>
        </>
    )
};

export default Weather;
