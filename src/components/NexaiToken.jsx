import React from 'react';
import bgimg from '../assets/images/png/bgtoken.webp';
import Tokengif from '../assets/images/gif/token-gif.gif';

const NexaiToken = () => {
    return (
        <div id='Tokens' className='bg-[#ffffff0A] pt-[50px] sm:pt-[70px] md:pt-[90px] pb-[50px] sm:pb-[70px] md:pb-[108px] relative'>
            <div className=" absolute left-[-7%] top-[8%] blur-[124px] opacity-[70%]  w-[274px] h-[274px] rounded-[50%] bg-[#0066FF] animate-pulse md:block hidden"></div>
            <div className='absolute left-0 right-0 top-0 bottom-0 '>
                <img src={bgimg} alt="bgimg" className='opacity-[4%] w-full h-full' />
            </div>
            <h2 className='ff_play font-normal text-[32px] sm:text-[48px] leading-[45px] sm:leading-[60.48px] text-[#FCFCFC] text-center mb-[40px] md:mb-[70px]' data-aos="fade-down">NexAI Token & utility</h2>
            <div className='container lg:max-w-[1124px] lg:px-3 px-5 mx-auto'>
                <div className='border-[1px] border-solid border-[#0066FF] rounded-[32px] max-w-[1140px] bg-[#FFFFFF0A] px-[25px] sm:pl-[60px] pt-[50px] pb-[70px] sm:pt-[80px] sm:pb-[120px] md:pb-[165px] lg:pt-[149px] lg:pb-[237px] overflow-hidden relative '>
                    <img src={Tokengif} alt="Tokengif" className='absolute max-w-[470px] md:max-w-[500px] lg:max-w-[689px] w-full right-[-11%] bottom-[-18%] max-lg:opacity-60' />
                    <div className='flex-row flex-wrap flex'>
                        <div className='lg:w-[50%] w-full relative z-[1]' data-aos="fade-right">
                            <div>
                                <div className='w-[58px] h-[58px] cursor-pointer bg-[#FCFCFC] shadow-[0px_4px_16px_0px_rgba(0,_102,_255,_0.61)_inset] rounded-[50px] mb-[15px] sm:mb-[30px]'>
                                    <p className='font-semibold text-[32px] text-[#0066FF] leading-[51.2px] text-center'>1</p>
                                </div>
                            </div>
                            <p className='ff_play font-normal text-[30px] leading-[39.6px]  sm:text-[32px] sm:leading-[41.6px] text-[#FFFFFF] mb-[8px] sm:mb-[16px]'>Purchasing Nexai Products</p>
                            <p className='font-normal text-[14px] leading-[21.6px] lg:max-w-[390px] sm:text-[16px] sm:leading-[25.6px] text-[#FFFFFF] opacity-70'>Nex AI tokens will be the primary currency for acquiring Nexai's extensive range of software solutions, hardware devices, including drones and sensors, and other smart home products available on the Nexai marketplace. Users can confidently make purchases using Nex tokens, enjoying the convenience and flexibility of a token-based payment system.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NexaiToken
