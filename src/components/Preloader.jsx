import React from 'react';
import { Loader } from './Iconimg';

const Preloader = () => {
    return (
        <div>
            <div className='min-h-screen flex flex-col gap-[12px] justify-center items-center bg-[#000]'>
                <h2 className='text-[48px] ff_neuro font-normal text-[#fff] '>Nex<span className='text-[#0066FF]'>Ai</span></h2>
                <Loader />
            </div>

        </div>
    )
}

export default Preloader;
