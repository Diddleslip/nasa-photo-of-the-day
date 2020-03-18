import React, { useEffect, useState } from "react";
import axios from "axios";
import NASAInfo from "./NASAInfo.jsx";

export default function TestFunc() {

    const [nasaData, setNasaData] = useState({});

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=AgMlCUXZKWv7uSgNWmL02z19PNSbjIIDHkJTbcsk") 
        .then(response => {
          console.log("NASACARD: response.data ", response.data)
          return setNasaData(response.data);
        })
        .catch(error => {
            console.log("Error :( ", error)
          })
        .catch(error => {
          console.log("Error :( ", error)
        })
      }, [])
      console.log("NASACARD: nasaData", nasaData);
    return (    
    <div className="">
            <NASAInfo 
            title = {nasaData.title}
            date = {nasaData.date}
            hdurl = {nasaData.hdurl}
            copyright = {nasaData.copyright}
            />
    </div>);
}




