import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { default as Cathegory } from '../../components/buttons/Cathegory';
import InputSearch from '../../components/InputSearch';
import Layout from '../../components/layout/Layout';
import SliderNew from '../../components/SliderNew';
import Suggestions from '../../components/Suggestions';
import { usePublications } from '../../lib/services/publication.services';

const Home = () => {
  const { data, error, isLoading } = usePublications();
  console.log(data);

  const [dataType, setDataType] = useState(['']);

  useEffect(() => {
    Cathegories();
  }, []);

  const Cathegories = () => {
    setDataType(['Marcas y Tiendas', 'Artistas y conciertos', 'Torneos']);
  };

  return (
    <Layout title="Home | Para Cuando?" description="Home">
      <div className="flex flex-col justify-center items-center pb-[100px]">
        <div className="top-0 left-0 flex flex-col relative min-h-max">
          <div className="min-h-[488px] max-h-[488px] w-[100vw] bg-[url('/images/topImageHome.png')] bg-center bg-cover"></div>
          <div className="flex w-[100%] flex-col gap-[16px] justify-center items-center absolute z-40 top-[59px]">
            <div className="flex justify-center items-center mb-[16px]">
              <Image
                src="/images/logo.svg"
                alt="home-image"
                width={214}
                height={190}
              />
            </div>
            <div className="flex w-[100vw] pl-[10px] pr-[10px] justify-center items-center">
              <InputSearch />
            </div>
            <div className="flex gap-[7px] justify-center w-[100vw] max-w-[465px] h-max pl-[20px] pr-[20px] md:pl-[0px] md:pr-[0px]">
              <div className="flex h-[30px] w-max">
                <Link href="/brands">
                  <Cathegory Cathegories={dataType[0]} />
                </Link>
              </div>
              <div className="flex h-[30px] w-max">
                <Link href="/artists">
                  <Cathegory Cathegories={dataType[1]} />
                </Link>
              </div>
              <div className="flex h-[30px] w-max">
                <Link href="/tournaments">
                  <Cathegory Cathegories={dataType[2]} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[100vw] pl-[21px]">
          <div className="flex flex-col pt-[77px] pb-[10px] lg:ml-[00px] max-w-[1010px] w-[100%]">
            <h1 className="h500-normal-24px text-primary-blackLight pb-[10px]">
              Populares en Querétaro
            </h1>
            <h3 className="h400-normal-16px text-primary-grayDark">
              Lo que las personas piden más
            </h3>
          </div>
          <div className="flex justify-start w-[100vw] items-center lg:justify-center pb-[40px]">
            <SliderNew />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[100vw] pl-[21px]">
          <div className="flex flex-col pt-[77px] pb-[10px] lg:ml-[00px] max-w-[1010px] w-[100%]">
            <h1 className="h500-normal-24px text-primary-blackLight pb-[10px]">
              Sugerencias para ti
            </h1>
            <h3 className="h400-normal-16px text-primary-grayDark">
              Publicaciones en las que podrías colaborar
            </h3>
          </div>
          <div className="flex justify-start w-[100vw] items-center lg:justify-center pb-[40px]">
            <SliderNew />
          </div>
        </div>
        <div className="flex p-[10px] w-[100vw] flex-col justify-center bg-primary-grayLighter max-w-[1010px] h-max">
          <Suggestions />
        </div>

        <div className="flex flex-col justify-center items-center w-[100vw] pl-[21px]">
          <div className="flex flex-col pt-[77px] pb-[10px] ml-[20px] lg:ml-[00px] max-w-[1010px] w-[100%]">
            <h1 className="h500-normal-24px text-primary-blackLight pb-[10px]">
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
    </Layout>
  );
};

export default Home;
