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
    
    const baseTimeout = 5000; // 5 seconds
    useEffect(() => {
        const timeout = setTimeout(nextSlide, images[index].timeout || baseTimeout);
        return () => clearTimeout(timeout);
    }, [index]);

    return(
        <div className="slideshow">
            <img src={images[index].item} alt={`Slide ${index}`} style={{height:"300px", maxWidth: "100%", objectFit: "contain"}}/>
        </div>
    );
    /* TODO add next and prev buttons back in
            <div style={{width: "100%"}}>
                <button onClick={prevSlide} style={{float: "left"}}>Previous</button>
                <button onClick={nextSlide} style={{float: "right"}}>Next</button>
            </div>
    */
}