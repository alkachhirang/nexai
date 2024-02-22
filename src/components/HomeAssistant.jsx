import React from 'react';
import Assistantgif from '../assets/images/gif/assistant-gif.gif';
import Assistantimg from '../assets/images/web.p/assistant-skull-img.webp';

const HomeAssistant = () => {
    return (
        <div id='About' className='pt-[37px] md:pt-[45px] lg:pt-[75px] lg:pb-[130px] overflow-hidden relative hidden_scrollbar'>
            <div className="absolute left-0 bottom-[-38px] right-0 w-full h-[121px] bg-gradient-to-b from-[#08090e00] to-[#08090E] z-[1] "> </div>
            <div className=" absolute left-0 top-[46%] blur-[124px] opacity-[70%]  w-[274px] h-[168px] rounded-[50%] bg-[#0066FF] animate-pulse md:block hidden"></div>
            <div className="container lg:max-w-[1124px] lg:px-3 px-5 mx-auto">
                <div className='flex flex-row flex-wrap items-center xl:justify-between'>
                    <div className='xl:w-[55%] w-full' data-aos="fade-right">
                        <h2 className='ff_play font-normal text-[32px] sm:text-[48px] leading-[42px] sm:leading-[60.48px] text-[#FCFCFC] mb-[8px] sm:mb-[16px] xl:text-start text-center'>Ai-Powered Home Assistant</h2>
                        <p className='font-normal text-[14px] sm:text-[16px] leading-[25.6px] text-[#fff] xl:text-start text-center opacity-70 '>Nexai is an advanced AI-powered home assistant that brings the future to your fingertips. With its ability to engage in natural, fluent conversations in over 15 languages,</p>
                        <p className='font-normal text-[14px] sm:text-[16px] leading-[25.6px] text-[#fff] xl:text-start text-center opacity-70'>Nexai offers an incredibly futuristic experience. It can take the initiative to ask about your day, schedule meetings, provide timely reminders</p>
                        <p className='font-normal text-[14px] sm:text-[16px] leading-[25.6px] text-[#fff] mb-[10px] sm:mb-[20px] xl:mb-[40px] xl:text-start text-center opacity-70'>assist with cooking by suggesting ingredients, track your fitness and nutrition goals, and even handle bill payments.</p>
                        <div className='flex xl:justify-start justify-center'>
                            <button className="text-[#FCFCFC] rounded-[12px] px-[30px] sm:py-[16px] py-3 border-transparent bg-[#0066FF] font-medium text-[16px] sm:text-[18px] leading-[150%] hover:shadow-[0_3px_20px_rgba(255,_255,_255,_1)] transition-all duration-500 ease-linear hover:text-[#0066FF] hover:bg-white border-2 hover:border-[#0066FF]">
                                Learn more
                            </button>
                        </div>
                    </div>
                    <div className='xl:w-[40%] flex w-full pt-[40px] xl:pt-0' data-aos="fade-left">
                        <div className='relative w-full flex justify-center items-center xl:justify-end'>
                            <img src={Assistantgif} alt="Assistantgif" className='absolute mix-blend-color-dodge max-w-[210px] sm:max-w-[301px] w-full left-[46%] bottom-[2%] ' />
                            <img src={Assistantimg} alt="Assistantimg" className='max-w-[310px] sm:max-w-[443px] w-full relative z-[2] ' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAssistant;
