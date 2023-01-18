import React, { useState } from 'react'
import {BsHeart} from 'react-icons/bs'

const Like = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const hover = () => {
        setClick(false)
    }

    return (
        <button className='flex transition-all duration-300 hover:scale-105' onClick={handleClick}>
            {click ? (<div className='flex border-[#ffffff] border-[2px] rounded-full bg-[#D9D9D9] w-[49px] h-[49px] items-center justify-center' onClick={hover}><BsHeart className='iconHeart text-[#ffffff] text-[28px] mt-[5px]'/></div>)
                : (<div className='flex border-[#ffffff] border-[2px] rounded-full bg-[#FF64BC] w-[49px] h-[49px] items-center justify-center'><BsHeart className='iconHeart text-[#ffffff] text-[28px] mt-[5px]'/></div>)}
        </button>
    )
}

export default Like