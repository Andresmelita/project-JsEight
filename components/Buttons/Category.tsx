const Category = ({ Categories }: { Categories: string }) => {
  return (
    <button className="flex whitespace-pre text-primary-gray h500-normal-13px border-[1px]  border-primary-gray pr-[17px] pl-[17px] pt-[13px] pb-[13px] rounded-[23px] w-[100%] h-[100%] bg-[#fff] justify-center items-center hover:text-primary-grayDark transition-all duration-300 hover:scale-105">
      {Categories}
    </button>
  );
};

export default Category;
