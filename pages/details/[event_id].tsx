import Link from 'next/link';
import { ReactElement, useEffect, useState } from 'react';
import Category from '../../components/Buttons/Category';
import InputSearch from '../../components/InputSearch';
import Layout from '../../components/layout/Layout';
import NestedLayout from '../../components/NestedLayout';
import PersonIcon from '../../components/PersonIcon';
import SliderNew from '../../components/SliderNew';
import Suggestions from '../../components/Suggestions';

export default function EventId() {
  const [data, setData] = useState(['']);

  useEffect(() => {
    Categories();
  }, []);

  const Categories = () => {
    setData(['Marcas y Tiendas', 'Artistas y conciertos', 'Torneos']);
  };
  return (
    <div className="event__page">
      <div className="flex justify-center event__header shadow-header w-[100vw]">
        <div className="event__header justify-center items-center flex pt-[30px] pb-[30px] w-[100vw] md:pl-[10%] md:pr-[10%] flex-col content-center">
          <div className="event__header-container w-[100vw] justify-center items-center content-between gap-0 flex flex-col-reverse md:flex-row max-w-[1000px]">
            <div className="flex gap-[10px] w-[100vw] h-max flex-wrap md:flex-nowrap pl-[20px] pr-[20px] md:pr-[0px] md:justify-start justify-center items-center pt-[0px]">
              <div className="md:flex h-[46px] w-max hidden">
                <Link href="/brands" className="">
                  <Category Categories={data[0]} />
                </Link>
              </div>
              <div className="md:flex h-[46px] w-max hidden">
                <Link href="/artists">
                  <Category Categories={data[1]} />
                </Link>
              </div>
              <div className="md:flex h-[46px] w-max hidden">
                <Link href="/tournaments">
                  <Category Categories={data[2]} />
                </Link>
              </div>
            </div>
            <div className="flex w-[100%] md:justify-end justify-center items-center">
              <div className="flex xl:max-w-[410px] md:max-w-[400px] max-w-[410px] h-max">
                <div className="flex w-[100vw] pl-[20px] pr-[10px]">
                  <InputSearch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="event__details flex-col justify-center items-center flex md:pb-[100px] pb-[94px]">
        <div className="mt-[58px] md:mt-[100px] md:max-h-[381px] max-w-[960px] lg:max-w-[1000px] w-[100vw] details  pl-[20px] pr-[20px] lg:pr-[0px] sm:grid sm:col-span-5 gap-[22px] h500-normal-16px">
          <div className=" flex flex-col w-[100vw] pr-[40px] sm:pr-[0px] min-w-[100px] md:max-w-[390px] sm:max-w-[380px] min-h-[240px] sm:min-h-[288px] details-info sm:col-start-1 sm:col-end-2 max-h sm:row-start-1 sm:row-end-3">
            <p className="pb-[6px] pl-0">Artista / Pop / Rock</p>
            <h2 className="h900-normal--48px pb-[10px] text-black">
              Concierto de Lady Gaga
            </h2>
            <div className="content__description pt-4 h400-medium-15px text-[#6E6A6C] mb-[30px] lg:mb-[0px] lg:pr-[10px]">
              <p>
                El concierto con la temática de Lady gaga en Las Vegas. El
                concierto con la temática de Lady gaga en Las Vegas.El concierto
                con la temática.
              </p>
            </div>
            <div className="flex flex-col mt-[0px] lg:mt-[50px]">
              <div className="content__page h500-medium-14px text-[#1B4DB1] pb-[16px]">
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
          <div className="header__image__container pt-[25px] sm:pt-[0px] flex justify-center sm:row-start-1 sm:row-end-4 lg:pr-[12px]">
            <div className="HeaderImg h-[100%] w-[100%] sm:w-[100vw] flex min-h-[252px] bg-cover max-h-[300px] min-w-[300px] sm:max-w-[539px] sm:max-h-[381px] lg:max-h-[381px] sm:col-start-2 sm:col-end-5 bg-[url('https://images2.imgbox.com/9e/e4/oBETMc3A_o.png')]"></div>
          </div>
          <div className="vote__button flex justify-end pt-[30px] md:pt-[0px] sm:pt-[20px] w-[100vw] sm:max-w-[390px] pr-[40px] sm:pr-[0px]">
            <button className="bg-[#1B4DB1] h-[46px] w-[100%] rounded-full text-[#fff] l600-normal-16px">
              Vote
            </button>
          </div>
        </div>
        <div className="mt-[80px] sm:mt-[70px] flex p-[10px] w-[100vw] flex-col justify-center bg-primary-grayLighter max-w-[970px] h-max">
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
          <div className="flex justify-start w-[100vw] items-center lg:justify-center pb-[40px] pr-[10px] pl-[10px]">
            <SliderNew />
          </div>
        </div>
      </div>
    </div>
  );
}

EventId.getLayout = function (page: ReactElement) {
  return (
    <Layout
      title="Details | Para Cuando?"
      description="Details of publications"
    >
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};
