import * as React from "react"; // from React import Component
import Geolocation from "./Geolocation";
import Api from "./Api";



function App() {
    return (
        <>  
            <Geolocation />
            <Api />
            <h1>Hello</h1>
        </>
    )
}

export default App;