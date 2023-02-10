const Category = ({ Categories }: { Categories: string }) => {
  return (
    <button className="flex whitespace-pre text-primary-gray h500-normal-13px border-[1px]  border-primary-gray p-[13px] pt-[0px] pb-[0px] rounded-[23px] w-[100%] h-[100%] bg-[#fff] justify-center items-center hover:text-primary-grayDark transition-all duration-300 hover:scale-105">
      {Categories}
    </button>
  );
};

export default Category;
