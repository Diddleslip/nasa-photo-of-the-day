import React from 'react';

export default function NASAInfo(props) {
    console.log("NASAInfo: props ", props);
    return (
        <div className="">
            <h1>Title: {props.title}</h1>
            <h3>Date: {props.date}</h3>
            <img src={props.hdurl} alt="A beautiful display of NASA'S API showing a new sunrise everyday from their catalog."/>
            <footer>{props.copyright}</footer>
        </div>
    )
}
