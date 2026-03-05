import React from 'react';
import vector1 from "../../assets/vector1.png"
import vector2 from "../../assets/vector2.png"
const Banner = ({progressCount,resolvedCount}) => {
  return (
    <div className='grid grid-cols-2 gap-6 justify-center w-11/12 mx-auto'>

    <div className="card bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-primary-content p-10 relative overflow-hidden ">
      <img className='absolute -top-1 -right-1 opacity-20 pointer-events-none
      ' src={vector2} alt="" />

      <img className='absolute -bottom-1 -left-1  opacity-20 pointer-events-none ' src={vector1} alt="" />

  <div className="card-body items-center relative z-10">
    <p className='text-xl'>In-Progress</p>
    <h1 className='text-3xl font-bold'>{progressCount}</h1>
  </div>
</div>

<div className="card bg-linear-to-r from-[#54CF68] to-[#00827A] text-primary-content p-10 relative overflow-hidden">

    <img className='absolute -top-1 -right-1 opacity-20 pointer-events-none
      ' src={vector2} alt="" />

      <img className='absolute -bottom-1 -left-1  opacity-20 pointer-events-none ' src={vector1} alt="" />

  <div className="card-body items-center relative z-10">
    <p className='text-xl'>Resolved</p>
    <h1 className='text-3xl font-bold'>{resolvedCount}</h1>
  </div>
</div>
    </div>
  );
};

export default Banner;
