import React from 'react';
import Login from '../Assets/login-img.png'

const WorkingProcess = () => {
    return (
        <div>
            <div className='w-[884px] bg-[#E4E4E4] h-[1px] mx-auto'>
            </div>
            <h1 className='text-center font-semibold text-[44px] leading-[36px] pt-[72px]'>How the app works</h1>

            <div className='lg:flex-row flex flex-col-reverse items-center justify-center'>
                <div>
                    <img className='w-[305px]' src={Login} alt="" />
                </div>
                <div>
                    <h4 className='text-[#FA4A0C] font-bold'>Create an account</h4>
                    <h1 className='text-[#252B42] font-bold text-[40px] leading-[57px] py-5'>Create/login to an existing <br />
                        account to get started</h1>
                    <p className='text-[#737373] text-[24px] leading-[38px]'>An account is created with your email <br />
                        and a desired password</p>
                </div>
            </div>
        </div>
    );
};

export default WorkingProcess;