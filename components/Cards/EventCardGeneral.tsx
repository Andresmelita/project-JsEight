import Link from 'next/link';
import { useState } from 'react';
import '../../styles/Home.module.css';
import Like from '../Buttons/Like';
import LikeTwo from '../Buttons/LikeTwo';
import PersonIcon from '../PersonIcon';

interface Props {
  id: string;
  title: string;
  description: string;
  votes: number;
  link: string;
  // myvote: boolean;
}

const EventCardGeneral = ({
  id,
  title,
  description,
  link,
  votes,
}: // myvote,
Props) => {
  const [like, setLike] = useState(false);

  // useEffect(() => {
  //   if (myvote == true) {
  //     setLike(true);
  //   } else {
  //     setLike(false);
  //   }
  // }, [id]);

  return (
    <div className="EventCard overflow-hidden bg-white rounded-3xl relative z-10 w-[320px] m-[10px] h-[474px] shadow-card-box">
      <div className="Like absolute bottom-52 right-[20px] z-50">
        {like ? <Like /> : <LikeTwo />}
      </div>
      <Link href={`/details/${id}`}>
        <div className="hover:scale-[1.05] transition-all ease-linear rounded-t-[20px] w-[100%] h-[100vh] max-h-[239px] bg-[url('/images/coverStandar.jpg')]">
          {/* <img
            src='./'
            className="rounded-t-[20px] w-[100%] h-[239px]"
            alt="cover"
          /> */}
        </div>
      </Link>
      <div className="BodyContent pl-[23px] pr-[23px] mt-[15px] pb-[30px] h-52 content-between grid gap-4 text-start">
        <div className="content__event h-26 flex flex-col gap-2">
          <Link href={`/details/${id}`}>
            <div className="content__tittle h600-medium--20px text-[#1A1E2E] w-[100vw] max-w-[280px] h-[100vh] max-h-[24px] overflow-hidden">
              <h3>{title}</h3>
            </div>
            <div className="h-[24px] right-[44px] w-[100vw] max-w-[50px] absolute bg-gradient-to-l from-[#fff] flex mt-[-24px]"></div>
            <div className="h-[24px] right-[0px] bg-white w-[100vw] max-w-[50px] absolute flex mt-[-24px]"></div>
          </Link>
          {/* <Link href={`/details/${id}`}> */}
          <div>
            <div className="cursor-default content__description h400-medium-15px text-[#6E6A6C] flex flex-wrap w-[100vw] max-w-[280px] pr-[10px] text-justify h-[100vh] max-h-[106px] hover:overflow-y-auto overflow-hidden overflow-y-none overflow-x-hidden">
              <p>{description}</p>
              <p></p>
            </div>
            <div className="h-[14px] w-[100vw] max-w-[280px] absolute bg-gradient-to-t from-[#fff] flex mt-[-14px]"></div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="content__page h500-medium-14px text-[#1B4DB1] w-[100vw] max-w-[280px] h-[100vh] max-h-[17px] overflow-hidden">
            <a href="">{link}</a>
          </div>
          <div className="h-[18px] right-[8px] w-[100vw] max-w-[50px] absolute bg-gradient-to-l from-[#fff] flex mt-[0px]"></div>
          <div className="content__votes flex justify-left items-center gap-1 h-4 pt-[16px]">
            <div className="votes__icon">
              <PersonIcon></PersonIcon>
            </div>
            <div className="votes__quantity text-[#1A1E2E] h500-medium-14px">
              <p>{votes}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCardGeneral;
