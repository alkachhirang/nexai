import React from 'react';
import Presalegif from '../assets/images/gif/presale-gif.gif';

const Presale = () => {
    return (
        <div className=' pt-[40px] sm:pt-[70px] md:pt-[80px] pb-[35px] sm:pb-[50px] md:pb-[70px] lg:pb-0 relative'>
            <div className=" absolute right-[-11%] top-[-10%] blur-[124px] opacity-[70%]  w-[274px] h-[274px] rounded-[50%] bg-[#0066FF] animate-pulse md:block hidden"></div>
            <div className=" absolute left-[-11%] top-[29%] blur-[124px] opacity-[70%]  w-[274px] h-[274px] rounded-[50%] bg-[#0066FF] animate-pulse md:block hidden"></div>
            <div className='container lg:max-w-[1124px] lg:px-3 px-5 mx-auto '>
                <div className='flex flex-row flex-wrap items-center justify-center lg:justify-between'>
                    <div className='lg:w-[40%] w-full flex justify-center lg:justify-start' data-aos="fade-right">
                        <img src={Presalegif} alt="Presalegif" className='w-full max-w-[564px]' />
                    </div>
                    <div className='lg:w-[52%] w-full flex lg:justify-end' data-aos="fade-left">
                        <div>
                            <h2 className='ff_play font-normal text-[32px] sm:text-[48px] leading-[60.48px] text-[#FCFCFC] sm:mb-[16px] lg:text-start text-center'>Whitelist & Presale</h2>
                            <p className='lg:max-w-[482px] text-normal text-[#FFFFFF] opacity-70 text-[14px] sm:text-[16px] leading-[25.6px] lg:text-start text-center'>For our early supporters, we have curated an exclusive presale opportunity. To ensure your participation, we will be implementing a whitelist registration process. By signing up on the whitelist and following the provided instructions, you will secure your spot in this exciting event. To stay informed about the whitelist opening and receive timely updates, kindly provide us with your email address, and we will notify you accordingly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presale;
