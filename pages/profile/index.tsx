import { kMaxLength } from 'buffer';
import Image from 'next/image';
import { ReactElement, useEffect, useState } from 'react';
import Cathegory from '../../components/Buttons/Cathegory';
import EventCard from '../../components/Cards/EventCard';
import EventCardFive from '../../components/Cards/EventCardFive';
import EventCardFour from '../../components/Cards/EventCardFour';
import EventCardThree from '../../components/Cards/EventCardThree';
import EventCardTwo from '../../components/Cards/EventCardTwo';
import Layout from '../../components/Layout';
import NestedLayout from '../../components/NestedLayout';

export default function ProfilePage() {
  const [data, setData] = useState(['']);

  useEffect(() => {
    Cathegories();
  }, []);

  const Cathegories = () => {
    setData(['Mis votos', 'Mis publicaciones']);
  };

  const [items, setItems] = useState([<></>]);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    setItems([
      <EventCard key={0} />,
      <EventCardTwo key={1} />,
      <EventCardThree key={2} />,
      <EventCardFour key={3} />,
      <EventCardFive key={4} />,
    ]);
    setScreen(true);
  }, []);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const [screen, setScreen] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex bg-primary-blue h-[129px] justify-center items-end w-[100vw]">
        <div className="max-h-[117px] max-w-[117px] bg-transparent mb-[-60px] z-50">
          <Image
            src="/images/profileImage.png"
            alt=""
            width={kMaxLength}
            height={kMaxLength}
            className="flex rounded-full"
          />
        </div>
      </div>
      <div className="flex gap-[13px] w-max h-[45px] mb-[70px] mt-[90px]">
        <div className="flex w-[100%]">
          <Cathegory Cathegories={data[0]} />
        </div>
        <div className="flex w-[100%]">
          <Cathegory Cathegories={data[1]} />
        </div>
      </div>
      <div className="w-[100vw] bg-primary-blue justify-center items-center flex">
        <div className="bg-primary-pink pl-[20px] pr-[20px] md:pl-[0px] md:pr-[0px] flex content-start align-middle items-center max-w-[1020px] h-max flex-wrap lg:justify-start justify-center sm:mb-[150px] mb-[70px] gap-[0px]">
          {items.slice(0, visible).map((item, index) => {
            return (
              <div key={index} className="h-max w-max bg-primary-yellow">
                {item}
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={showMoreItems}
        className="bg-primary-blue rounded-full text-white h-[47px] w-[124px] l600-normal-16px flex sm:hidden justify-center items-center mb-[65px]"
      >
        Ver más
      </button>
    </div>
  );
}

ProfilePage.getLayout = function (page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};
