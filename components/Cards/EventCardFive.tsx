import Link from 'next/link';
import '../../styles/Home.module.css';
import Like from '../Buttons/Like';
import PersonIcon from '../PersonIcon';

const EventCardFive = () => {
  return (
    <div className="rounded-3xl relative z-10 w-[320px] m-[10px] h-[474px] shadow-card-box">
      <div className="Like absolute bottom-52 right-7 ">
        <Like></Like>
      </div>
      <Link href="/details/5">
        <div className="HeaderImg bg-[url('https://images2.imgbox.com/75/7e/oqt5nojY_o.png')] bg-cover bg-center h-60 z-0 rounded-t-3xl "></div>
      </Link>
      <div className="BodyContent pl-[23px] pr-[23px] mt-4 h-52 flex flex-col gap-4 text-start">
        <div className="content__event h-26 flex flex-col gap-2">
          <Link href="/details/5">
            <div className="content__tittle h600-medium--20px text-[#1A1E2E]">
              <h3>Marca Ecoalf</h3>
            </div>
            <div className="content__description h400-medium-15px text-[#6E6A6C]">
              <p>
                Marca española de prendas y accesorios, elaborando como materia
                prima, diversos tipos de desechos que se arrojan al mar.
              </p>
            </div>
          </Link>
        </div>
        <div className="content__page h500-medium-14px text-[#1B4DB1]">
          <a href="">ladygaga.com</a>
        </div>
        <div className="content__votes flex justify-left items-center gap-1 h-4">
          <div className="votes__icon">
            <PersonIcon></PersonIcon>
          </div>
          <div className="votes__quantity text-[#1A1E2E] h500-medium-14px">
            <p>90’800’756 votos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCardFive;
