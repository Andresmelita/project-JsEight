import { BsHeart } from 'react-icons/bs';
const Like = () => {
  return (
    <button className="flex transition-all duration-300 hover:scale-105">
      <div className="flex border-[#ffffff] border-[2px] rounded-full bg-[#FF64BC] w-[49px] h-[49px] items-center justify-center">
        <BsHeart className="iconHeart text-[#ffffff] text-[28px] mt-[5px]" />
      </div>
    </button>
  );
};

export default Like;
