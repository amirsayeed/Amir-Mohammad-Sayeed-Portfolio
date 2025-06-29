import { div } from 'motion/react-client';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Slider = ({slides}) => {
    console.log(slides);
    return (
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} className='my-10'>
           {
            slides.map((slide,idx)=><div key={idx}>
                <img
                src={slide}
                alt={slide}
                className="rounded-2xl shadow-md w-full h-[75vh]"
                />
            </div>)
           }
            
        </Carousel>
    );
};

export default Slider;