import { useFormik } from 'formik';
import { MdOutlineAdd } from 'react-icons/md';
import * as yup from 'yup';
import Header from '../../components/Header';

const SetupPage = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
    },
    onSubmit: () => {},
    validationSchema: yup.object({
      email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
      password: yup.string().trim().required('Password is required'),
    }),
  });
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
        <div className="flex md:max-w-[990px] md:h-[100%] w-[100vw] justify-center items-center">
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
            <div className="h-max justify-center items-center md:items-start flex-col flex w-[100vw] lg:max-w-[660px] max-w-[600px]  md:max-w-[500px] pt-[60px] pb-[60px] md:pt-[0px] md:pb-[38px]">
              <h1 className="h500-normal-24px text-primary-blackLight pb-[24px] md:pl-[20px] md:pb-[50px] flex">
                Información de Contacto
              </h1>
              <div className="names flex flex-col gap-[16px] w-[100%]">
                <div className="form__title flex flex-col w-[100vw] pl-[20px] pr-[20px] md:pb-[30px] pb-[16px] text-[#7D7D7D]">
                  <label
                    className="ml-[15px] pl-[8px] pr-[8px] mb-[-12px] bg-white w-max z-10"
                    htmlFor="name"
                  >
                    First Name
                  </label>
                  <input
                    className="bg-transparent h-[50px] max-w-[560px] lg:max-w-[620px] md:max-w-[460px] w-[100%] p-3.5 border-[1px] rounded-[11px] border-[#7D7D7D]"
                    name="name"
                    type="text"
                    placeholder=""
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.name && (
                    <div className="text-danger">{formik.errors.name}</div>
                  )}
                </div>

                <div className="form__title flex flex-col w-[100vw] pl-[20px] pr-[20px] text-[#7D7D7D]">
                  <label
                    className="ml-[15px] pl-[8px] pr-[8px] mb-[-12px] bg-white w-max z-10"
                    htmlFor="email"
                  >
                    Last Name
                  </label>
                  <input
                    className="bg-transparent h-[50px] max-w-[560px] lg:max-w-[620px] md:max-w-[460px] lg:w-[100%] w-[100%] md:[100vw] p-3.5 border-[1px] rounded-[11px] border-[#7D7D7D]"
                    name="lastname"
                    type="text"
                    placeholder=""
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.lastname && (
                    <div className="text-danger">{formik.errors.lastname}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-[182px] max-h-[182px] w-[100vw] bg-[url('/images/footerImage.png')] bg-center bg-cover h-[100%]"></div>
      </div>
    </div>
  );
};

export default SetupPage;
