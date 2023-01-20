import '../../styles/Home.module.css';
import Like from '../Buttons/Like';
import PersonIcon from '../PersonIcon';

const EventCardTwo = () => {
  return (
    <div className="EventCard w-80 rounded-3xl m-3 relative z-10 shadow-card-box">
      <div className="Like absolute bottom-52 right-7 ">
        <Like></Like>
      </div>
      <div className="HeaderImg bg-[url('https://images2.imgbox.com/49/62/pszCAGzR_o.png')] bg-cover bg-center h-60 z-0 rounded-t-3xl "></div>
      <div className="BodyContent m-8 mt-4 h-52 flex flex-col gap-4">
        <div className="content__event h-26 flex flex-col gap-2">
          <div className="content__tittle h600-medium--20px text-[#1A1E2E]">
            <h3>Concierto de BTS</h3>
          </div>
          <div className="content__description h400-medium-15px text-[#6E6A6C]">
            <p>Grupo musical coreano.</p>
          </div>
        </div>
        <div className="content__page h500-medium-14px text-[#1B4DB1]">
          <a href="">bts.com</a>
        </div>
        <div className="content__votes flex justify-left items-center gap-1 h-4">
          <div className="votes__icon">
            <PersonIcon></PersonIcon>
          </div>
          <div className="votes__quantity text-[#1A1E2E] h500-medium-14px">
            <p>90’800’756 votos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCardTwo;
