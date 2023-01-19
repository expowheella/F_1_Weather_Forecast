import * as React from "react";
import axios from "axios";
import * as Constants from "./config";
import Button from 'react-bootstrap/Button';
import * as Response from "./response";


function Api() {
    const [forecasts, setWeather] = React.useState({});


    let req = () => {
        // axios.get(Constants.LINK).then(res => {
        //     console.log('res:', res.data);
        //     setCountries(res.data)
        // });
        return (
            setWeather(Response)
        )
    };


    console.log(forecasts)

    return (
        <>
            <div>
                {JSON.stringify(forecasts)}
                <Button variant="success" onClick={() => req()}>Request</Button>
            </div>
            <tbody>
                {forecasts.map(forecast => <td>{forecast.test}</td>)}
            
            </tbody>
        </>
    )
};

export default Api;