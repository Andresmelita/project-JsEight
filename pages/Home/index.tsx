import { kMaxLength } from 'buffer';
import Image from 'next/image';
import CathegoryFive from '../../components/Buttons/CathegoryFive';
import CathegoryFour from '../../components/Buttons/CathegoryFour';
import CathegoryOne from '../../components/Buttons/CathegoryOne';
import CathegorySix from '../../components/Buttons/CathegorySix';
import CathegoryThree from '../../components/Buttons/CathegoryThree';
import CathegoryTwo from '../../components/Buttons/CathegoryTwo';
import InputSearch from '../../components/InputSearch';
import Slider from '../../components/Slider';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center pb-[100px]">
      <div className="top-0 left-0 flex flex-col relative min-h-max">
        <div className="min-h-[488px]">
          <Image
            className="min-h-[482px] max-h-[488px] min-w-[1280px]"
            src="/images/topImageHome.png"
            alt="home-image"
            width={kMaxLength}
            height={488}
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
          <div className="flex w-[100vw] justify-center items-center">
            <InputSearch />
          </div>
          <div className="flex gap-[10px] justify-center items-center">
            <div className="flex w-[100%] justify-center items-center">
              <CathegoryOne />
            </div>
            <div className="flex w-[100%] justify-center items-center">
              <CathegoryTwo />
            </div>
            <div className="flex w-[100%] justify-center items-center">
              <CathegoryThree />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-[100vw]">
        <div className="flex flex-col pt-[77px] pb-[35px] ml-[20px] lg:ml-[00px] max-w-[1010px] w-[100%]">
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
      <div className="flex flex-col justify-center items-center w-[100vw]">
        <div className="flex flex-col pt-[77px] pb-[35px] ml-[20px] lg:ml-[00px] max-w-[1010px] w-[100%]">
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
      <div className="flex w-[100%] flex-col justify-center bg-primary-grayLighter max-w-[1010px] max-h-[250px]">
        <div className="flex flex-col pt-[27px] pb-[35px] sm:pl-[60px] pl-[20px] gap-2">
          <h1 className="h500-normal-24px text-primary-grayDark">
            ¡Hagámoslo más personal!
          </h1>
          <h3 className="h400-normal-16px text-primary-grayDark">
            Selecciona tus intereses para brindarte sugerencias de acuerdo a tus
            gustos
          </h3>
          <div className="flex gap-[13px] w-max h-[45px] mt-[20px] mb-[20px]">
            <div className="flex w-[100%]">
              <CathegoryFive />
            </div>
            <div className="flex w-[100%]">
              <CathegorySix />
            </div>
            <div className="flex w-[100%]">
              <CathegoryFour />
            </div>
            <div className="flex w-[100%]">
              <CathegoryOne />
            </div>
          </div>
          <h3 className="h400-normal-16px text-primary-blue cursor-pointer">
            Ver todos los intereses
          </h3>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-[100vw]">
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
