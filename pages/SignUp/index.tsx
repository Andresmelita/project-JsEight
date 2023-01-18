import Link from 'next/link'
import React from 'react'

const SignUp = () => {
  return (
    <div className="login__page h-screen flex items-center">
      <div className='login__card flex flex-col md:flex-row xs:m-auto md:m-0 w-screen'>
      <div className="login__image hidden bg-[url('/images/login_img.jpg')] bg-cover bg-center md:block w-1/2 h-screen overflow-hidden relative">
          <div className="letters__container flex justify-center align-center w-[100%] h-[100%] ">
            <div className="letters flex items-center w-fit">
              <img className=' w-[245px] h-[54px]' src="/images/letrasLogin.png" alt="" />
              <img className=' w-[129px] h-[28px]' src="/images/letrasLogin2.png" alt="" />
            </div>
          </div>          
        </div>
        <div className="login__body flex flex-col xs:m-auto xs:w-80 md:w-1/2 md:p-10 md:h-screen overflow-hidden justify-center">
          <div className="login__logo bg-[url('/images/logo.svg')] bg-cover bg-center w-[187px] h-[168px] m-auto mt-0 mb-0">
          </div>
          <div className="login__body-info md:w-3/4 lg:w-4/5 md:m-auto md:mt-0 md:mb-0">
            <div className="login__info flex flex-col gap-5 pb-6">
              <div className="login__tittle">
                <h3 className='h600-medium-32px'>Sign Up</h3>
              </div>
              <div className="login__text">
                <p className="h400-normal-16px text-[#4D4D4D]">Login with the data you entered during your registration.</p>
              </div>
            </div>
            <div className="login__form flex flex-col gap-3">
              <div className="form__email flex flex-col gap-2">
                <label className='text-[#1D1C3F] l600-normal-16px' htmlFor="">Email</label>
                <input className='bg-transparent l400-normal-16px p-3.5 border-2 rounded text-[#1D1C3F] border-[#1D1C3F]' type="text" placeholder='john.doe@gmail.com'/>
              </div>
              <div className="names flex gap-3">
              <div className="form__password flex flex-col gap-2 w-[100%]">
                <label className='text-[#1D1C3F] l600-normal-16px' htmlFor="">Name</label>
                <input className='bg-transparent l400-normal-16px  w-[100%] p-3.5 border-2 rounded text-[#1D1C3F] border-[#1D1C3F]' type="text" placeholder='John'/>
              </div>
              <div className="form__password flex flex-col gap-2 w-[100%]">
                <label className='text-[#1D1C3F] l600-normal-16px' htmlFor="">Lastname</label>
                <input className='bg-transparent l400-normal-16px w-[100%] p-3.5 border-2 rounded text-[#1D1C3F] border-[#1D1C3F]' type="text" placeholder='Doe'/>
              </div>
              </div>
              <div className="form__password flex flex-col gap-2">
                <label className='text-[#1D1C3F] l600-normal-16px' htmlFor="">Password</label>
                <input className='bg-transparent l400-normal-16px p-3.5 border-2 rounded text-[#1D1C3F] border-[#1D1C3F]' type="text" placeholder='***********'/>
              </div>
              <div className="form__button">
                <button className='w-full p-4 mt-5 bg-[#1B4DB1] rounded text-[#fff] l600-normal-16px'>Create Account</button>
              </div>
              <div className="form__recovery flex justify-center">
                <Link className='l400-normal-16px w-40 text-center text-[#4D4D4D]' href='/Login'>or Log in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp