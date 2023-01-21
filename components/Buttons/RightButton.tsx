import { RiArrowRightLine } from 'react-icons/ri';

const RightButton = () => {
  return (
    <button className="flex bg-[#fff0] w-[59px] h-[59px] transition-all duration-300 hover:scale-105">
      <div className="flex rounded-full border-primary-blue border-[4px] items-center justify-center w-full h-full">
        <RiArrowRightLine className="text-[45px] text-primary-blue" />
      </div>
    </button>
  );
};

export default RightButton;
