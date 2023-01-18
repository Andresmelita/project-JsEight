import React from 'react'
import {RiArrowRightLine} from 'react-icons/ri'

const NextOne = () => {
    return (
        <div className='flex bg-[#fff0] w-[59px] h-[59px] transition-all duration-300 hover:scale-105'>
            <button className='flex rounded-full border-primary-blue border-[4px] items-center justify-center w-full h-full'>
                <RiArrowRightLine className='text-[45px] text-primary-blue'/>
            </button>
        </div>
    )
}

export default NextOne