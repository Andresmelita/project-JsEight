interface Props extends React.ComponentPropsWithoutRef<'button'> {
  functionality: string;
}

const BlueButton: React.FC<Props> = ({ functionality, ...buttonProps }) => {
  return (
    <button
      {...buttonProps}
      className="flex text-[#fff] relative p-1 rounded-full w-[138px] h-[45px] bg-primary-blue h500-normal-16px justify-center items-center transition-all duration-300 hover:scale-105"
    >
      {functionality}
    </button>
  );
};

export default BlueButton;
