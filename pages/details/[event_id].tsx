import Link from 'next/link';
import { ReactElement, useEffect, useState } from 'react';
import Cathegory from '../../components/Buttons/Cathegory';
import InputSearch from '../../components/InputSearch';
import Layout from '../../components/Layout';
import NestedLayout from '../../components/NestedLayout';
import PersonIcon from '../../components/PersonIcon';
import SliderNew from '../../components/SliderNew';
import Suggestions from '../../components/Suggestions';

export default function EventId() {
  const [data, setData] = useState(['']);

  useEffect(() => {
    Cathegories();
  }, []);

  const Cathegories = () => {
    setData(['Marcas y Tiendas', 'Artistas y conciertos', 'Torneos']);
  };
  return (
    <div className="event__page">
      <div className="flex justify-center event__header shadow-header">
        <div className="event__header justify-center items-center flex pt-[30px] pb-[30px] w-[100vw] md:pl-[10%] md:pr-[10%] flex-col ">
          <div className="event__header-container w-[100vw] justify-center items-center content-between gap-0 flex flex-col-reverse md:flex-row max-w-[1040px]">
            <div className="flex gap-[10px] w-[100vw] h-max flex-wrap md:flex-nowrap pl-[20px] pr-[20px] md:pr-[0px] md:justify-start justify-center items-center pt-[0px]">
              <div className="md:flex h-[46px] w-max hidden">
                <Link href="/brands" className="">
                  <Cathegory Cathegories={data[0]} />
                </Link>
              </div>
              <div className="md:flex h-[46px] w-max hidden">
                <Link href="/artists">
                  <Cathegory Cathegories={data[1]} />
                </Link>
              </div>
              <div className="md:flex h-[46px] w-max hidden">
                <Link href="/tournaments">
                  <Cathegory Cathegories={data[2]} />
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
      </div>
      <div className="event__details flex-col justify-center items-center flex md:pt-[6%] md:pb-[6%]">
        <div className="pt-[58px] max-w-[1000px] w-[100vw] details  pl-[20px] pr-[20px] lg:pl-[0px] lg:pr-[0px] md:pt-0 md:grid md:col-span-5 gap-4 h500-normal-16px">
          <div className="details-info md:col-start-1 md:col-end-2  md:row-start-1 md:row-end-3 md:gap-4 pr-[10px]">
            <p className="pb-[6px] pl-0">Artista / Pop / Rock</p>
            <h2 className="h900-normal--48px pb-[10px]">
              Concierto de Lady Gaga
            </h2>
            <div className="content__description pt-4 h400-medium-15px text-[#6E6A6C]">
              <p>
                El concierto con la temática de Lady gaga en Las Vegas. El
                concierto con la temática de Lady gaga en Las Vegas.El concierto
                con la temática.
              </p>
            </div>
            <div className="gap-[16px] flex flex-col mt-[30px] mb-[25px] md:mt-[120px] md:mb-[0px]">
              <div className="content__page h500-medium-14px text-[#1B4DB1]">
                <a href="">ladygaga.com</a>
              </div>
              <div className="content__votes pt-4 flex justify-left items-end gap-1 h-4">
                <div className="votes__icon">
                  <PersonIcon></PersonIcon>
                </div>
                <div className="votes__quantity text-[#1A1E2E] h500-medium-14px">
                  <p>90’800’756 votos</p>
                </div>
              </div>
            </div>
          </div>
          <div className="header__image__container md:row-start-1 md:row-end-4 max-h-[500px]">
            <div className="HeaderImg min-h-[40vh] sm:h-[60vh] max-w[500px] md:min-h-[100%] md:w-[44vw] md:col-start-2 md:col-end-5 bg-[url('https://images2.imgbox.com/9e/e4/oBETMc3A_o.png')] bg-cover bg-center w-[100%]"></div>
          </div>
          <div className="vote__button flex justify-end items-end pt-[30px] md:pt-[0px]">
            <button className="w-full bg-[#1B4DB1] h-[46px] rounded-full text-[#fff] l600-normal-16px">
              Vote
            </button>
          </div>
        </div>
        <div className="mt-[70px] flex p-[10px] w-[100vw] flex-col justify-center bg-primary-grayLighter max-w-[1010px] h-max">
          <Suggestions />
        </div>

        <div className=" flex flex-col justify-center items-center w-[100vw] pl-[21px]">
          <div className="flex flex-col pt-[77px] pb-[10px] ml-[20px] max-w-[1010px] w-[100%]">
            <h1 className="h500-normal-24px text-primary-blackLight">
              Recientes
            </h1>
            <h3 className="h400-normal-16px text-primary-grayDark">
              Las personas últimamente están hablando de esto
            </h3>
          </div>
          <div className="flex justify-start w-[100vw] items-center lg:justify-center pb-[40px]">
            <SliderNew />
          </div>
        </div>
      </div>
    </div>
  );
}

EventId.getLayout = function (page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};
