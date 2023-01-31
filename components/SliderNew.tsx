import { useEffect, useRef, useState } from 'react';
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
  const [info, setInfo] = useState([{}]);

  useEffect(() => {
    Information();
  }, []);

  const Information = () => {
    setInfo([
      {
        cover: 'https://images2.imgbox.com/59/e9/XjEAZTU9_o.png',
        title: 'Concierto de Lady Gaga',
        description: 'El concierto con la temática de Lady Gaga en Las Vegas',
        link: 'ladygaga.com',
        votes: "90'800'756",
        like: true,
      },
      {
        cover: 'https://images2.imgbox.com/49/62/pszCAGzR_o.png',
        title: 'Concierto de BTS',
        description: 'Grupo musical coreano.',
        link: 'bts.com',
        votes: "89'100'756",
        like: true,
      },
      {
        cover: 'https://images2.imgbox.com/2c/d7/nfqWmOvu_o.png',
        title: 'Tienda de ropa femenina ZARA',
        description: 'Tienda de ropa.',
        link: 'zara.com',
        votes: "99'100'756",
        like: true,
      },
      {
        cover: 'https://thumbs2.imgbox.com/47/47/dvCfyApV_t.png',
        title: 'Hotel Selina',
        description:
          'Hotel que te permite hospedarte, trabajar, comer y vivir experiencias auténticas en todo el mundo.',
        link: 'selina.com',
        votes: "88'100'756",
        like: true,
      },
      {
        cover: 'https://images2.imgbox.com/75/7e/oqt5nojY_o.png',
        title: 'Marca Ecoalf',
        description:
          'Marca española de prendas y accesorios, elaborando como materia prima, diversos tipos de desechos que se arrojan al mar..',
        link: 'ecoalf.com',
        votes: "70'100'756",
        like: true,
      },
    ]);
  };

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
        <SwiperSlide>
          <EventCard />
        </SwiperSlide>
        <SwiperSlide>
          <EventCardTwo />
        </SwiperSlide>
        <SwiperSlide>
          <EventCardThree />
        </SwiperSlide>
        <SwiperSlide>
          <EventCardFour />
        </SwiperSlide>
        <SwiperSlide>
          <EventCardFive />
        </SwiperSlide>
        {/* {componentArray.map((card, index) => {
          return (
            <SwiperSlide className="swiper-slide" key={index}>
              <EventCardGeneral Information={info[index]} />
            </SwiperSlide>
          );
        })} */}
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
