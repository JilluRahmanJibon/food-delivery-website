import React from 'react';
import delicious from '../Assets/delicious-img.png'
const Varieties = () => {
    return (
        <div className='flex flex-col lg:flex-row  justify-center items-center'>
            <div>
                <h4 className='text-[#FA4A0C] font-bold'>Explore varieties</h4>
                <h1 className='text-[#252B42] font-bold text-[40px] leading-[57px] py-5'>Shop for your favorites <br />
                    meal as e dey hot.</h1>
                <p className='text-[#737373] text-[24px] leading-[38px]'>Shop for your favorite meals or drinks <br />
                    and enjoy while doing it.</p>
            </div>
            <div>
                <img className='w-[305px]' src={delicious} alt="" />
            </div>
        </div>
    );
};

export default Varieties;