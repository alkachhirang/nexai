import React from 'react';
import Unique1 from '../assets/images/png/unique-img1.png';
import Unique2 from '../assets/images/png/unique-img2.png';
import Unique3 from '../assets/images/png/unique-img3.png';
import Unique4 from '../assets/images/png/unique-img4.png';
import Bgimg from '../assets/images/gif/unique_bg-img.gif';


const UniqueFeatures = () => {
    return (
        <div id='Features' className='md:pt-[80px] sm:pt-[50px] pt-[40px] pb-[50px] sm:pb-[121px] relative'>
            <div className=" absolute right-[-2%] top-[0] blur-[124px] opacity-[70%]  w-[274px] h-[274px] rounded-[50%] bg-[#0066FF] animate-pulse md:block hidden"></div>
            <div className=" absolute left-[-2%] bottom-[7%] blur-[124px] opacity-[70%]  w-[274px] h-[182px] rounded-[50%] bg-[#0066FF] animate-pulse md:block hidden"></div>
            <div className="absolute left-0 bottom-0 right-0 w-full h-[121px]  bg-gradient-to-b from-[#01030900] to-[#010309]"></div>
            <div className='absolute left-0 right-0 bottom-0 top-0 flex justify-center items-center'>
                <img src={Bgimg} alt="Bgimg" className='w-full max-w-[950px] mix-blend-lighten translate-y-[-29%]  ' />
            </div>
            <div className='container lg:max-w-[1124px] lg:px-3 px-5 mx-auto h-[770px] overflow-y-scroll hidden_scrollbar'>
                <div className='flex flex-col justify-center items-center pb-[66px]' data-aos="fade-down">
                    <h2 className='ff_play font-normal text-[32px] sm:text-[48px] leading-[60.48px] text-[#FCFCFC] text-center sm:mb-[16px]'>Unique features</h2>
                    <p className='max-w-[517px] text-normal text-[#FFFFFF] text-[14px] sm:text-[16px] leading-[25.6px] text-center'>ability to engage in natural, fluent conversations in over 15 languages,</p>
                </div>
                <div className='flex-row flex flex-wrap justify-center lg:justify-between'>
                    <div className='lg:w-[49%] md:w-[70%] w-full'>
                        <div className='rounded-[16px] bg-[#ffffff33] border-[1px] border-[#FCFCFC66] border-solid lg:max-w-[364px] cursor-pointer lg:mb-[180px] mb-[50px] relative z-[1]'>
                            <img src={Unique1} alt="Unique1" className='rounded-tr-[16px] rounded-tl-[16px] lg:max-w-[364px] w-full' />
                            <h3 className='font-semibold text-[20px] text-[#fff] leading-[32px] max-w-[304px] pt-[20px] pb-[30px] pr-[36px] pl-[24px]'>Remote Access and File Management</h3>
                        </div>
                        <div className='rounded-[16px] bg-[#ffffff33]  border-[1px] border-[#FCFCFC66] border-solid lg:max-w-[364px] cursor-pointer mb-[50px] relative z-[1]'>
                            <img src={Unique3} alt="Unique3" className='rounded-tr-[16px] rounded-tl-[16px] lg:max-w-[364px] w-full' />
                            <h3 className='font-semibold text-[20px] text-[#fff] leading-[32px] lg:max-w-[304px] pt-[20px] pb-[30px] pr-[36px] pl-[24px]'>Autonomous and Natural Language Communication</h3>
                        </div>
                    </div>
                    <div className='lg:w-[49%] md:w-[70%] w-full flex flex-col lg:items-end lg:translate-y-[27%]'>
                        <div className='rounded-[16px] border-[1px] bg-[#ffffff33]  border-[#FCFCFC66] border-solid lg:max-w-[364px] w-full cursor-pointer lg:mb-[180px] mb-[50px]'>
                            <img src={Unique2} alt="Unique2" className='rounded-tr-[16px] rounded-tl-[16px] lg:max-w-[364px] w-full' />
                            <h3 className='font-semibold text-[20px] text-[#fff] leading-[32px] max-w-[304px] pt-[20px] pb-[30px] pr-[36px] pl-[24px]'>Real-time Home Monitoring</h3>
                        </div>
                        <div className='rounded-[16px] bg-[#ffffff33]  border-[1px] border-[#FCFCFC66] border-solid lg:max-w-[364px] w-full cursor-pointer'>
                            <img src={Unique4} alt="Unique4" className='rounded-tr-[16px] rounded-tl-[16px] lg:max-w-[364px] w-full' />
                            <h3 className='font-semibold text-[20px] text-[#fff] leading-[32px] max-w-[304px] pt-[20px] pb-[30px] pr-[36px] pl-[24px]'>Intelligent Contextual Awareness</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UniqueFeatures
