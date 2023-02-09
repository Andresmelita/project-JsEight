import Link from 'next/link';
import { ReactElement, useEffect, useState } from 'react';
import Category from '../../components/Buttons/Category';
import InputSearch from '../../components/InputSearch';
import Layout from '../../components/layout/Layout';
import NestedLayout from '../../components/NestedLayout';
import SliderNew from '../../components/SliderNew';
import Suggestions from '../../components/Suggestions';

export default function BrandsPage() {
  const [data, setData] = useState(['']);

  useEffect(() => {
    Categories();
  }, []);

  const Categories = () => {
    setData(['Marcas y Tiendas', 'Artistas y conciertos', 'Torneos']);
  };
  return (
    <div className="topic__page">
      <div className="topic__header flex flex-col gap-4 justify-center bg-[url('/images/brandsHeader.png')] bg-cover bg-bottom w-[100%] max-h-[204px] h-[204px] md:pr-[0px] lg:pl-[0px] lg:pr-[0px] md:pt-1% md:pb-1% items-center">
        <div className="w-[100vw] max-w-[1060px] pl-[20px] pr-[20px] flex justify-start flex-col">
          <div className="header__links ">
            <span className="h500-normal-16px text-[#fff]">
              <Link href="/">Home </Link> / Brands
            </span>
          </div>
          <div className="header__info flex flex-col gap-2">
            <div className="header__tittle">
              <h1 className="h900-normal--48px text-[#F3F243] ">
                Marcas y Tiendas
              </h1>
            </div>
            <div className="header__text">
              <p className="h500-normal-16px text-[#fff]">
                Descubre las marcas y tiendas que la gente quiere cerca
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="topic__body md:pl-[10%] md:pr-[10%] lg:pr-[15%] lg:pl-[15%] flex flex-col justify-center items-center">
        <div className="event__header justify-center items-center flex pt-[40px] pb-[40px] w-[100vw] md:pl-[10%] md:pr-[10%] lg:pr-[15%] lg:pl-[15%] flex-col ">
          <div className="event__header-container w-[100vw] justify-center items-center content-between gap-0 flex flex-col-reverse md:flex-row max-w-[1040px]">
            <div className="flex gap-[10px] w-[100vw] h-max flex-wrap md:flex-nowrap pl-[20px] pr-[20px] md:pr-[0px] md:justify-start justify-center items-center md:pt-[0px] pt-[20px]">
              <div className="flex h-[46px] w-max">
                <Link href="/brands" className="">
                  <Category Categories={data[0]} />
                </Link>
              </div>
              <div className="flex h-[46px] w-max">
                <Link href="/artists">
                  <Category Categories={data[1]} />
                </Link>
              </div>
              <div className="flex h-[46px] w-max">
                <Link href="/tournaments">
                  <Category Categories={data[2]} />
                </Link>
              </div>
            </div>
            <div className="flex w-[100%] md:justify-end justify-center items-center">
              <div className="flex xl:max-w-[410px] md:max-w-[380px] max-w-[410px] h-max">
                <div className="flex w-[100vw] pl-[20px] pr-[20px]">
                  <InputSearch />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="recents flex flex-col justify-center items-center w-[100vw] pl-[21px]">
          <div className="recents__title flex flex-col pt-[30px] pb-[35px] lg:ml-[00px] max-w-[1010px] w-[100%]">
            <h1 className="h500-normal-24px text-primary-blackLight">
              Populares en Querétaro
            </h1>
            <h3 className="recents__info h400-medium-15px text-primary-grayDark">
              Lo que las personas piden más
            </h3>
          </div>
          <div className="flex lg:justify-center justify-start w-[100vw] items-start">
            <SliderNew />
          </div>
        </div>
        <div className="recents flex flex-col justify-center items-center w-[100vw] pl-[21px]">
          <div className="recents__title flex flex-col pt-[50px] pb-[35px] lg:ml-[00px] max-w-[1010px] w-[100%]">
            <h1 className="h500-normal-24px text-primary-blackLight">
              Sugerencias para ti
            </h1>
            <h3 className="recents__info h400-medium-15px text-primary-grayDark">
              Publicaciones en las que podrías colaborar
            </h3>
          </div>
          <div className="flex lg:justify-center w-[100vw] justify-start items-start">
            <SliderNew />
          </div>
        </div>
        <div className="flex p-[10px] mt-14 mb-14 flex-col justify-center bg-primary-grayLighter">
          <Suggestions />
        </div>
        <div className="recents flex flex-col justify-center items-center w-[100vw] pl-[21px]">
          <div className="recents__title flex flex-col pt-[50px] pb-[35px] lg:ml-[00px] max-w-[1010px] w-[100%]">
            <h1 className="h500-normal-24px text-primary-blackLight">
              Recientes
            </h1>
            <h3 className="recents__info h400-medium-15px text-primary-grayDark">
              Las personas últimamente están hablando de esto
            </h3>
          </div>
          <div className="flex lg:justify-center justify-start w-[100vw] items-start pb-[95px]">
            <SliderNew />
          </div>
        </div>
      </div>
    </div>
  );
}

BrandsPage.getLayout = function (page: ReactElement) {
  return (
    <Layout title="Brands | Para Cuando?" description="Brands and Stores">
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};
