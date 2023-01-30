import { kMaxLength } from 'buffer';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsCircle, BsHeart } from 'react-icons/bs';
import { FaPowerOff } from 'react-icons/fa';
import { IoAddSharp } from 'react-icons/io5';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { RiLayoutMasonryFill } from 'react-icons/ri';
import { SlArrowDown } from 'react-icons/sl';

const Header = () => {
  const [clickMenu, setClickMenu] = useState(false);
  const handleClickMenu = () => setClickMenu(!clickMenu);

  const clickLogOut = () => {
    setClickMenu(false);
    setClickLog(false);
  };

  const [clickLog, setClickLog] = useState(false);
  const handleClickLog = () => setClickLog(!clickLog);

  const login = () => {
    setClickLog(true);
  };

  return (
    <div className="bg-primary-black header-container">
      <div className="flex flex-row w-screen items-center">
        <div className="flex place-content-between items-center w-screen mr-[20px] ml-[20px] sm:mr-[52px] sm:ml-[46px]">
          <div className="sm:w-[62px] sm:h-[30px] w-[50px] h-[30px]">
            <Link href="/">
              <Image
                src="/images/minilogo.svg"
                width={kMaxLength}
                height={kMaxLength}
                alt="imageLogo"
              />
            </Link>
          </div>

          <nav
            className={
              clickLog
                ? 'hidden'
                : 'text-white flex sm:gap-[35px] gap-[12px] h500-normal-12px items-center'
            }
          >
            <Link href="/create" className="flex">
              <div className="flex items-center text-primary-blue">
                <IoAddSharp className=" justify-content flex m-1 text-[26px]" />
                Crear publicación
              </div>
            </Link>
            <div className="flex sm:gap-[18px] gap-[12px]">
              <div className="cursor-pointer" onClick={login}>
                Log In
              </div>
              <Link href="/sign-up">Sign In</Link>
            </div>
          </nav>

          <nav
            className={
              clickLog
                ? 'text-white flex sm:gap-[49px] cursor:pointer gap-[12px] h500-normal-12px items-center'
                : 'hidden'
            }
          >
            <Link href="/create" className="md:flex hidden">
              <div className="flex items-center text-primary-blue">
                <IoAddSharp className=" justify-content flex m-1 text-[26px]" />
                Crear publicación
              </div>
            </Link>
            <div className="flex sm:gap-[42px] gap-[12px] justify-center items-center">
              <Link href="/profile" className="gap-[8px] md:flex hidden">
                <BsHeart className="text-primary-pink text-[16px]" />
                Mis Votos
              </Link>
              <div className="flex gap-[8px] sm:gap-[13px] justify-center items-center">
                <div className="flex items-center justify-center">
                  <BsCircle className="text-white relative text-[34px]" />
                  <MdOutlinePersonOutline className="absolute text-white text-[22px]" />
                </div>
                <span>alumno.academlo@gmail.com</span>
                <div className="hamburguer">
                  <SlArrowDown
                    className="text-white ml-[0px] cursor-pointer"
                    onClick={handleClickMenu}
                  />
                  <div
                    className={
                      clickMenu ? 'nav-menu active' : 'nav-menu hidden'
                    }
                  >
                    <div className="bg-white absolute right-[20px] top-[91px] p-[8px] w-[250px] h-[328px] z-[200] shadow-hamburguer rounded-[25px]">
                      <div className="text-black h400-normal-18px m-[29px]">
                        <div className="flex flex-col gap-[25px] mb-[40px]">
                          <Link href="/create" className="flex gap-[19px] items-center ">
                            <IoAddSharp className=" justify-content text-primary-blue flex text-[23px]" />
                            Crear publicación
                          </Link>
                          <Link href="/profile" className="flex gap-[19px] items-center">
                            <BsHeart className="text-primary-pink text-[23px]" />
                            Mis Votos
                          </Link>
                          <a className="flex gap-[19px] items-center">
                            <RiLayoutMasonryFill className="text-[23px]" />
                            Configuración
                          </a>
                          <a
                            className="flex gap-[19px] items-center cursor-pointer"
                            onClick={clickLogOut}
                          >
                            <FaPowerOff className="text-[23px]" />
                            Cerrar sesión
                          </a>
                        </div>
                        <div className="border-t-[2px] p-[22px] border-primary-grayDark">
                          <a className="text-primary-grayDark">
                            Ayuda y Soporte
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
