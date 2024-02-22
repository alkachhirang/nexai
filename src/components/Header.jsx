import React, { useState } from "react";
import HeroLayer from "../assets/images/png/Hero-Layer.webp";
import HomeRobot from "../assets/images/png/HomeRobot.webp";
import Bggif from '../assets/images/gif/HeroGif.gif';

const Header = () => {
    const [show, setShow] = useState(true);
    if (show === false) {
        document.body.classList.add("max-lg:overflow-hidden");
    } else {
        document.body.classList.remove("max-lg:overflow-hidden");
    }
    return (
        <>
            <div className="bg-[#08090e] relative">
                <div className="absolute left-0 bottom-[-2px] right-0 w-full h-[121px] bg-gradient-to-b from-[#08090e00] to-[#08090E] z-[2] "> </div>
                <div className="bg-[#08090e] absolute bottom-0 top-0 left-0 right-0 w-full h-full">
                    <img src={Bggif} alt="Bggif" className="w-full h-full object-center object-cover opacity-20" />
                </div>
                <div className="absolute left-0 top-0 right-0 bottom-0 bg-[#0066ff]  mix-blend-overlay ">
                </div>
                <div className="absolute left-0 top-0 bottom-0 right-0  xl:top-[-100px] flex items-center justify-center">
                    <img
                        src={HomeRobot}
                        alt="HomeRobot"
                        className="sm:max-w-[450px] max-h-[857px] h-full max-w-[400px] w-full object-center object-cover"
                    />
                </div>
                <div className="container lg:max-w-[1124px] lg:px-3 px-5 mx-auto relative z-[3]">
                    <nav className="flex items-center md:justify-end justify-between lg:gap-[254px] gap-[100px] h-[100px] relative z-[1]">
                        <ul
                            className={`${show ? "left-[-100%]" : "left-0"
                                } flex max-md:fixed max-md:top-0 max-md:bg-black max-md:h-full max-md:w-full max-md:z-[10] max-md:transition-all max-md:duration-300 max-md:ease-linear max-md:min-h-screen max-md:flex-col gap-5 items-center justify-center`}
                        >
                            <li onClick={() => setShow(!show)}>
                                <a
                                    href="#Home"
                                    className="font-normal text-[16px] leading-[150%] text-[#ffffff] hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                                >
                                    Home
                                </a>
                            </li>
                            <li onClick={() => setShow(!show)}>
                                <a
                                    href="#Marketplace"
                                    className="font-normal text-[16px] leading-[150%] text-[#ffffff] hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                                >
                                    Marketplace
                                </a>
                            </li>
                            <li onClick={() => setShow(!show)}>
                                <a
                                    href="#About"
                                    className="font-normal text-[16px] leading-[150%] text-[#ffffff] hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                                >
                                    About
                                </a>
                            </li>
                            <li onClick={() => setShow(!show)}>
                                <a
                                    href="#NexChat"
                                    className="font-normal text-[16px] leading-[150%] text-[#ffffff] hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                                >
                                    NexChat
                                </a>
                            </li>
                        </ul>
                        <button className="text-[#FCFCFC] hover:shadow-[0_3px_20px_rgba(255,_255,_255,_1)] transition-all duration-500 ease-linear hover:text-[#0066FF] hover:bg-white border-2 hover:border-[#0066FF] rounded-[12px] px-[30.6px] py-[16px] border-transparent bg-[#0066FF] font-medium text-[16px] sm:text-[18px] leading-[150%] md:block hidden">
                            Sign Up
                        </button>
                        <div
                            onClick={() => setShow(!show)}
                            className="md:hidden w-[35px] h-[23px] relative z-[10] flex justify-between flex-col cursor-pointer"
                        >
                            <span
                                className={`${show
                                    ? "bg-white h-[3px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                                    : "bg-white transition-all duration-300 rounded-[3px] ease-linear h-[4px] w-full rotate-[50deg] translate-y-[11px]"
                                    }`}
                            ></span>
                            <span
                                className={`${show
                                    ? "bg-white h-[3px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                                    : "duration-300 rounded-[3px] ease-linear transition-all hidden"
                                    }`}
                            ></span>
                            <span
                                className={`${show
                                    ? "bg-white h-[3px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                                    : "bg-white transition-all duration-300 rounded-[3px] ease-linear h-[4px] w-full rotate-[-50deg] translate-y-[-180%]"
                                    }`}
                            ></span>
                        </div>
                        <button className="text-[#FCFCFC] rounded-[12px] px-[30.6px] sm:py-[16px] py-3 border-transparent bg-[#0066FF] font-medium text-[18px] leading-[150%] md:hidden block hover:shadow-[0_3px_20px_rgba(255,_255,_255,_1)] transition-all duration-500 ease-linear hover:text-[#0066FF] hover:bg-white border-2 hover:border-[#0066FF]">
                            Sign Up
                        </button>
                    </nav>
                </div>
                <div id="Home" className="container lg:max-w-[1124px] lg:px-3 px-5 mx-auto relative pb-[210px] pt-[100px] md:pt-[189px] md:pb-[266px] relative z-[2]">
                    <div className="flex flex-col justify-center items-center" data-aos="fade-down">
                        <h1 className="text-white lg:text-[60px] md:text-[55px] sm:text-[51px] text-[31px] leading-[127%] ff_play font-bold max-w-[1020px] text-center sm:mb-10 mb-6">
                            <span className="text-[#FCFCFC]">NexAi</span> Is An Advanced
                            AI-Powered Home Assistant
                        </h1>
                        <div>
                            <button className="text-[#FCFCFC] rounded-[12px] px-[30.6px] sm:py-[16px] py-3 border-transparent bg-[#0066FF] font-medium text-[16px] sm:text-[18px] leading-[150%] hover:shadow-[0_3px_20px_rgba(255,_255,_255,_1)] transition-all duration-500 ease-linear hover:text-[#0066FF] hover:bg-white border-2 hover:border-[#0066FF]">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
