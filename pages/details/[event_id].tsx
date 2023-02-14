import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Category from '../../components/Buttons/Category';
import InputSearch from '../../components/InputSearch';
import Layout from '../../components/layout/Layout';
import NestedLayout from '../../components/NestedLayout';
import PersonIcon from '../../components/PersonIcon';
import SliderNew from '../../components/SliderNew';
import Suggestions from '../../components/Suggestions';
import { useCategories } from '../../lib/services/category.services';
import { usePublicationID } from '../../lib/services/publication.services';
import { useUser } from '../../lib/services/user.services';
import { useVotes, voteFor } from '../../lib/services/vote.services';

export default function EventId() {
  const router = useRouter();
  const { data: user } = useUser();
  const path = router.query.event_id as string;
  const { data: publication, mutate: mutPublicationID } =
    usePublicationID(path);
  const { data: categories } = useCategories();
  const { data: myvotes, mutate: mutVotes } = useVotes();
  const clickVote = () => {
    if (user) {
      voteFor(path);
      Swal.fire({
        position: 'top',
        toast: true,
        icon: 'success',
        title: 'Gracias por tu voto!',
        timerProgressBar: true,
        showConfirmButton: false,
        timer: 2200,
      });
      setTimeout(function () {
        mutPublicationID();
        mutVotes();
      }, 300);
    } else {
      window.location.href = '/login';
    }
  };

  const clickCancelVote = () => {
    if (user) {
      voteFor(path);
      Swal.fire({
        position: 'top',
        toast: true,
        icon: 'info',
        title: 'Tu voto ha sido retirado!',
        timerProgressBar: true,
        showConfirmButton: false,
        timer: 2200,
      });
      setTimeout(function () {
        mutPublicationID();
        mutVotes();
      }, 300);
    } else {
      window.location.href = '/login';
    }
  };

  // Estado de botón de votos
  const [vote, setVote] = useState<boolean>(false);
  const myPublication = myvotes?.filter((event) => {
    return event.publication_id === path;
  });
  useEffect(() => {
    myPublication?.map((event) => {
      if (event.publication_id) {
        setVote(true);
      } else {
        setVote(false);
      }
    });
  }, [myPublication]);

  return (
    <div className="event__page">
      <div className="flex justify-center event__header shadow-header w-[100vw]">
        <div className="event__header justify-center items-center flex pt-[30px] pb-[30px] w-[100vw] md:pl-[10%] md:pr-[10%] flex-col content-center">
          <div className="event__header-container w-[100vw] justify-center items-center content-between gap-0 flex flex-col-reverse md:flex-row max-w-[1000px]">
            <div className="flex gap-[10px] w-[100vw] h-max flex-wrap md:flex-nowrap pl-[20px] pr-[20px] md:pr-[0px] md:justify-start justify-center items-center pt-[0px]">
              {categories?.map((category) => {
                return (
                  <div className="flex w-max h-[46px]" key={category.id}>
                    <Link href={`/categories/${category.id}`}>
                      <Category Categories={category.name} />
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="flex w-[100%] md:justify-end justify-center items-center">
              <div className="flex xl:max-w-[410px] md:max-w-[400px] max-w-[410px] h-max">
                <div className="flex w-[100vw] pl-[20px] pr-[10px] pb-[10px] md:pb-[0px]">
                  <InputSearch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="event__details flex-col justify-center items-center flex md:pb-[100px] pb-[94px]">
        <div className="mt-[58px] md:mt-[100px] md:max-h-[381px] max-w-[960px] lg:max-w-[1000px] w-[100vw] details  pl-[20px] pr-[20px] lg:pr-[0px] sm:grid sm:col-span-5 gap-[22px] h500-normal-16px">
          <div className="flex flex-col w-[100vw] pr-[40px] sm:pr-[0px] min-w-[100px] md:max-w-[390px] sm:max-w-[380px] min-h-[240px] sm:min-h-[288px] details-info sm:col-start-1 sm:col-end-2 lg:max-h-[200px] sm:row-start-1 sm:row-end-3">
            <p className="pb-[6px] pl-0 text-black">
              {publication?.publication_type.name} / {publication?.tags[0].name}
            </p>
            <h2 className="h900-normal--48px pb-[30px] text-black sm:h-[100vh] sm:max-h-[116px] hover:overflow-auto overflow-x-hidden content__description">
              {publication?.title}
            </h2>
            <div className="content__description pt-0 pb-[10px] h400-medium-15px text-[#6E6A6C] mb-[30px] lg:mb-[0px] lg:pr-[10px] sm:h-[100vh] sm:max-h-[90px] hover:overflow-auto overflow-x-hidden text-justify">
              <p>{publication?.description}</p>
            </div>
            <div className="flex-col mt-[0px] lg:mt-[0px] bottom-0">
              <div className="content__page h500-medium-14px text-[#1B4DB1] pt-[10px] w-[100vw] h-[100vh] max-w-[390px] max-h-[27px] overflow-hidden">
                <a href="">{publication?.content}</a>
              </div>
              <div className="content__votes pt-[30px] flex justify-left items-end gap-1 h-4">
                <div className="votes__icon">
                  <PersonIcon></PersonIcon>
                </div>
                <div className="votes__quantity text-[#1A1E2E] h500-medium-14px">
                  <p>{publication?.votes_count}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="header__image__container pt-[25px] sm:pt-[0px] flex justify-center sm:row-start-1 sm:row-end-4 lg:pr-[12px]">
            <div className="HeaderImg h-[100%] w-[100%] sm:w-[100vw] flex min-h-[252px] bg-cover max-h-[300px] min-w-[300px] sm:max-w-[539px] sm:max-h-[381px] lg:max-h-[381px] sm:col-start-2 sm:col-end-5 bg-[url('/images/artistsHeader.png')]"></div>
          </div>
          <div className="vote__button flex justify-end pt-[30px] sm:pt-[0px] md:pt-[0px] w-[100vw] sm:max-w-[390px] pr-[40px] sm:pr-[0px]">
            <button
              onClick={clickVote}
              className={
                vote
                  ? 'hidden'
                  : 'bg-[#1B4DB1] h-[46px] w-[100%] rounded-full text-[#fff] l600-normal-16px'
              }
            >
              Votar
            </button>
            <button
              onClick={clickCancelVote}
              className={
                vote
                  ? 'bg-primary-grayDark h-[46px] w-[100%] rounded-full text-[#fff] l600-normal-16px'
                  : 'hidden'
              }
            >
              Anular voto
            </button>
          </div>
        </div>
        <div className="mt-[80px] sm:mt-[70px] flex p-[10px] w-[100vw] flex-col justify-center bg-primary-grayLighter max-w-[970px] h-max">
          <Suggestions />
        </div>

        <div className=" flex flex-col justify-center items-center w-[100vw] pl-[21px]">
          <div className="flex flex-col pt-[77px] pb-[10px] ml-[20px] max-w-[1010px] w-[100%]">
            <h1 className="h500-normal-24px text-primary-blackLight">
              Recientes
            </h1>
            <h3 className="h400-normal-16px text-primary-grayDark">
              Las personas últimamente están hablando de esto
            </h3>
          </div>
          <div className="flex justify-start w-[100vw] items-center lg:justify-center pb-[40px] pr-[10px] pl-[10px]">
            <SliderNew />
          </div>
        </div>
      </div>
    </div>
  );
}

EventId.getLayout = function (page: ReactElement) {
  return (
    <Layout
      title="Details | Para Cuando?"
      description="Details of publications"
    >
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};
