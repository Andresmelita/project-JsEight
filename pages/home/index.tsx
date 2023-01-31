import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { default as Cathegory } from '../../components/Buttons/Cathegory';
import InputSearch from '../../components/InputSearch';
import Slider from '../../components/Slider';
import Suggestions from '../../components/Suggestions';

const Home = () => {
  const [data, setData] = useState(['']);

  useEffect(() => {
    Cathegories();
  }, []);

  const Cathegories = () => {
    setData(['Marcas y Tiendas', 'Artistas y conciertos', 'Torneos']);
  };

  return (
    <div className="flex flex-col justify-center items-center pb-[100px]">
      <div className="top-0 left-0 flex flex-col relative min-h-max">
        <div className="min-h-[488px]">
          <Image
            className="min-h-[482px] max-h-[488px] min-w-[1280px] relative"
            src="/images/topImageHome.png"
            alt="home-image"
            fill
          />
        </div>
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
                <Cathegory Cathegories={data[0]} />
              </Link>
            </div>
            <div className="flex h-[30px] w-max">
              <Link href="/artists">
                <Cathegory Cathegories={data[1]} />
              </Link>
            </div>
            <div className="flex h-[30px] w-max">
              <Link href="/tournaments">
                <Cathegory Cathegories={data[2]} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-[100vw] pl-[21px]">
        <div className="flex flex-col pt-[77px] pb-[35px] lg:ml-[00px] max-w-[1010px] w-[100%]">
          <h1 className="h500-normal-24px text-primary-blackLight">
            Populares en Querétaro
          </h1>
          <h3 className="h400-normal-16px text-primary-grayDark">
            Lo que las personas piden más
          </h3>
        </div>
        <div className="justify-center items-start">
          <Slider />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-[100vw] pl-[21px]">
        <div className="flex flex-col pt-[77px] pb-[35px] lg:ml-[00px] max-w-[1010px] w-[100%]">
          <h1 className="h500-normal-24px text-primary-blackLight">
            Sugerencias para ti
          </h1>
          <h3 className="h400-normal-16px text-primary-grayDark">
            Publicaciones en las que podrías colaborar
          </h3>
        </div>
        <div className="justify-center items-start">
          <Slider />
        </div>
      </div>

      <div className="flex p-[10px] w-[100vw] flex-col justify-center bg-primary-grayLighter max-w-[1010px] h-max">
        <Suggestions />
      </div>

      <div className="flex flex-col justify-center items-center w-[100vw] pl-[21px]">
        <div className="flex flex-col pt-[77px] pb-[35px] ml-[20px] lg:ml-[00px] max-w-[1010px] w-[100%]">
          <h1 className="h500-normal-24px text-primary-blackLight">
            Recientes
          </h1>
          <h3 className="h400-normal-16px text-primary-grayDark">
            Las personas últimamente están hablando de esto
          </h3>
        </div>
        <div className="justify-center items-start">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Home;
