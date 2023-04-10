import React from 'react';
import bannerImg from "../Assets/banner-img.png"
import groupImg from '../Assets/group-img.png'


const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${bannerImg})` }} className={`lg:h-[619px] bg-no-repeat bg-cover  lg:mb-[450px]`}>
            <div className='flex flex-col items-center text-center justify-center pt-14 text-white'>
                <div>
                    <h3 className='font-bold pb-5'>Food app</h3>
                    <h1 className='lg:text-[58px] text-[36px] font-bold lg:leading-[80px] leading-[42px]'> Why stay hungry when <br className='hidden lg:block' />
                        you can order form Bella Onojie</h1>
                    <p className='text-[24px] font-medium py-5 leading-[38px]'>Download the bella onoje’s food app now on</p>
                </div>
                <div className='lg:flex-row flex-col flex lg:gap-6 gap-2 z-50 py-3'>
                    <button className='bg-[#FA4A0C] rounded-[30px] font-semibold py-[16px]  w-[236px]'>Playstore</button>
                    <button className=' border border-white rounded-[30px] font-semibold py-[16px]  w-[236px]'>App store</button>
                </div>
            </div>

            <img className='mx-auto  lg:w-[548px] lg:-left-8 lg:relative -top-28  ' src={groupImg} alt="" />

        </div>

    );
};

export default Banner;