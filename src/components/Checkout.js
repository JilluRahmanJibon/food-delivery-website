import React from 'react';
import checkout from '../Assets/checkout-img.png'

const Checkout = () => {
    return (
        <div>
            <div className='lg:flex-row flex flex-col-reverse items-center justify-center'>
                <div>
                    <img className='w-[305px]' src={checkout} alt="" />
                </div>
                <div>
                    <h4 className='text-[#FA4A0C] font-bold'>Checkout</h4>
                    <h1 className='text-[#252B42] font-bold text-[40px] leading-[57px] py-5'>When you done check out <br />
                        and get it delivered.</h1>
                    <p className='text-[#737373] text-[24px] leading-[38px]'>When you done check out and get it <br />
                        delivered with ease.</p>
                </div>
            </div>
        </div>
    );
};

export default Checkout;