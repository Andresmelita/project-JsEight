import Link from 'next/link'
import React, { ReactElement } from 'react'
import InputSearch from '../../components/InputSearch'
import Layout from '../../components/Layout'
import NestedLayout from '../../components/NestedLayout'
import PersonIcon from '../../components/PersonIcon'
import Slider from '../../components/Slider'

export default function eventId(){
  return (
    <div className="event__page">
      <div className="event__header shadow-header pt-5 pb-4 md:pl-[10%] md:pr-[10%] lg:pl-[15%] lg:pr-[15%]">
        <div className="event__header-container flex justify-center items-center">
          <div className="event__header-links flex justify-center items-center md:w-[100%] gap-4 invisible md:visible w-[50px]">
            <Link className='h500-normal-13px whitespace-pre text-[#A7A6A7] border border-[#A7A6A7] p-5 rounded-[23px] w-fit h-[45px] flex justify-center items-center' href="/Brands">Brands and Stores</Link>
            <Link className='h500-normal-13px whitespace-pre text-[#A7A6A7] border border-[#A7A6A7] p-5 rounded-[23px] w-fit h-[45px] flex justify-center items-center' href="/Artists">Artists and Concerts</Link>
            <Link className='h500-normal-13px whitespace-pre text-[#A7A6A7] border border-[#A7A6A7] p-5 rounded-[23px] w-fit h-[45px] flex justify-center items-center' href="/Tournaments">Tournaments </Link>
          </div>
          <div className="flex justify-center items-center p-[20px] w-[100%]">
            <div className="w-[500px] flex justify-center rounded-[10px] max-w-[317px]">
              <InputSearch />
            </div>
          </div>
        </div>
      </div>
      <div className="event__details  md:p-[10%] lg:p-[15%] md:pt-3% md:pb-3% lg:pt-3% lg:pb-3%">
        <div className="details pl-[5%] pr-[5%] md:p-0 md:grid md:col-span-5 gap-4 h500-normal-16px">
          <div className="details-info md:col-start-1 md:col-end-2  md:row-start-1 md:row-end-3 md:gap-4">
            <p className='p-4 pl-0'>Artista / Pop / Rock</p>
            <h2 className='h900-normal--36px'>Concierto de Lady Gaga</h2>
            <div className="content__description pt-4 pb-8 h400-medium-15px text-[#6E6A6C]">
              <p>
                El concierto con la temática de Lady gaga en Las Vegas. El
                concierto con la temática de Lady gaga en Las Vegas.El concierto
                con la temática.
              </p>
            </div>
            <div className="content__page md:pt-6 h500-medium-14px text-[#1B4DB1]">
              <a href="">ladygaga.com</a>
            </div>
            <div className="content__votes pt-4 pb-8 flex justify-left items-center gap-1 h-4">
              <div className="votes__icon">
                <PersonIcon></PersonIcon>
              </div>
              <div className="votes__quantity text-[#1A1E2E] h500-medium-14px">
                <p>90’800’756 votos</p>
              </div>
            </div>
          </div>
          <div className="header__image__container md:row-start-1 md:row-end-4 max-h-[500px]">
            <div className="HeaderImg min-h-[40vh] sm:h-[60vh] max-w[500px] md:min-h-[100%] md:w-[60vh] lg:w-[65vh] xl:w-[75vh] md:col-start-2 md:col-end-5 bg-[url('https://los40es00.epimg.net/los40/imagenes/2017/02/06/musica/1486367147_194336_1486369812_noticia_normal.jpg')] bg-cover bg-center w-[100%]"></div>
          </div>
          <div className="vote__button">
            <button className='w-full p-4  mt-5 bg-[#1B4DB1] rounded-[23px] text-[#fff] l600-normal-16px'>Vote</button>
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
}

eventId.getLayout = function (page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}