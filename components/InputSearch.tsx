import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

const InputSearch = () => {

    return (
        <div className='wrapper w-[100%] max-w-[465px] m-1 h400-normal-13px h-[46px]'>
            <div className="searchBar w-[100%] flex flex-row items-center rounded-[23px] bg-white h-[100%]">
                <input id="searchInput" type="text" name="searchInput" placeholder="¿Qué quieres ver en tu ciudad?" value="" className='w-[100%] bg-transparent ml-[24px]'/>
                <button id="searchSubmit" type="submit" name="searchQuerySubmit" className='mr-[20px]'>
                    <AiOutlineSearch className='lens text-primary-grayDark text-2xl'/>
                </button>
            </div>      
        </div>

    )
}

export default InputSearch