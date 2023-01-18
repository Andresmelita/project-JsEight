import React, {useState, useEffect} from 'react';
import Image from "next/image"
import { kMaxLength } from 'buffer';
import InputSearch from './InputSearch';

const Footer = () => {

  return (
    <footer className='bottom-0 left-0 flex flex-col items-center justify-center relative'>
      <div className=''>
        <Image 
          src="/images/footerImage.png" 
          alt='footer-image' 
          width={kMaxLength} 
          height={kMaxLength}
        />
      </div>
      <div className='w-[100%] flex justify-center items-center absolute p-[26px]'>
        <InputSearch/>
      </div>
    </footer>
  )
}

export default Footer