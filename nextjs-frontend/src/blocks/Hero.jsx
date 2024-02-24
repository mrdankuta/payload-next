import React from "react";
// import Image from "next/image";

export default function Hero({heading, text, backgroundImage}) {
    console.log(backgroundImage);
    return (
        <div className="hero">
            <h2>{heading}</h2>
            <p>{text}</p>
        </div>
    );
}