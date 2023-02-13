import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

// import required modules
import { Navigation } from 'swiper';
import { usePublications } from '../lib/services/publication.services';
import LeftButton from './Buttons/LeftButton';
import RightButton from './Buttons/RightButton';
import EventCardGeneral from './Cards/EventCardGeneral';

export default function SliderNew() {
  const { data: publications } = usePublications();
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const [clickAppear, setClickAppear] = useState(false);
  const handleClickAppear = () => {
    setClickAppear(true);
  };

  return (
    <div className="flex lg:w-[1160px] lg:ml-[-20px] ml-[0px] w-[990px] h-max justify-start relative mt-[20px]">
      <div
        ref={prevRef}
        className={
          clickAppear
            ? 'lg:flex hidden button-prev pr-[20px] mt-[236px] appear-effect appear'
            : 'appear-effect lg:flex hidden pr-[20px] mt-[236px]'
        }
      >
        <LeftButton />
      </div>
      <Swiper
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        style={{ position: 'unset' }}
        slidesPerView={3}
        hashNavigation={true}
        loop={false}
        spaceBetween={2}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper swiper flex flex-row"
      >
        <div>
          {publications?.map((event) => {
            return (
              <SwiperSlide className="swiper-slide" key={event.id}>
                <EventCardGeneral
                  id={event.id}
                  title={event.title}
                  description={event.description}
                  link={event.content}
                  votes={event.votes_count}
                />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
      <div
        ref={nextRef}
        onClick={handleClickAppear}
        className="lg:flex hidden pl-[20px] mt-[236px]"
      >
        <RightButton />
      </div>
    </div>
  );
}
