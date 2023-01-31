import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

// import required modules
import { Navigation } from 'swiper';
import LeftButton from './Buttons/LeftButton';
import RightButton from './Buttons/RightButton';
import EventCard from './Cards/EventCard';
import EventCardFive from './Cards/EventCardFive';
import EventCardFour from './Cards/EventCardFour';
import EventCardThree from './Cards/EventCardThree';
import EventCardTwo from './Cards/EventCardTwo';

export default function SliderNew() {
  const componentArray = [
    <EventCard key={0} />,
    <EventCardTwo key={1} />,
    <EventCardThree key={2} />,
    <EventCardFour key={3} />,
    <EventCardFive key={4} />,
  ];

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const [clickAppear, setClickAppear] = useState(false);
  const handleClickAppear = () => {
    setClickAppear(true);
  };

  return (
    <div className=" flex lg:w-[1160px] lg:ml-[-20px] ml-[0px] w-[990px] h-max justify-start relative mt-[20px]">
      <div
        ref={prevRef}
        className={
          clickAppear
            ? 'lg:flex hidden button-prev pr-[20px] mt-[236px] appear-effect appear'
            : 'appear-effect lg:flex hidden button-prev pr-[20px] mt-[236px]'
        }
      >
        <LeftButton />
      </div>
      <Swiper
        navigation={{
          prevEl: '.button-prev',
          nextEl: '.button-next',
        }}
        slidesPerView={3}
        hashNavigation={true}
        loop={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper swiper flex flex-row"
      >
        {componentArray.map((card, index) => {
          return (
            <SwiperSlide className="swiper-slide" key={index}>
              <EventCard />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div
        ref={nextRef}
        onClick={handleClickAppear}
        className="lg:flex hidden button-next pl-[20px] mt-[236px]"
      >
        <RightButton />
      </div>
    </div>
  );
}
