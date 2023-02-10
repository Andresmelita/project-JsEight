import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { MdOutlineAdd } from 'react-icons/md';
import * as yup from 'yup';
import BlueButton from '../../components/Buttons/BlueButton';
import Header from '../../components/Header';
import { useIdUser } from '../../lib/services/userId.services';

const SetupPage = () => {
  const [data, setData] = useState(['']);

  useEffect(() => {
    Functionality();
  }, []);

  const Functionality = () => {
    setData(['Actualizar']);
  };
  const { data: userId } = useIdUser();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      file: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: yup.object({}),
  });

  const [imageUrl, setImageUrl] = useState('');

  const addPreviewImage = (event: React.ChangeEvent<any>) => {
    const file = event.target?.files && event.target?.files[0];
    if (file) {
      setImageUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="">
      <title>Configuration | Para Cuando?</title>
      <meta name="description" content="Página para crear un evento"></meta>
      <Header />
      <div className="flex flex-col justify-center items-center md:h-screen h-[100%]">
        <div className="flex bg-primary-blue h-[129px] md:min-h-[129px] justify-center items-center w-[100vw]">
          <div className="h900-normal--48px text-white pl-[20px] flex justify-start w-[100vw] max-w-[990px]">
            Perfil
          </div>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex md:max-w-[990px] md:h-[100%] w-[100vw] justify-center items-center"
        >
          <div className="flex justify-center items-center flex-col md:flex-row h-max md:mb-[40px]">
            <div className="flex h-max justify-center items-center">
              <div className="lg:mr-[92px] sm:mr-[30px] flex-col pt-[60px] md:pt-[0px] pl-[15px] pr-[15px] md:pl-[0px] md:pr-[0px]  md:w-max w-[100vw] flex gap-[22px] justify-center md:items-start items-center h-max">
                <div className="flex flex-col lg:ml-[00px]">
                  <h1 className="h500-normal-24px text-primary-blackLight pb-[10px] flex justify-center md:justify-start">
                    Foto de Perfil
                  </h1>
                  <h3 className="h400-normal-16px text-primary-grayDark">
                    Agrega una foto para tu perfil
                  </h3>
                </div>
                <div className="h-max max-w-[220px] relative justify-center items-center flex">
                  <label
                    style={{ backgroundImage: `url(${imageUrl})` }}
                    className="h-[206px] w-[220px] cursor-pointer rounded-[15px] bg-primary-grayLight bg-cover flex hover:scale-[1.05] ease-in-out duration-300"
                  >
                    <input
                      type="file"
                      name="file"
                      multiple
                      value={formik.values.file}
                      onChange={addPreviewImage}
                      onBlur={formik.handleBlur}
                      accept="image/*"
                      className="h-[206px] w-[100%] z-[1000] cursor-pointer absolute hidden"
                    />
                    <MdOutlineAdd className="text-[#1B4DB1] p-[90px] flex h-[100%] w-[100%]" />
                  </label>
                </div>
              </div>
            </div>
            <div className="h-max justify-center items-center md:items-start flex-col flex w-[100vw] lg:max-w-[660px] max-w-[600px]  md:max-w-[500px] pt-[60px] pb-[60px] md:pt-[0px] md:pb-[38px]">
              <h1 className="h500-normal-24px text-primary-blackLight pb-[24px] md:pl-[20px] md:pb-[50px] flex">
                Información de Contacto
              </h1>
              <div className="names flex flex-col gap-[16px] w-[100%]">
                <div className="form__title flex flex-col w-[100vw] pl-[20px] pr-[20px] md:pb-[30px] pb-[16px] text-[#7D7D7D]">
                  <label
                    className="ml-[15px] pl-[8px] pr-[8px] mb-[-12px] bg-white w-max z-10"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    className="text-black bg-transparent h-[50px] max-w-[560px] lg:max-w-[620px] md:max-w-[460px] w-[100%] p-3.5 border-[1px] rounded-[11px] border-[#7D7D7D]"
                    name="firstName"
                    type="text"
                    placeholder={userId?.first_name}
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.firstName && (
                    <div className="text-danger">{formik.errors.firstName}</div>
                  )}
                </div>

                <div className="form__title flex flex-col w-[100vw] pl-[20px] pr-[20px] text-[#7D7D7D]">
                  <label
                    className="ml-[15px] pl-[8px] pr-[8px] mb-[-12px] bg-white w-max z-10"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    className="text-black bg-transparent h-[50px] max-w-[560px] lg:max-w-[620px] md:max-w-[460px] lg:w-[100%] w-[100%] md:[100vw] p-3.5 border-[1px] rounded-[11px] border-[#7D7D7D]"
                    name="lastName"
                    type="text"
                    placeholder={userId?.last_name}
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.lastName && (
                    <div className="text-danger">{formik.errors.lastName}</div>
                  )}
                </div>
                <div className="justify-center items-center pt-[20px] hidden">
                  <BlueButton
                    type="submit"
                    functionality={data[0]}
                    className="z-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="min-h-[182px] max-h-[182px] w-[100vw] bg-[url('/images/footerImage.png')] bg-center bg-cover h-[100%]"></div>
      </div>
    </div>
  );
};

export default SetupPage;
