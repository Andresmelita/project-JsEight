import { useEffect, useState } from 'react';
import Cathegory from '../../components/Buttons/Cathegory';
import Like from '../../components/Buttons/Like';
import NextTwo from '../../components/Buttons/NextTwo';
import RightButton from '../../components/Buttons/RightButton';
import EventCard from '../../components/Cards/EventCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import InputSearch from '../../components/InputSearch';
import PersonIcon from '../../components/PersonIcon';
import Slider from '../../components/Slider';
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
        <h1 className="h500-normal-24px p-[40px] ml-[100px]">Buttons:</h1>
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
        <h1 className="h500-normal-24px p-[40px] ml-[100px]">Event Card:</h1>
        <div className="flex justify-center items-center">
          <EventCard />
        </div>
      </div>
      <div>
        <h1 className="h500-normal-24px p-[40px] ml-[100px]">Slider:</h1>
        <div className="flex justify-center items-center">
          <Slider />
        </div>
      </div>
      <div>
        <h1 className="h500-normal-24px p-[40px] ml-[100px]">Searcher:</h1>
        <div className="flex justify-center items-center p-[20px]">
          <div className="w-[500px] bg-slate-400 flex justify-center rounded-[10px]">
            <InputSearch />
          </div>
        </div>
      </div>
      <div>
        <h1 className="h500-normal-24px p-[40px] ml-[100px]">Home Page:</h1>
        <div className="flex justify-center items-center">
          <Home />
        </div>
      </div>
      <div>
        <h1 className="h500-normal-24px p-[40px] ml-[100px]">Login Page:</h1>
        <div className="flex justify-center items-center">
          <Login />
        </div>
      </div>
      <div>
        <h1 className="h500-normal-24px p-[40px] ml-[100px]">SignUp Page:</h1>
        <div className="flex justify-center items-center">
          <SignUp />
        </div>
      </div>
      <div>
        <h1 className="h500-normal-24px p-[40px] ml-[100px]">Create Event:</h1>
        <div className="flex justify-center items-center">
          <CreateEvent />
        </div>
      </div>
      <div>
        <h1 className="h500-normal-24px p-[40px] ml-[100px]">Profile Page:</h1>
        <div className="flex justify-center items-center">
          <ProfilePage />
        </div>
      </div>
      <div>
        <h1 className="h500-normal-24px p-[40px] ml-[100px]">Footer:</h1>
        <div className="flex justify-center items-center">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AllComponents;
