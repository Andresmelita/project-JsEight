import { useEffect, useState } from 'react';
import Cathegory from '../../components/buttons/Cathegory';
import Like from '../../components/buttons/Like';
import NextTwo from '../../components/buttons/NextTwo';
import RightButton from '../../components/buttons/RightButton';
import EventCardGeneral from '../../components/Cards/EventCardGeneral';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import InputSearch from '../../components/InputSearch';
import PersonIcon from '../../components/PersonIcon';
import SliderNew from '../../components/SliderNew';
import { eventos } from '../../lib/data/eventos.mock';
import CreateEvent from '../create';
import Home from '../home';
import Login from '../login';
import ProfilePage from '../profile';
import SignUp from '../sign-up';

const AllComponents = () => {
  const [data, setData] = useState(['']);

  useEffect(() => {
    Cathegories();
  }, []);

  const Cathegories = () => {
    setData(['Marcas y Tiendas']);
  };

  return (
    <div>
      <Header />
      <div>
        <h1 className="h500-normal-24px text-black p-[40px] ml-[100px]">
          Buttons:
        </h1>
        <div className="flex justify-center items-center gap-3">
          <RightButton />
          <NextTwo />
          <div className="flex gap-[13px] w-max h-[45px] mb-[82px] mt-[82px]">
            <Cathegory Cathegories={data[0]} />
          </div>
          <Like />
          <PersonIcon />
        </div>
      </div>
      <div>
        <h1 className="h500-normal-24px p-[40px] ml-[100px] text-black">
          Event Card:
        </h1>
        <div className="flex justify-center items-center">
          {eventos.slice(1, 2).map((card, index) => {
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
      <div>
        <h1 className="h500-normal-24px p-[40px] ml-[100px] text-black">
          Slider:
        </h1>
        <div className="flex justify-start md:justify-center items-center">
          <SliderNew />
        </div>
      </div>
      <div>
        <h1 className="h500-normal-24px p-[40px] ml-[100px] text-black">
          Searcher:
        </h1>
        <div className="flex justify-center items-center p-[20px]">
          <div className="w-[500px] flex justify-center rounded-[10px]">
            <InputSearch />
          </div>
        </div>
      </div>
      <div>
        <h1 className="h500-normal-24px p-[40px] ml-[100px] text-black">
          Home Page:
        </h1>
        <div className="flex justify-center items-center">
          <Home />
        </div>
      </div>
      <div>
        <h1 className="h500-normal-24px p-[40px] ml-[100px] text-black">
          Login Page:
        </h1>
        <div className="flex justify-center items-center">
          <Login />
        </div>
      </div>
      <div>
        <h1 className="h500-normal-24px p-[40px] ml-[100px] text-black">
          SignUp Page:
        </h1>
        <div className="flex justify-center items-center">
          <SignUp />
        </div>
      </div>
      <div>
        <h1 className="h500-normal-24px p-[40px] ml-[100px] text-black">
          Create Event:
        </h1>
        <div className="flex justify-center items-center">
          <CreateEvent />
        </div>
      </div>
      <div>
        <h1 className="h500-normal-24px p-[40px] ml-[100px] text-black">
          Profile Page:
        </h1>
        <div className="flex justify-center items-center">
          <ProfilePage />
        </div>
      </div>
      <div>
        <h1 className="h500-normal-24px p-[40px] ml-[100px] text-black">
          Footer:
        </h1>
        <div className="flex justify-center items-center">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AllComponents;
