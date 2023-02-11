import { BsHeart } from 'react-icons/bs';

const LikeTwo = () => {
  return (
    <button className="flex transition-all duration-300 hover:scale-105">
      <div className="flex border-[#ffffff] border-[2px] rounded-full bg-[#D9D9D9] w-[49px] h-[49px] items-center justify-center">
        <BsHeart className="iconHeart text-[#ffffff] text-[28px] mt-[5px]" />
      </div>
    </button>
  );
};

export default LikeTwo;
