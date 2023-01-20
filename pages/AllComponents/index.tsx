import CathegoryOne from '../../components/Buttons/CathegoryOne';
import Like from '../../components/Buttons/Like';
import NextOne from '../../components/Buttons/NextOne';
import NextTwo from '../../components/Buttons/NextTwo';
import EventCard from '../../components/EventCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import InputSearch from '../../components/InputSearch';
import PersonIcon from '../../components/PersonIcon';
import Login from '../Login';
import SignUp from '../SignUp';

const index = () => {
  return (
    <div>
      <Header />
      <div>
        <h1 className="h500-normal-24px p-[40px] ml-[100px]">Buttons:</h1>
        <div className="flex justify-center items-center gap-3">
          <NextOne />
          <NextTwo />
          <CathegoryOne />
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
        <h1 className="h500-normal-24px p-[40px] ml-[100px]">Searcher:</h1>
        <div className="flex justify-center items-center p-[20px]">
          <div className="w-[500px] bg-slate-400 flex justify-center rounded-[10px]">
            <InputSearch />
          </div>
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
        <h1 className="h500-normal-24px p-[40px] ml-[100px]">Footer:</h1>
        <div className="flex justify-center items-center">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default index;
