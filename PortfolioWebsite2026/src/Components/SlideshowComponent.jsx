import React, { useState, useEffect } from 'react';

export default function Slideshow({images}) {

    if(images == undefined || images.length === 0) {
        return <div>No images to display</div>;
    }

    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prevIndex) => prevIndex === images.length -1 ? 0 : prevIndex + 1);
    }

    const prevSlide = () => {
        setIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return(
        <div className="slideshow">
            <img src={images[index]} alt={`Slide ${index}`} style={{height:"250px", maxWidth: "100%", objectFit: "contain"}}/>
            <div style={{width: "100%"}}>
                <button onClick={prevSlide} style={{float: "left"}}>Previous</button>
                <button onClick={nextSlide} style={{float: "right"}}>Next</button>
            </div>
        </div>
    );
}