import Image from 'next/image';
import { ReactElement, useEffect, useState } from 'react';
import Cathegory from '../../components/Buttons/Cathegory';
import EventCardGeneral from '../../components/Cards/EventCardGeneral';
import Layout from '../../components/layout/Layout';
import NestedLayout from '../../components/NestedLayout';
import { eventos } from '../../lib/data/eventos.mock';

export default function ProfilePage() {
  const [data, setData] = useState(['']);

  useEffect(() => {
    Cathegories();
  }, []);

  const Cathegories = () => {
    setData(['Mis votos', 'Mis publicaciones']);
  };

  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex bg-primary-blue h-[129px] justify-center items-end w-[100vw]">
        <div className="max-h-[117px] max-w-[117px] h-[100vh] w-[100vw] bg-transparent mb-[-60px] z-50 relative">
          <Image
            src="/images/profileImage.png"
            alt=""
            layout="fill"
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
      <div className="w-[100vw] justify-center items-center flex">
        <div className="pl-[20px] pr-[20px] md:pl-[0px] md:pr-[0px] flex content-start align-middle items-center max-w-[1020px] h-max flex-wrap lg:justify-start justify-center sm:mb-[150px] mb-[70px] gap-[0px]">
          {eventos.slice(0, visible).map((card, index) => {
            return (
              <div key={index} className="h-max w-max">
                <EventCardGeneral
                  id={card.id}
                  cover={card.cover}
                  description={card.description}
                  link={card.link}
                  votes={card.votes}
                  title={card.title}
                  like={card.like}
                />
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={showMoreItems}
        className="bg-primary-blue rounded-full text-white h-[47px] w-[124px] l600-normal-16px flex justify-center items-center mb-[65px]"
      >
        Ver más
      </button>
    </div>
  );
}

ProfilePage.getLayout = function (page: ReactElement) {
  return (
    <Layout
      title="My Profile | Para Cuando?"
      description="Details of publications"
    >
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};
