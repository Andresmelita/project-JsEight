const Cathegory = ({ Cathegories }: { Cathegories: string }) => {
  return (
    <button className="flex whitespace-pre text-primary-gray h500-normal-13px border-[1px] border-primary-gray p-4 pt-2 pb-2 rounded-[23px] w-fit h-[100%] bg-[#fff] justify-center items-center hover:text-primary-grayDark transition-all duration-300 hover:scale-105">
      {Cathegories}
    </button>
  );
};

export default Cathegory;
