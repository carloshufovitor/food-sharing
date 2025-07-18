import React from 'react';
import Banner from './Banner';
import FeaturedFoods from './FeaturedFoods';

const Home = () => {
     


    return (
        <div>
           <Banner></Banner>
            <div>
            <h2 className='text-4xl font-bold font-[nato-serif] text-center mt-52'>Featured Gardeners</h2>
            <div className='max-w-11/12 mx-auto my-10 '>
           <FeaturedFoods></FeaturedFoods>
           </div>
           <div className='text-center'>
            
           <button className="w- rounded bg-[#73B21A] hover:bg-[#008236] hover:text-white px-4 py-2 font-semibold">
  View All
</button>
           </div>
           </div>
        </div>
    );
};

export default Home;