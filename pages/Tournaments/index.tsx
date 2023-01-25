import Link from 'next/link'
import React, { ReactElement } from 'react'
import InputSearch from '../../components/InputSearch'
import Layout from '../../components/Layout'
import NestedLayout from '../../components/NestedLayout'
import Slider from '../../components/Slider'

export default function tournamentsPage(){
  return (
    <div className="topic__page">
      <div className="topic__header p-4 flex flex-col gap-4 justify-center bg-[url('/images/tournamentsHeader.png')] bg-cover bg-center w-[100%] max-h-[204px] h-[204px] md:pl-[10%] md:pr-[10%] lg:pl-[15%] lg:pr-[15%] md:pt-1% md:pb-1%">
        <div className="header__links">
          <span className='h500-normal-16px text-[#fff]'><Link href="/">Home </Link> / Tournaments</span>
        </div>
        <div className="header__info flex flex-col gap-2">
          <div className="header__tittle">
            <h1 className='h900-normal--48px text-[#F3F243] '>Tournaments and Events</h1>
          </div>
          <div className="header__text">
            <p className='h500-normal-16px text-[#fff]'>Descubre las marcas y tiendas que la gente quiere cerca</p>
          </div>
        </div>
        
      </div>
      <div className="topic__body  md:pl-[10%] md:pr-[10%] lg:pr-[15%] lg:pl-[15%]">
        <div className="event__header flex pt-5 pb-5">
          <div className="event__header-container w-[100%] flex flex-col-reverse md:justify-between lg:flex-row justify-center items-center">
            <div className="event__header-links flex flex-wrap md:flex-nowrap justify-center items-center md:w-[100%] gap-2 w-[100%]">
              <Link className='h500-normal-13px whitespace-pre text-[#A7A6A7] border border-[#A7A6A7] p-3 rounded-[23px] min-w-[128] w-fit h-[45px] flex justify-center items-center' href="/Brands">Brands and Stores</Link>
              <Link className='h500-normal-13px whitespace-pre text-[#A7A6A7] border border-[#A7A6A7] p-3 rounded-[23px] min-w-[147] w-fit h-[45px] flex justify-center items-center' href="/Artists">Artists and Concerts</Link>
              <Link className='h500-normal-13px whitespace-pre text-[#A7A6A7] border border-[#A7A6A7] p-3 rounded-[23px] min-w-[80] w-fit h-[45px] flex justify-center items-center' href="/Tournaments">Tournaments </Link>
            </div>
            <div className="flex justify-center items-center p-[20px] w-[100%]">
              <div className="w-[500px] flex justify-center rounded-[10px] md:max-w-[317px]">
                <InputSearch />
              </div>
            </div>
          </div>
        </div>
        <div className="recents p-4 md:p-0 flex flex-col gap-3">
          <div className="recents__tittle h500-normal-24px text-[#1A1E2E]">
            <h3 className=''>Populares en Querétaro</h3>
          </div>
          <div className="recents__info h400-medium-15px text-[#6E6A6C]">
            <p>Lo que las personas piden más</p>
          </div>
          <div className="flex justify-center items-center w-100%">
            <Slider />
          </div>
        </div>
        <div className="recents p-4 md:p-0 flex flex-col gap-3">
          <div className="recents__tittle h500-normal-24px text-[#1A1E2E]">
            <h3 className=''>Sugerencias para ti</h3>
          </div>
          <div className="recents__info h400-medium-15px text-[#6E6A6C]">
            <p>Publicaciones que podrías colaborar</p>
          </div>
          <div className="flex justify-center items-center w-100%">
            <Slider />
          </div>
        </div>
        <div className="interests p-5 md:p-10 mt-10 md:mt-[75px] mb-5 md:mb-[75px]  bg-[#F8F7FA] w-100vh h-[228px] flex flex-col gap-3">
          <div className="interests__tittle h500-normal-24px text-[#6E6A6C]">
            <h3>¡Hagámoslo más personal!</h3>
          </div>
          <div className="interests__info h400-normal-16px text-[#6E6A6C]">
            <p>Selecciona tus interes para brindarte sugerencia de acuerdo a tus gustos</p>
          </div>
          <div className="interests__show flex gap-2">
            <div className="interest__item h500-normal-13px whitespace-pre text-[#A7A6A7] border border-[#A7A6A7] p-5 rounded-[23px] w-fit h-[45px] flex justify-center items-center">
              <p className='text-center '>Artistas mexicanos</p>
            </div>
            <div className="interest__item h500-normal-13px whitespace-pre text-[#A7A6A7] border border-[#A7A6A7] p-5 rounded-[23px] w-fit h-[45px] flex justify-center items-center">
              <p className='text-center'>Tiendas de ropa</p>
            </div>
            <div className="interest__item h500-normal-13px whitespace-pre text-[#A7A6A7] border border-[#A7A6A7] p-5 rounded-[23px] w-fit h-[45px] flex justify-center items-center">
              <p className='text-center'>Tiendas de ropa</p>
            </div>
            <div className="interest__item h500-normal-13px whitespace-pre text-[#A7A6A7] border border-[#A7A6A7] p-5 rounded-[23px] w-fit h-[45px] flex justify-center items-center">
              <p className='text-center'>Rock</p>
            </div>
          </div>
          <div className="show__more pt-4 h400-normal-16px text-[#1B4DB1]">
            <p>Ver todos los intereses</p>
          </div>
        </div>
        <div className="recents p-4 md:p-0 flex flex-col gap-3">
          <div className="recents__tittle h500-normal-24px text-[#1A1E2E]">
            <h3 className=''>Recientes</h3>
          </div>
          <div className="recents__info h400-medium-15px text-[#6E6A6C]">
            <p>Las personas últimanete están hablando de esto</p>
          </div>
          <div className="flex justify-center items-center w-100%">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  )
};

tournamentsPage.getLayout = function (page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}