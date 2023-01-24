import { useEffect, useState } from 'react';
import Cathegory from './Buttons/Cathegory';

const Suggestions = () => {
  const [data, setData] = useState(['']);

  useEffect(() => {
    Cathegories();
  }, []);

  const Cathegories = () => {
    setData(['Restaurantes', 'Tiendas de Ropa', 'Rock', 'Marcas y tiendas']);
  };
  return (
    <div className="flex flex-col pt-[27px] pb-[35px] sm:pl-[60px] pl-[20px] gap-2">
      <h1 className="h500-normal-24px text-primary-grayDark">
        ¡Hagámoslo más personal!
      </h1>
      <h3 className="h400-normal-16px text-primary-grayDark">
        Selecciona tus intereses para brindarte sugerencias de acuerdo a tus
        gustos
      </h3>
      <div className="flex gap-[13px] w-max h-[45px] mt-[20px] mb-[20px]">
        <div className="flex w-[100%]">
          <Cathegory Cathegories={data[0]} />
        </div>
        <div className="flex w-[100%]">
          <Cathegory Cathegories={data[1]} />
        </div>
        <div className="flex w-[100%]">
          <Cathegory Cathegories={data[2]} />
        </div>
        <div className="flex w-[100%]">
          <Cathegory Cathegories={data[3]} />
        </div>
      </div>
      <h3 className="h400-normal-16px text-primary-blue cursor-pointer">
        Ver todos los intereses
      </h3>
    </div>
  );
};

export default Suggestions;
