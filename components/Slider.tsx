import { useState } from 'react';
import LeftButton from './Buttons/LeftButton';
import RightButton from './Buttons/RightButton';
import EventCard from './Cards/EventCard';
import EventCardFive from './Cards/EventCardFive';
import EventCardFour from './Cards/EventCardFour';
import EventCardThree from './Cards/EventCardThree';
import EventCardTwo from './Cards/EventCardTwo';

const Slider = () => {
  const componentArray = [
    <EventCard key={0} />,
    <EventCardTwo key={1} />,
    <EventCardThree key={2} />,
    <EventCardFour key={3} />,
    <EventCardFive key={4} />,
  ];
  const quantity = componentArray?.length;
  const [currentCardOne, setCurrentCardOne] = useState(2);
  const [currentCardTwo, setCurrentCardTwo] = useState(1);
  const [currentCardThree, setCurrentCardThree] = useState(0);

  const previousImage = () => {
    setCurrentCardOne(currentCardOne === quantity - 1 ? 0 : currentCardOne + 1);
    setCurrentCardTwo(currentCardTwo === quantity - 1 ? 0 : currentCardTwo + 1);
    setCurrentCardThree(
      currentCardThree === quantity - 1 ? 0 : currentCardThree + 1
    );
  };
  const nextImage = () => {
    setCurrentCardOne(currentCardOne === 0 ? quantity - 1 : currentCardOne - 1);
    setCurrentCardTwo(currentCardTwo === 0 ? quantity - 1 : currentCardTwo - 1);
    setCurrentCardThree(
      currentCardThree === 0 ? quantity - 1 : currentCardThree - 1
    );
    setClickMenu(true);
  };

  const [clickMenu, setClickMenu] = useState(false);

  return (
    <div className="lg:container-slider-lg justify-start container-slider w-[100vw]">
      <div
        onClick={previousImage}
        className={
          clickMenu
            ? 'pt-[38px] appear-efect appear lg:flex hidden'
            : 'pt-[38px] appear-efect lg:flex hidden'
        }
      >
        <LeftButton />
      </div>
      {componentArray.map((card, indexOne) => {
        return (
          <div
            className={currentCardOne === indexOne ? 'slide active' : 'slide'}
            key={indexOne}
          >
            {currentCardOne === indexOne && card}
          </div>
        );
      })}
      {componentArray.map((card, indexTwo) => {
        return (
          <div
            className={currentCardTwo === indexTwo ? 'slide active' : 'slide'}
            key={indexTwo}
          >
            {currentCardTwo === indexTwo && card}
          </div>
        );
      })}
      {componentArray.map((card, indexThree) => {
        return (
          <div
            className={
              currentCardThree === indexThree ? 'slide active' : 'slide'
            }
            key={indexThree}
          >
            {currentCardThree === indexThree && card}
          </div>
        );
      })}
      <div
        onClick={nextImage}
        className="mt-[340px] lg:mt-[38px] z-[100] lg:static absolute w-max lg:right-none right-[20px] bg-white lg:bg-transparent shadow-card lg:shadow-card-none border-[5px] border-white rounded-full"
      >
        <RightButton />
      </div>
    </div>
  );
};

export default Slider;
