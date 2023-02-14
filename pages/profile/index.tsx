import Image from 'next/image';
import { ReactElement, useEffect, useState } from 'react';
import Category from '../../components/Buttons/Category';
import EventCardGeneral from '../../components/Cards/EventCardGeneral';
import Layout from '../../components/layout/Layout';
import NestedLayout from '../../components/NestedLayout';
import { useMypublications } from '../../lib/services/publication.services';
import { useVotes } from '../../lib/services/vote.services';

export default function ProfilePage() {
  const { data: publications, mutate: mutPublications } = useMypublications();
  const { data: votes } = useVotes();
  const [data, setData] = useState(['']);

  const [myButton, setMyButton] = useState(false);

  const changeToMyPublications = () => {
    setMyButton(false);
    mutPublications();
  };

  const changeToMyVotes = () => {
    setMyButton(true);
    mutPublications();
  };

  useEffect(() => {
    Categories();
  }, []);

  const Categories = () => {
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
        <div
          className={myButton ? 'flex w-[100%]' : 'flex w-[100%]'}
          onClick={changeToMyVotes}
        >
          <Category Categories={data[0]} />
        </div>
        <div
          className={myButton ? 'flex w-[100%]' : 'flex w-[100%]'}
          onClick={changeToMyPublications}
        >
          <Category Categories={data[1]} />
        </div>
      </div>
      <div className="w-[100vw] justify-center items-center flex">
        <div
          className={
            myButton
              ? 'hidden'
              : 'pl-[20px] pr-[20px] md:pl-[0px] md:pr-[0px] flex content-start align-middle items-center max-w-[1020px] h-max flex-wrap lg:justify-start justify-center sm:mb-[150px] mb-[70px] gap-[0px]'
          }
        >
          {publications?.slice(0, visible).map((event) => {
            return (
              <div key={event.id} className="h-max w-max">
                <EventCardGeneral
                  id={event.id}
                  title={event.title}
                  description={event.description}
                  link={event.content}
                  votes={event.votes_count}
                />
              </div>
            );
          })}
        </div>
        <div
          className={
            myButton
              ? 'pl-[20px] pr-[20px] md:pl-[0px] md:pr-[0px] flex content-start align-middle items-center max-w-[1020px] h-max flex-wrap lg:justify-start justify-center sm:mb-[150px] mb-[70px] gap-[0px]'
              : 'hidden'
          }
        >
          {votes?.slice(0, visible).map((vote) => {
            return (
              <div key={vote.Publication.id} className="h-max w-max">
                <EventCardGeneral
                  id={vote.Publication.id}
                  title={vote.Publication.title}
                  description={vote.Publication.description}
                  link={vote.Publication.content}
                  votes={vote.Publication.votes_count}
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
