import { kMaxLength } from 'buffer';
import Image from 'next/image';
import Link from 'next/link';
import NextTwo from '../../components/Buttons/NextTwo';

const CreateEvent = () => {
  return (
    <div className="h-screen w-screen flex md:flex-row flex-col">
      <div className="flex bg-primary-blue w-[100%] md:min-w-[255px] md:max-w-[255px] max-h-[415px] md:max-h-[100%] justify-center items-center flex-col gap-8">
        <div className="flex justify-center items-center flex-col md:gap-[22px] gap-[16px] pt-[50px] md:pb-[50px] pb-[30px] h-[100%]">
          <div className="max-h-[123px] max-w-[137px] flex flex-col">
            <Image
              src="/images/whiteLogo.svg"
              alt=""
              width={kMaxLength}
              height={kMaxLength}
              className="flex items-center md:mt-[-150px] mt-[-20px]"
            />
            <Image
              src="/images/whiteSlogan.svg"
              alt=""
              width={kMaxLength}
              height={kMaxLength}
              className="flex items-center mt-[-14px] md:pb-[80px]"
            />
          </div>
          <div className="text-primary-yellow md:pl-[30px] pl-[15px] pr-[26px] pt-[20px] l500-normal-20px-23 justify-start items-start w-[100%]">
            <span className="">¡Bienvenido, creador!</span>
          </div>
          <div className="text-white md:pl-[30px] pl-[15px]  pr-[30px] l400-normal-16px justify-start items-start w-[100%]">
            <span>
              A continuación puedes completar la info de la marca, artista o
              torneo que quieres cerca.
            </span>
          </div>
          <div className="text-white mb-[-230px] ml-[70px] md:flex hidden mt-[240px] h-[30px] w-[100%] l400-normal-16px">
            <span className="items-end justify-end flex cursor-pointer">
              Ayuda
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white w-[100%] flex justify-center items-center flex-col gap-8 mb-[45px]">
        <div className="text-primary-blue w-[100%] lg:pl-[55px] pl-[20px] md:mt-[0px] mt-[20px]">
          <span className="cursor-pointer l600-normal-20px text-primary-blue">
            <Link href="/">Back</Link>
          </span>
        </div>
        <div className=""></div>

        <div className="process max-w-[660px] w-[100%] h-[20px] justify-center items-center flex rounded-full pl-[20px] pr-[20px]">
          <div className="process max-w-[620px] w-[100%] h-[8px] bg-slate-300 rounded-full">
            <div className="firstProcess w-[60%] h-[8px] bg-primary-blue rounded-full"></div>
            <div className="totalProcess"></div>
          </div>
        </div>
        <form className="flex flex-col gap-[25px] w-[100%] max-w-[660px] pt-[20px] pb-[20px] l400-normal-16px-24 text-[#7D7D7D]">
          <div className="flex flex-col justify-start items-start w-[100%] ml-[20px] mt-[-20px] md:mt-[0px]">
            <span className="h500-normal-24px text-black">Publicación</span>
            <span className="h400-normal-16px">Información básica</span>
          </div>
          <div className="form__title flex flex-col w-[100%] pl-[20px] pr-[20px]">
            <label
              className="ml-[15px] pl-[8px] pr-[8px] mb-[-12px] bg-white w-max z-10"
              htmlFor=""
            >
              Título de publicación
            </label>
            <input
              className="bg-transparent h-[50px] border-[1px] rounded-[11px] border-[#7D7D7D]"
              type="text"
              placeholder=""
            />
          </div>
          <div className="flex md:flex-row flex-col gap-[20px] w-[100%] pl-[20px] pr-[20px]">
            <div className="flex md:w-[50%] w-[100%]">
              <label className="" htmlFor=""></label>
              <select
                required
                className="dropdown-menu bg-transparent h-[50px] w-[100%] border-[1px] rounded-[11px] border-[#7D7D7D] text-"
              >
                <option value="" hidden>
                  Tipo
                </option>
                <option value="1">Marcas y tiendas</option>
                <option value="2">Artistas y conciertos</option>
                <option value="3">Torneos</option>
              </select>
            </div>
            <div className="flex md:w-[50%] w-[100%]">
              <label className="" htmlFor=""></label>
              <select
                required
                className="dropdown-menu bg-transparent h-[50px] w-[100%] border-[1px] rounded-[11px] border-[#7D7D7D]"
              >
                <option value="">Categoría</option>
                <option value="1">Ropa y accesorios</option>
                <option value="2">Deportes</option>
                <option value="3">Conciertos</option>
                <option value="4">Meets & Greet</option>
                <option value="5">E-sport</option>
                <option value="6">Pop / Rock</option>
                <option value="7">Tecnología</option>
                <option value="8">Hogar / Decoración</option>
                <option value="9">Abastecimiento</option>
              </select>
            </div>
          </div>
          <div className="form__recommendation flex flex-col w-[100%] pl-[20px] pr-[20px]">
            <label
              className="ml-[15px] pl-[8px] pr-[8px] mb-[-12px] bg-white w-max z-10"
              htmlFor=""
            >
              ¿Por qué lo recomiendas?
            </label>
            <textarea
              className="bg-transparent h-[116px] border-[1px] rounded-[11px] border-[#7D7D7D]"
              placeholder=""
            />
          </div>
          <div className="form__reference flex flex-col w-[100%] pl-[20px] pr-[20px]">
            <label
              className="ml-[15px] pl-[8px] pr-[8px] mb-[-12px] bg-white w-max z-10"
              htmlFor=""
            >
              Link de referencia
            </label>
            <input
              className="bg-transparent h-[50px] border-[1px] rounded-[11px] border-[#7D7D7D]"
              type="text"
              placeholder=""
            />
          </div>
        </form>

        <div className="mb-[50px] md:mb-[0px]">
          <NextTwo />
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
