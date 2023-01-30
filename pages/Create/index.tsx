import { kMaxLength } from 'buffer';
import { useFormik } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { MdOutlineAdd } from 'react-icons/md';
import * as yup from 'yup';
import BlueButton from '../../components/Buttons/BlueButton';

const CreateEvent = () => {
  const [clickNext, setClickNext] = useState(false);

  const nextPage = () => {
    setClickNext(!clickNext);
  };

  const [data, setData] = useState(['']);

  useEffect(() => {
    Functionality();
  }, []);

  const Functionality = () => {
    setData(['Siguiente', 'Publicar']);
  };

  const router = useRouter();

  const linkRoute = () => {
    router.push('/');
  };

  const linkRouteToProfile = () => {
    router.push('/Profile');
  };

  const formik = useFormik({
    initialValues: {
      tittle: '',
      type: '',
      category: '',
      recomend: '',
      link: '',
    },
    onSubmit: () => {
      console.log('Enviado');
      linkRoute();
    },
    validationSchema: yup.object({
      tittle: yup.string().trim().required('Tittle is required'),
      recomend: yup.string().trim().required('This field is required'),
      link: yup.string().trim().required('This field is required'),
    }),
  });

  const buttonBack = () => {
    window.history.back();
  };

  return (
    <div className="h-[100%] md:h-screen w-screen overflow-hidden flex md:flex-row flex-col">
      <div className="flex bg-primary-blue w-[100%] md:min-w-[255px] md:max-w-[255px] max-h-[415px] md:max-h-[100%] justify-center items-center flex-col gap-8">
        <div className="flex justify-center items-center flex-col md:gap-[22px] gap-[16px] pt-[50px] md:pb-[50px] pb-[30px] h-[100%]">
          <div
            className="max-h-[123px] max-w-[137px] flex flex-col cursor-pointer"
            onClick={linkRoute}
          >
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

      <div className="bg-white w-[100%] h-[100%] flex justify-start items-center flex-col gap-8 mb-[45px]">
        <div className="text-primary-blue self-start w-fit lg:pl-[55px] pl-[20px] mt-[66px] text-left">
          <span
            className={
              clickNext
                ? 'hidden'
                : 'cursor-pointer l600-normal-20px text-primary-blue'
            }
          >
            <p onClick={buttonBack}>Back</p>
          </span>
          <span
            className={
              clickNext
                ? 'cursor-pointer l600-normal-20px text-primary-blue'
                : 'hidden'
            }
          >
            <p onClick={nextPage}>Back</p>
          </span>
        </div>
        <div className=""></div>
        {/*Inicio Apartado Barra*/}
        <div
          className={
            clickNext
              ? 'hidden'
              : 'process max-w-[660px] w-[100%] h-[20px] justify-center items-center flex rounded-full pl-[20px] pr-[20px]'
          }
        >
          <div className="process max-w-[620px] w-[100%] h-[8px] bg-slate-300 rounded-full">
            <div className="firstProcess w-[60%] h-[8px] bg-primary-blue rounded-full"></div>
            <div className="totalProcess"></div>
          </div>
        </div>
        <div
          className={
            clickNext
              ? 'process max-w-[660px] w-[100%] h-[20px] justify-center items-center flex rounded-full pl-[20px] pr-[20px]'
              : 'hidden'
          }
        >
          <div className="process max-w-[620px] w-[100%] h-[8px] bg-slate-300 rounded-full">
            <div className="firstProcess w-[100%] h-[8px] bg-primary-blue rounded-full"></div>
            <div className="totalProcess"></div>
          </div>
        </div>
        {/*Fin Apartado Barra*/}
        <form
          className="flex flex-col gap-[25px] w-[100%] max-w-[660px] pt-[20px] pb-[20px] l400-normal-16px-24 text-[#7D7D7D]"
          onSubmit={formik.handleSubmit}
        >
          <div
            className={
              clickNext
                ? 'hidden'
                : 'flex flex-col justify-start items-start w-[100%] ml-[20px] mt-[-20px] md:mt-[0px]'
            }
          >
            <span className="h500-normal-24px text-black">Publicación</span>
            <span className="h400-normal-16px">Información básica</span>
          </div>
          <div
            className={
              clickNext
                ? 'flex flex-col justify-start items-start w-[100%] ml-[20px] mt-[-20px] md:mt-[0px]'
                : 'hidden'
            }
          >
            <span className="h500-normal-24px text-black">Fotos</span>
            <span className="h400-normal-16px">
              Selecciona máximo tres fotos para crear una galería
            </span>
          </div>
          <div
            className={
              clickNext
                ? 'hidden'
                : 'flex flex-col gap-[25px] w-[100%] max-w-[660px] pt-[20px] pb-[20px] l400-normal-16px-24 text-[#7D7D7D]'
            }
          >
            <div className="form__title flex flex-col w-[100%] pl-[20px] pr-[20px]">
              <label
                className="ml-[15px] pl-[8px] pr-[8px] mb-[-12px] bg-white w-max z-10"
                htmlFor="tittle"
              >
                Título de publicación
              </label>
              <input
                className="bg-transparent h-[50px] p-3.5 border-[1px] rounded-[11px] border-[#7D7D7D]"
                name="tittle"
                type="text"
                placeholder=""
                value={formik.values.tittle}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.tittle && (
                <div className="text-danger">{formik.errors.tittle}</div>
              )}
            </div>
            <div className="flex md:flex-row flex-col gap-[20px] w-[100%] pl-[20px] pr-[20px]">
              <div className="flex md:w-[50%] w-[100%]">
                <label className="" htmlFor="type"></label>
                <select
                  className="dropdown-menu bg-transparent h-[50px] w-[100%] border-[1px] rounded-[11px] border-[#7D7D7D] text-"
                  required
                  name="type"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
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
                <label className="" htmlFor="category"></label>
                <select
                  required
                  className="dropdown-menu bg-transparent h-[50px] w-[100%] border-[1px] rounded-[11px] border-[#7D7D7D]"
                  name="category"
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
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
                htmlFor="recomend"
              >
                ¿Por qué lo recomiendas?
              </label>
              <textarea
                className="bg-transparent h-[116px] p-3.5 border-[1px] rounded-[11px] border-[#7D7D7D]"
                placeholder=""
                name="recomend"
                value={formik.values.recomend}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.recomend && (
                <div className="text-danger">{formik.errors.recomend}</div>
              )}
            </div>
            <div className="form__reference flex flex-col w-[100%] pl-[20px] pr-[20px]">
              <label
                className="ml-[15px] pl-[8px] pr-[8px] mb-[-12px] bg-white w-max z-10"
                htmlFor="link"
              >
                Link de referencia
              </label>
              <input
                className="bg-transparent h-[50px] p-3.5 border-[1px] rounded-[11px] border-[#7D7D7D]"
                type="text"
                placeholder=""
                name="link"
                value={formik.values.link}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.link && (
                <div className="text-danger">{formik.errors.link}</div>
              )}
            </div>
          </div>

          {/*Apartado Contenido */}

          <div
            className={
              clickNext
                ? 'flex flex-col gap-[25px] w-[100%] max-w-[660px] p-[20px] l400-normal-16px-24 text-[#7D7D7D]'
                : 'hidden'
            }
          >
            <div className="pl-[15px] pr-[15px] h-[257px] max-w-[620px] border-[1px] border-[#7D7D7D] rounded-[11px] flex gap-[22px] justify-center items-center">
              <div className="h-max max-w-[177px] relative justify-center items-center flex">
                <div className="h-[206px] w-[100%] bg-primary-grayLight flex hover:scale-[1.05] ease-in-out duration-300">
                  <input
                    type="file"
                    id="imgInp"
                    name="imageUpload"
                    multiple
                    accept="image/*"
                    className="h-[206px] w-[100%] opacity-0 z-50 cursor-pointer"
                  />
                </div>
                <MdOutlineAdd className="text-[#1B4DB1] text-[26px] flex absolute z-30" />
              </div>
              <div className="bg-black h-max max-w-[177px] relative justify-center items-center flex">
                <div className="h-[206px] w-[100%] bg-primary-grayLight flex hover:scale-[1.05] ease-in-out duration-300">
                  <input
                    type="file"
                    name="imageUpload"
                    multiple
                    accept="image/*"
                    className="h-[206px] w-[100%] opacity-0 z-50 cursor-pointer"
                  />
                </div>
                <MdOutlineAdd className="text-[#1B4DB1] text-[26px] flex absolute z-30" />
              </div>
              <div className="h-max max-w-[177px] relative justify-center items-center flex">
                <div className="h-[206px] w-[100%] bg-primary-grayLight flex hover:scale-[1.05] ease-in-out duration-300">
                  <input
                    type="file"
                    name="imageUpload"
                    multiple
                    accept="image/*"
                    className="h-[206px] w-[100%] opacity-0 z-50 cursor-pointer"
                  />
                </div>
                <MdOutlineAdd className="text-[#1B4DB1] text-[26px] flex absolute z-30" />
              </div>
            </div>
          </div>
          {/* Fin Apartado Contenido */}
          <div
            onClick={nextPage}
            className={
              clickNext
                ? 'hidden'
                : 'mb-[50px] md:mb-[0px] flex justify-center items-center'
            }
          >
            <BlueButton Functionality={data[0]} />
          </div>
          <div
            onClick={linkRouteToProfile}
            className={
              clickNext
                ? 'mb-[50px] md:mb-[0px] flex justify-center items-center'
                : 'hidden'
            }
          >
            <BlueButton Functionality={data[1]} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
