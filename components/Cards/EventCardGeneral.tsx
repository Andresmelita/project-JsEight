import Link from 'next/link';
import '../../styles/Home.module.css';
import Like from '../Buttons/Like';
import PersonIcon from '../PersonIcon';

const EventCardGeneral = ({ Information }: { Information: any }) => {
  return (
    <div className="EventCard rounded-3xl relative z-10 w-[320px] m-[10px] h-[474px] shadow-card-box">
      <div className="Like absolute bottom-52 right-[20px]">
        <Like />
      </div>
      <div className="">
        <img
          src={`${Information.cover}`}
          className="rounded-t-[20px] w-[100%] h-[239px]"
          alt="cover"
        />
      </div>
      <div className="BodyContent pl-[23px] pr-[23px] mt-4 h-52 flex flex-col gap-4 text-start">
        <div className="content__event h-26 flex flex-col gap-2">
          <Link href="/details/1">
            <div className="content__tittle h600-medium--20px text-[#1A1E2E]">
              <h3>{Information.title}</h3>
            </div>
          </Link>
          <Link href="/details/1">
            <div className="content__description h400-medium-15px text-[#6E6A6C]">
              <p></p>
            </div>
          </Link>
        </div>
        <div className="content__page h500-medium-14px text-[#1B4DB1]">
          <a href="">{Information.description}</a>
        </div>
        <div className="content__votes flex justify-left items-center gap-1 h-4">
          <div className="votes__icon">
            <PersonIcon></PersonIcon>
          </div>
          <div className="votes__quantity text-[#1A1E2E] h500-medium-14px">
            <p>{Information.votes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCardGeneral;
