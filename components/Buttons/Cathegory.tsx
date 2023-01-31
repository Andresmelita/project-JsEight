const Cathegory = ({ Cathegories }: { Cathegories: string }) => {
  return (
    <button className="flex whitespace-pre text-primary-gray h500-normal-13px border-[1px]  border-primary-gray p-[16px] md:p-[19px] pt-[14px] pb-[14px] rounded-[23px] w-[100%] h-[100%] max-h-[30px] bg-[#fff] justify-center items-center hover:text-primary-grayDark transition-all duration-300 hover:scale-105">
      {Cathegories}
    </button>
  );
};

export default Cathegory;
