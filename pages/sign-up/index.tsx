import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import * as yup from 'yup';
import { signUp } from '../../lib/services/auth.services';

const SignUp = () => {
  const router = useRouter();

  const linkRoute = () => {
    router.push('/');
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    onSubmit: (value) => {
      signUp(value)
        .then((response) => {
          Swal.fire({
            position: 'top',
            toast: true,
            icon: 'success',
            title: 'Usuario registrado exitosamente!',
            timerProgressBar: true,
            showConfirmButton: false,
            timer: 2200,
          });
          setTimeout(function () {
            window.location.href = '/login';
          }, 2200);
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            position: 'top',
            toast: true,
            icon: 'error',
            title: 'Error de registro',
            showConfirmButton: false,
            timer: 2000,
          });
        });
    },
    validationSchema: yup.object({
      firstName: yup.string().trim().required('Name is required'),
      lastName: yup.string().trim().required('Lastname is required'),
      email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
      password: yup.string().trim().required('Password is required'),
      // .matches(
      //   /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      //   'Password must contain at least 8 characters, one uppercase, one number and one special case character'
      // ),
    }),
  });

  return (
    <div className="login__page h-screen flex items-center">
      <title>Sign Up | Para Cuando?</title>
      <meta name="description" content="Página para crear un evento"></meta>
      <div className="login__card flex flex-col md:flex-row xs:m-auto md:m-0 w-screen">
        <div className="login__image hidden bg-[url('/images/login_img.jpg')] bg-cover bg-center md:block w-1/2 h-screen overflow-hidden relative">
          <div className="letters__container flex justify-center align-center w-[100%] h-[100%] ">
            <div className="letters flex items-center w-fit">
              <img
                className=" w-[245px] h-[54px]"
                src="/images/letrasLogin.png"
                alt=""
              />
              <img
                className=" w-[129px] h-[28px]"
                src="/images/letrasLogin2.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="login__body flex flex-col xs:m-auto xs:w-80 md:w-1/2 md:p-10 md:h-screen overflow-hidden justify-center">
          <div className="login__logo bg-[url('/images/logo.png')] bg-cover bg-center w-[187px] h-[168px] m-auto mt-0 mb-0">
            <Link href="/">
              <div className="imgLink w-[100%] h-[100%]"></div>
            </Link>
          </div>
          <div className="login__body-info md:w-3/4 lg:w-4/5 md:m-auto md:mt-0 md:mb-0">
            <div className="login__info flex flex-col gap-5 pb-6">
              <div className="login__tittle">
                <h3 className="h600-medium-32px">Sign Up</h3>
              </div>
              <div className="login__text">
                <p className="h400-normal-16px text-[#4D4D4D]">
                  Login with the data you entered during your registration.
                </p>
              </div>
            </div>
            <div className="login__form flex flex-col gap-3">
              <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
                <form className="w-50" onSubmit={formik.handleSubmit}>
                  <div className="form__email flex flex-col gap-2">
                    <label
                      className="text-[#1D1C3F] l600-normal-16px"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="bg-transparent l400-normal-16px p-3.5 border-2 rounded text-[#1D1C3F] border-[#1D1C3F]"
                      name="email"
                      type="email"
                      placeholder="john.doe@gmail.com"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.email && (
                      <div className="text-danger text-red-700 flex justify-end">
                        {formik.errors.email}
                      </div>
                    )}
                  </div>
                  <div className="names flex gap-3">
                    <div className="form__name flex flex-col gap-2 w-[100%]">
                      <label
                        className="text-[#1D1C3F] l600-normal-16px"
                        htmlFor="firstName"
                      >
                        Name
                      </label>
                      <input
                        className="bg-transparent l400-normal-16px w-[100%] p-3.5 border-2 rounded text-[#1D1C3F] border-[#1D1C3F]"
                        name="firstName"
                        type="text"
                        placeholder="john"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.firstName && (
                        <div className="text-danger text-red-700 flex justify-end">
                          {formik.errors.firstName}
                        </div>
                      )}
                    </div>

                    <div className="form__lastname flex flex-col gap-2 w-[100%]">
                      <label
                        className="text-[#1D1C3F] l600-normal-16px"
                        htmlFor="lastName"
                      >
                        Lastname
                      </label>
                      <input
                        className="bg-transparent l400-normal-16px w-[100%] p-3.5 border-2 rounded text-[#1D1C3F] border-[#1D1C3F]"
                        name="lastName"
                        type="text"
                        placeholder="doe"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.lastName && (
                        <div className="text-danger text-red-700 flex justify-end">
                          {formik.errors.lastName}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="form__email flex flex-col gap-2">
                    <label
                      className="text-[#1D1C3F] l600-normal-16px"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="bg-transparent l400-normal-16px p-3.5 border-2 rounded text-[#1D1C3F] border-[#1D1C3F]"
                      name="password"
                      type="password"
                      placeholder="***********"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.password && (
                      <div className="text-danger text-red-700 flex justify-end">
                        {formik.errors.password}
                      </div>
                    )}
                  </div>
                  <div className="form__button">
                    <button
                      type="submit"
                      className="w-full p-4 mt-5 bg-[#1B4DB1] rounded text-[#fff] l600-normal-16px"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
              <div className="names flex gap-3"></div>
              <div className="form__recovery flex justify-center items-center flex-row">
                <Link
                  className="justify-center flex l400-normal-16px w-40 text-center text-[#4D4D4D]"
                  href="/login"
                >
                  or
                  <p className="flex transition-all ease-in hover:text-[17px]">
                    &nbsp;&nbsp;Log in
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
