import React from 'react';
import './Style.css';

const Hero = () => {
    return (
        <>
             <div className='mt-6'>
                 <div className='bg_setup h-[80vh] flex flex-col justify-center items-center'>
                     <h1 className='text-white text-[3.25rem] font-bold text-center mb-3'>
                     Discover an exceptional cooking <br /> class tailored for you!
                     </h1>
                     <p className='text-white text-center mb-6'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
                     <div>
                          <button className='bg-[#0be58a] py-3 px-6 rounded-full mr-6'>Explore Now</button>
                          <button className='text-white rounded-full border-2 border-white py-2 px-6'>Our Feedback</button>
                     </div>
                 </div>
             </div>
        </>
    );
};

export default Hero;