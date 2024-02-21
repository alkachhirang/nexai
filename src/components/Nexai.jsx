import React from 'react';
import Slider from "react-slick";

const Nexai = () => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 2.50,
                    centerMode: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2.10,
                    centerMode: true,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    arrows: false,
                    slidesToShow: 1.60,
                    centerMode: true,
                },
            },
        ],
    };

    return (
        <div id='Marketplace' className='bg-Nexaibg lg:bg-bgsize bg-no-repeat bg-cover min-h-scree n pb-[40px] lg:pb-0 lg:py-[60px] relative'>
            <div className="absolute left-0 bottom-[3%] right-0 w-full h-[121px]  bg-gradient-to-b from-[#010B24] to-[#010309] opacity-[0.8]"></div>
            <div className='container lg:max-w-[1124px] lg:px-3 px-5 mx-auto'>
                <div className='flex flex-col justify-center items-center pb-[40px] sm:pb-[80px] lg:pb-[100px] xl:pb-[298px]' data-aos="fade-down" >
                    <h2 className='ff_play font-normal text-[32px] sm:text-[48px] leading-[44.48px] sm:leading-[60.48px] text-[#FCFCFC] text-center mb-[16px]'>Things going easier with NexAi</h2>
                    <p className='max-w-[823px] text-normal text-[#FFFFFF] text-[14px] sm:text-[16px] leading-[21.6px] sm:leading-[25.6px] text-center opacity-70'>Sed sit sit sit at laoreet tortor dis euismod in. Viverra arcu semper mauris lorem dignissim vulputate orci. Habitant imperdiet at molestie ipsumpretium in pharetra tincidunt.</p>
                </div>
            </div>

            <div className="slider xl:mr-auto max-lg:container max-lg:px-6">
                <div class="slide-track xl:gap-[164px] lg:gap-[100px] gap-[50px]">
                    <div className="slide">
                        <div className="!shadow-[0px,_4px,_20px,0px#02CDCF29] hover:shadow-[8px,_10px,_20px,8px#ffffff] !backdrop-blur-[79px] h-[180px] flex justify-center items-center rounded-[16px] border border-white border-solid  !bg-gradient-to-b !from-[#ffffff00] !to-[#ffffff17] px-[13px]">
                            <p className="text-center ff_play leading-[160%] font-bold text-white text-[28px] max-w-[254px]">
                                NexAi, Turn on light
                            </p>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="!shadow-[0px,_4px,_20px,0px#02CDCF29] hover:shadow-[8px,_10px,_20px,8px#ffffff] !backdrop-blur-[79px] h-[180px] flex justify-center items-center rounded-[16px] border border-white border-solid  !bg-gradient-to-b !from-[#ffffff00] !to-[#ffffff17] px-[13px]">
                            <p className="text-center ff_play leading-[160%] font-bold text-white text-[28px] max-w-[254px]">
                                NexAi, Turn on light
                            </p>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="!shadow-[0px,_4px,_20px,0px#02CDCF29] hover:shadow-[8px,_10px,_20px,8px#ffffff] !backdrop-blur-[79px] h-[180px] flex justify-center items-center rounded-[16px] border border-white border-solid  !bg-gradient-to-b !from-[#ffffff00] !to-[#ffffff17] px-[13px]">
                            <p className="text-center ff_play leading-[160%] font-bold text-white text-[28px] max-w-[254px]">
                                NexAi, Turn on light
                            </p>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="!shadow-[0px,_4px,_20px,0px#02CDCF29] hover:shadow-[8px,_10px,_20px,8px#ffffff] !backdrop-blur-[79px] h-[180px] flex justify-center items-center rounded-[16px] border border-white border-solid  !bg-gradient-to-b !from-[#ffffff00] !to-[#ffffff17] px-[13px]">
                            <p className="text-center ff_play leading-[160%] font-bold text-white text-[28px] max-w-[254px]">
                                NexAi, Turn on light
                            </p>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="!shadow-[0px,_4px,_20px,0px#02CDCF29] hover:shadow-[8px,_10px,_20px,8px#ffffff] !backdrop-blur-[79px] h-[180px] flex justify-center items-center rounded-[16px] border border-white border-solid  !bg-gradient-to-b !from-[#ffffff00] !to-[#ffffff17] px-[13px]">
                            <p className="text-center ff_play leading-[160%] font-bold text-white text-[28px] max-w-[254px]">
                                NexAi, Turn on light
                            </p>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="!shadow-[0px,_4px,_20px,0px#02CDCF29] hover:shadow-[8px,_10px,_20px,8px#ffffff] !backdrop-blur-[79px] h-[180px] flex justify-center items-center rounded-[16px] border border-white border-solid  !bg-gradient-to-b !from-[#ffffff00] !to-[#ffffff17] px-[13px]">
                            <p className="text-center ff_play leading-[160%] font-bold text-white text-[28px] max-w-[254px]">
                                NexAi, Turn on light
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slider xl:ml-auto max-lg:container max-lg:px-6 mt-[20px] sm:mt-[40px]">
                <div className="slide-track2 xl:gap-[164px] lg:gap-[100px] gap-[50px]">
                    <div className="slide">
                        <div className="!shadow-[0px,_4px,_20px,0px#02CDCF29] hover:shadow-[8px,_10px,_20px,8px#ffffff] !backdrop-blur-[79px] h-[180px] flex justify-center items-center rounded-[16px] border border-white border-solid  !bg-gradient-to-b !from-[#ffffff00] !to-[#ffffff17] px-[13px]">
                            <p className="text-center ff_play leading-[160%] font-bold text-white text-[28px] max-w-[254px]">
                                NexAi, measure this table
                            </p>
                        </div>
                    </div>
                    <div class="slide">
                        <div className="!shadow-[0px,_4px,_20px,0px#02CDCF29] hover:shadow-[8px,_10px,_20px,8px#ffffff] !backdrop-blur-[79px] h-[180px] flex justify-center items-center rounded-[16px] border border-white border-solid  !bg-gradient-to-b !from-[#ffffff00] !to-[#ffffff17] px-[13px]">
                            <p className="text-center ff_play leading-[160%] font-bold text-white text-[28px] max-w-[254px]">
                                NexAi, Turn off light
                            </p>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="!shadow-[0px,_4px,_20px,0px#02CDCF29] hover:shadow-[8px,_10px,_20px,8px#ffffff] !backdrop-blur-[79px] h-[180px] flex justify-center items-center rounded-[16px] border border-white border-solid  !bg-gradient-to-b !from-[#ffffff00] !to-[#ffffff17] px-[13px]">
                            <p className="text-center ff_play leading-[160%] font-bold text-white text-[28px] max-w-[254px]">
                                NexAi, Turn on music
                            </p>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="!shadow-[0px,_4px,_20px,0px#02CDCF29] hover:shadow-[8px,_10px,_20px,8px#ffffff] !backdrop-blur-[79px] h-[180px] flex justify-center items-center rounded-[16px] border border-white border-solid  !bg-gradient-to-b !from-[#ffffff00] !to-[#ffffff17] px-[13px]">
                            <p className="text-center ff_play leading-[160%] font-bold text-white text-[28px] max-w-[254px]">
                                NexAi, Turn on light
                            </p>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="!shadow-[0px,_4px,_20px,0px#02CDCF29] hover:shadow-[8px,_10px,_20px,8px#ffffff] !backdrop-blur-[79px] h-[180px] flex justify-center items-center rounded-[16px] border border-white border-solid  !bg-gradient-to-b !from-[#ffffff00] !to-[#ffffff17] px-[13px]">
                            <p className="text-center ff_play leading-[160%] font-bold text-white text-[28px] max-w-[254px]">
                                NexAi, Turn on light
                            </p>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="!shadow-[0px,_4px,_20px,0px#02CDCF29] hover:shadow-[8px,_10px,_20px,8px#ffffff] !backdrop-blur-[79px] h-[180px] flex justify-center items-center rounded-[16px] border border-white border-solid  !bg-gradient-to-b !from-[#ffffff00] !to-[#ffffff17] px-[13px]">
                            <p className="text-center ff_play leading-[160%] font-bold text-white text-[28px] max-w-[254px]">
                                NexAi, Turn on light
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nexai;
