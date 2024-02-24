import React from 'react'
import Image from "next/image";

export default function TwoColumn({heading, text, image, direction}) {
    return (
        <div>
            <div>
                <h2>{heading}</h2>
                <p>{text}</p>
            </div>
            <div>
                <Image src={image.url} height={image.height} width={image.width} alt={image.alt} />
            </div>
        </div>
    )
}
