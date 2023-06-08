import { useFormik } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { MdOutlineAdd } from 'react-icons/md';
import Swal from 'sweetalert2';
import * as yup from 'yup';
import BlueButton from '../../components/Buttons/BlueButton';
import { useCategories } from '../../lib/services/category.services';
import { createPublication } from '../../lib/services/publication.services';
import { useTags } from '../../lib/services/tag.services';

const CreateEvent = () => {
  const { data: tags } = useTags();
  const { data: categories } = useCategories();
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
    router.push('/profile');
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      tags: '',
      publication_type_id: '',
      description: '',
      reference_link: '',
      certified: false,
      agreeWithPolitics: false,
    },
    onSubmit: (values) => {
      console.log(values);
      createPublication(values)
        .then((response) => {
          Swal.fire({
            position: 'top',
            toast: true,
            icon: 'success',
            title: 'Nuevo Evento creado!',
            timerProgressBar: true,
            showConfirmButton: false,
            timer: 2200,
          });
          setTimeout(function () {
            window.location.href = '/profile';
          }, 2200);
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            position: 'top',
            toast: true,
            icon: 'error',
            title: 'Evento no creado',
            showConfirmButton: false,
            timer: 2000,
          });
        });
    },
    validationSchema: yup.object({
      title: yup.string().trim().required('Tittle is required'),
      description: yup.string().trim().required('This field is required'),
      urlShare: yup.string().trim().required('This field is required'),
    }),
  });

  const buttonBack = () => {
    window.history.back();
  };

  const [imageUrlOne, setImageUrlOne] = useState('');
  const [imageUrlTwo, setImageUrlTwo] = useState('');
  const [imageUrlThree, setImageUrlThree] = useState('');

  const addPreviewImageOne = (event: React.ChangeEvent<any>) => {
    const file = event.target?.files && event.target?.files[0];
    if (file) {
      setImageUrlOne(URL.createObjectURL(file));
    }
  };

  const addPreviewImageTwo = (event: React.ChangeEvent<any>) => {
    const file = event.target?.files && event.target?.files[0];
    if (file) {
      setImageUrlTwo(URL.createObjectURL(file));
    }
  };

  const addPreviewImageThree = (event: React.ChangeEvent<any>) => {
    const file = event.target?.files && event.target?.files[0];
    if (file) {
      setImageUrlThree(URL.createObjectURL(file));
    }
  };

  return (
    <div className="h-[100%] md:h-screen w-screen overflow-hidden flex md:flex-row flex-col">
      <title>Create | Para Cuando?</title>
      <meta name="description" content="Página para crear un evento"></meta>
      <div className="flex bg-primary-blue w-[100%] md:min-w-[255px] md:max-w-[255px] xl:min-w-[355px] xl:max-w-[355px] max-h-[415px] md:max-h-[100%] justify-center items-center flex-col gap-8">
        <div className="flex justify-center items-center flex-col md:gap-[22px] gap-[16px] pt-[50px] md:pb-[50px] pb-[30px] h-[100%]">
          <div
            className="xl:h-[180px] xl:w-[200px] h-[123px] w-[137px] flex flex-col cursor-pointer relative"
            onClick={linkRoute}
          >
            <Image
              src="/images/whiteLogo.svg"
              alt=""
              layout="fill"
              className="flex items-center md:mt-[-126px] mt-[-20px]"
            />
            <Image
              src="/images/whiteSlogan.svg"
              alt=""
              layout="fill"
              className="flex items-center mt-[40px] md:mt-[-22px] xl:mt-[10px] md:pb-[80px]"
            />
          </div>
          <div className="text-primary-yellow md:pl-[30px] pl-[15px] pr-[26px] pt-[0px] l500-normal-20px-23 xl:l500-normal-24px-23 justify-start items-start w-[100%]">
            <span className="">¡Bienvenido, creador!</span>
          </div>
          <div className="text-white md:pl-[30px] pl-[15px] pr-[30px] l400-normal-16px xl:h400-normal-18px-22  justify-start items-start w-[100%]">
            <span>
              A continuación puedes completar la info de la marca, artista o
              torneo que quieres cerca.
            </span>
          </div>
          <div className="text-white mb-[-230px] ml-[70px] md:flex hidden mt-[240px] h-[30px] w-[100%] l400-normal-16px xl:h400-normal-18px-22 ">
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
                : 'cursor-pointer l600-normal-20px xl:h500-normal-24px text-primary-blue'
            }
          >
            <p onClick={buttonBack}>Back</p>
          </span>
          <span
            className={
              clickNext
                ? 'cursor-pointer l600-normal-20px xl:h500-normal-24px text-primary-blue'
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
            <span className="h500-normal-24px text-black mb-[10px]">
              Publicación
            </span>
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
            <span className="h400-normal-16px pt-[10px]">
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
                className="ml-[15px] pl-[8px] pr-[8px] mb-[-12px] bg-white w-max z-10 "
                htmlFor="title"
              >
                Título de publicación
              </label>
              <input
                className="bg-transparent h-[50px] p-3.5 border-[1px] rounded-[11px] border-[#7D7D7D]"
                name="title"
                type="text"
                placeholder=""
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.title && (
                <div className="text-danger text-red-700 flex justify-end">
                  {formik.errors.title}
                </div>
              )}
            </div>
            <div className="flex md:flex-row flex-col gap-[20px] w-[100%] pl-[20px] pr-[20px]">
              <div className="flex md:w-[50%] w-[100%]">
                <label className="" htmlFor="idPublicationType"></label>
                <select
                  className="dropdown-menu bg-transparent h-[50px] w-[100%] border-[1px] rounded-[11px] border-[#7D7D7D] text-"
                  required
                  name="idPublicationType"
                  value={formik.values.publication_type_id}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="" hidden>
                    Tipo
                  </option>
                  {categories?.map((category) => (
                    <option value={category.id} key={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex md:w-[50%] w-[100%]">
                <label className="" htmlFor="tags"></label>
                <select
                  required
                  className="dropdown-menu bg-transparent h-[50px] w-[100%] border-[1px] rounded-[11px] border-[#7D7D7D]"
                  name="tags"
                  value={formik.values.tags}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="" hidden>
                    Tags
                  </option>
                  {tags?.map((tag) => (
                    <option value={tag.id} key={tag.id}>
                      {tag.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form__recommendation flex flex-col w-[100%] pl-[20px] pr-[20px]">
              <label
                className="ml-[15px] pl-[8px] pr-[8px] mb-[-12px] bg-white w-max z-10"
                htmlFor="description"
              >
                ¿Por qué lo recomiendas?
              </label>
              <textarea
                className="bg-transparent h-[116px] p-3.5 border-[1px] rounded-[11px] border-[#7D7D7D]"
                placeholder=""
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.description && (
                <div className="text-danger text-red-700 flex justify-end">
                  {formik.errors.description}
                </div>
              )}
            </div>
            <div className="form__reference flex flex-col w-[100%] pl-[20px] pr-[20px]">
              <label
                className="ml-[15px] pl-[8px] pr-[8px] mb-[-12px] bg-white w-max z-10"
                htmlFor="urlShare"
              >
                Link de referencia
              </label>
              <input
                className="bg-transparent h-[50px] p-3.5 border-[1px] rounded-[11px] border-[#7D7D7D]"
                type="text"
                placeholder=""
                name="urlShare"
                value={formik.values.reference_link}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.reference_link && (
                <div className="text-danger text-red-700 flex justify-end">
                  {formik.errors.reference_link}
                </div>
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
                <label
                  style={{ backgroundImage: `url(${imageUrlOne})` }}
                  className="h-[206px] cursor-pointer bg-cover bg-center w-[100%] bg-primary-grayLight flex hover:scale-[1.05] ease-in-out duration-300"
                >
                  <input
                    type="file"
                    id="file"
                    name="imageUpload"
                    multiple
                    accept="image/*"
                    onChange={addPreviewImageOne}
                    className="h-[206px] w-[100%] hidden cursor-pointer"
                  />
                  <MdOutlineAdd className="text-[#1B4DB1] p-[74px] flex h-[100%] w-[100%]" />
                </label>
              </div>
              <div className="bg-black h-max max-w-[177px] relative justify-center items-center flex">
                <label
                  style={{ backgroundImage: `url(${imageUrlTwo})` }}
                  className="h-[206px] cursor-pointer bg-cover bg-center w-[100%] bg-primary-grayLight flex hover:scale-[1.05] ease-in-out duration-300"
                >
                  <input
                    type="file"
                    id="file"
                    name="imageUpload"
                    multiple
                    accept="image/*"
                    onChange={addPreviewImageTwo}
                    className="h-[206px] w-[100%] hidden cursor-pointer"
                  />
                  <MdOutlineAdd className="text-[#1B4DB1] p-[74px] flex h-[100%] w-[100%]" />
                </label>
              </div>
              <div className="h-max max-w-[177px] relative justify-center items-center flex">
                <label
                  style={{ backgroundImage: `url(${imageUrlThree})` }}
                  className="h-[206px] cursor-pointer bg-cover bg-center w-[100%] bg-primary-grayLight flex hover:scale-[1.05] ease-in-out duration-300"
                >
                  <input
                    type="file"
                    id="file"
                    name="imageUpload"
                    multiple
                    accept="image/*"
                    onChange={addPreviewImageThree}
                    className="h-[206px] w-[100%] hidden cursor-pointer"
                  />
                  <MdOutlineAdd className="text-[#1B4DB1] p-[74px] flex h-[100%] w-[100%]" />
                </label>
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
            <BlueButton type="button" functionality={data[0]} />
          </div>
          <div
            className={
              clickNext
                ? 'mb-[50px] md:mb-[0px] flex justify-center items-center'
                : 'hidden'
            }
          >
            <BlueButton type="submit" functionality={data[1]} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
