import InputSearch from './InputSearch';

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 flex flex-col items-center justify-center bg-center bg-cover min-h-[488px] max-h-[488px] w-[100vw] bg-[url('/images/footerImage.png')] relative">
      <div className="w-[100%] flex justify-center items-center absolute p-[26px]">
        <InputSearch />
      </div>
    </footer>
  );
};

export default Footer;
