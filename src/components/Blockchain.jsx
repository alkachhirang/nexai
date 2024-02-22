import React from 'react';
import Blockchainimg1 from '../assets/images/web.p/blockchain-1.webp';
import Blockchainimg2 from '../assets/images/web.p/blockchain-2.webp';
import Blockchainimg3 from '../assets/images/web.p/blockchain-3.webp';
import Blockchainimg4 from '../assets/images/web.p/blockchain-4.webp';
import Borderline from '../assets/images/web.p/blockchain-borderline.webp';

const Blockchain = () => {
    return (
        <div className='relative'>
            <div className=" absolute left-[-5%] top-[21%] blur-[124px] opacity-[70%]  w-[274px] h-[274px] rounded-[50%] bg-[#0066FF] animate-pulse md:block hidden"></div>
            <div className=" absolute right-[-10%] bottom-[31%] blur-[124px] opacity-[70%]  w-[274px] h-[274px] rounded-[50%] bg-[#0066FF] animate-pulse md:block hidden"></div>
            <div className='container lg:max-w-[1124px] lg:px-3 px-5 mx-auto pt-[30px] lg:pt-[80px] xl:pt-[91px]'>
                <div className='flex flex-col' data-aos="fade-down" >
                    <h2 className='ff_play font-normal text-[32px] sm:text-[48px] leading-[45px] sm:leading-[60.48px] text-[#FCFCFC] mb-[8px] sm:mb-[16px]'>Blockchain & AI technology</h2>
                    <p className='max-w-[997px] text-normal text-[#FFFFFF] text-[14px] sm:text-[16px] leading-[21.6px] sm:leading-[25.6px] mb-[10px] lg:mb-[40px] opacity-70'>Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home. Powered by sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient user experience.</p>
                    <p className='ff_play font-normal text-[16px] sm:text-[20px] leading-[22px] sm:leading-[32px] text-[#FFFFFF] lg:mb-[40px]'>By building the software on blockchain, Nexai provides the following advantages</p>
                </div>
            </div>
            <div className='container lg:max-w-[1124px] lg:px-3 sm:px-5 mx-auto'>
                <div className='xl:h-[646px] lg:h-[510px] h-[592px] overflow-y-scroll hidden_scrollbar'>
                    <div id='Privacy' className='flex flex-row flex-wrap items-center justify-between lg:mb-[38px] pb-[60px] mt-[60px] lg:mt-0  lg:pt-[100px] lg:pb-[75px] xl:pt-[201px] xl:pb-[182px] px-[20px] sm:px-[28px] relative'>
                        <img src={Borderline} alt="Borderline" className='absolute left-0 top-0 bottom-0 w-[2px] h-full ' />
                        <div className='lg:w-[51%] w-full' data-aos="fade-right">
                            <div className='lg:flex-col sm:flex-row flex-col flex gap-[12px] sm:gap-[16px] md:gap-[20px] lg:gap-0 mb-[10px] md:mb-[16px]'>
                                <div className='w-[58px] h-[58px] d-flex justify-center items-center cursor-pointer bg-[#040404] shadow-[0px_4px_16px_0px_rgba(0,_102,_255,_0.61)_inset] rounded-[50px] lg:mb-[20px]'>
                                    <p className='font-semibold text-[32px] text-[#FFFFFF] leading-[59.2px] text-center'>1</p>
                                </div>
                                <p className='ff_play font-bold text-[29px] sm:text-[40px] leading-[30px] sm:leading-[47px] lg:leading-[64px] text-[#FFFFFF]'>Security and Privacy</p>
                            </div>
                            <p className='font-normal text-[14px] sm:text-[16px] sm:leading-[25.6px] leading-[21.6px] text-[#FFFFFF] lg:max-w-[538px] opacity-70'>Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home. Powered by sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient user experience.</p>
                        </div>
                        <div className='lg:w-[47%] w-full flex lg:justify-end justify-center pt-[30px] lg:pt-0' data-aos="fade-left">
                            <img src={Blockchainimg1} alt="Blockchainimg1" className='max-w-[414px] w-full' />
                        </div>
                    </div>
                    <div id='terms' className='flex flex-row flex-wrap items-center justify-between lg:mb-[38px] rounded-[4px] bg-[#0066FF] pb-[60px] pt-[60px] lg:pt-[100px] lg:pb-[75px] xl:pt-[180px] xl:pb-[140px] px-[20px] sm:px-[28px] relative'>
                        <img src={Borderline} alt="Borderline" className='absolute left-0 top-0 bottom-0 w-[2px] h-full ' />
                        <div className='lg:w-[51%] w-full'>
                            <div className='lg:flex-col sm:flex-row flex-col flex gap-[12px] sm:gap-[16px] md:gap-[20px] lg:gap-0 mb-[10px] md:mb-[16px]'>
                                <div>
                                    <div className='w-[58px] h-[58px] flex justify-center items-center cursor-pointer bg-[#FCFCFC] shadow-[0px_4px_16px_0px_rgba(0,_102,_255,_0.61)_inset] rounded-[50px] lg:mb-[20px]'>
                                        <p className='font-semibold text-[32px] text-[#000] leading-[51.2px] text-center'>2</p>
                                    </div>
                                </div>
                                <p className='ff_play font-bold text-[27px] sm:text-[40px] leading-[37px] sm:leading-[47px] lg:leading-[64px] text-[#FFFFFF]'>Transparent and Reliable Data Management</p>
                            </div>
                            <p className='font-normal text-[14px] sm:text-[16px] sm:leading-[25.6px] leading-[21.6px] text-[#FFFFFF] lg:max-w-[538px] opacity-70'>Nexai enables transparent and reliable data management through blockchain. Users can trust that their data is securely stored and that they have full control over their digital identities and personal information.</p>
                        </div>
                        <div className='lg:w-[47%] w-full flex lg:justify-end justify-center pt-[30px] lg:pt-0'>
                            <img src={Blockchainimg2} alt="Blockchainimg2" className='max-w-[428px] w-full' />
                        </div>
                    </div>
                    <div className='flex flex-row flex-wrap items-center justify-between lg:mb-[38px] pb-[60px] mt-[60px] lg:mt-0  lg:pt-[100px] lg:pb-[75px] xl:pt-[180px] xl:pb-[140px] px-[20px] sm:px-[28px] relative'>
                        <img src={Borderline} alt="Borderline" className='absolute left-0 top-0 bottom-0 w-[2px] h-full ' />
                        <div className='lg:w-[51%] w-full'>
                            <div className='lg:flex-col sm:flex-row flex-col flex gap-[12px] sm:gap-[16px] md:gap-[20px] lg:gap-0 mb-[10px] md:mb-[16px]'>
                                <div className='w-[58px] h-[58px] flex justify-center items-center cursor-pointer bg-[#040404] shadow-[0px_4px_16px_0px_rgba(0,_102,_255,_0.61)_inset] rounded-[50px] lg:mb-[20px]'>
                                    <p className='font-semibold text-[32px] text-[#FFFFFF] leading-[51.2px] text-center'>3</p>
                                </div>
                                <p className='ff_play font-bold text-[29px] sm:text-[40px] leading-[37px] sm:leading-[50px] lg:leading-[64px] text-[#FFFFFF]'>Self-learning and Personalization</p>
                            </div>
                            <p className='font-normal text-[14px] sm:text-[16px] sm:leading-[25.6px] leading-[21.6px] text-[#FFFFFF] lg:max-w-[538px] opacity-70'>Nexai uses blockchain technology to create a self-learning platform. By analyzing user data, Nexai learns users' preferences and habits over time, resulting in a more personalized and tailored experience for each user.</p>
                        </div>
                        <div className='lg:w-[47%] w-full flex lg:justify-end justify-center pt-[30px] lg:pt-0'>
                            <img src={Blockchainimg3} alt="Blockchainimg3" className='max-w-[418px] w-full' />
                        </div>
                    </div>
                    <div id='Phone' className='flex flex-row flex-wrap items-center justify-between lg:mb-[38px] rounded-[4px] bg-[#0066FF] pb-[60px] pt-[60px] lg:pt-[100px] lg:pb-[75px] xl:pt-[180px] xl:pb-[114px] px-[20px] sm:px-[28px] relative'>
                        <img src={Borderline} alt="Borderline" className='absolute left-0 top-0 bottom-0 w-[2px] h-full ' />
                        <div className='lg:w-[51%] w-full'>
                            <div className='lg:flex-col sm:flex-row flex-col flex gap-[12px] sm:gap-[16px] md:gap-[20px] lg:gap-0 mb-[10px] md:mb-[16px]'>
                                <div>
                                    <div className='w-[58px] h-[58px] flex justify-center items-center cursor-pointer bg-[#FCFCFC] shadow-[0px_4px_16px_0px_rgba(0,_102,_255,_0.61)_inset] rounded-[50px] lg:mb-[20px]'>
                                        <p className='font-semibold text-[32px] text-[#000] leading-[51.2px] text-center'>4</p>
                                    </div>
                                </div>
                                <p className='ff_play font-bold text-[26px] sm:text-[38px] md:text-[40px] leading-[37px] sm:leading-[47px] lg:leading-[64px] text-[#FFFFFF]'>Automated and Transparent Transactions</p>
                            </div>
                            <p className='font-normal text-[14px] sm:text-[16px] sm:leading-[25.6px] leading-[21.6px] text-[#FFFFFF] lg:max-w-[538px] opacity-70'>With the help of smart contracts on the blockchain, Nexai can automate and ensure the execution of agreements and transactions between users and devices. This reduces the need for third-party involvement and provides increased transparency and efficiency in interactions.</p>
                        </div>
                        <div className='lg:w-[47%] w-full flex lg:justify-end justify-center pt-[30px] lg:pt-0'>
                            <img src={Blockchainimg4} alt="Blockchainimg4" className='max-w-[428px] w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blockchain;
