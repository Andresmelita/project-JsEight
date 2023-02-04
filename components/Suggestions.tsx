import { useEffect, useState } from 'react';
import Cathegory from './buttons/Cathegory';

const Suggestions = () => {
  const [data, setData] = useState(['']);

  useEffect(() => {
    Cathegories();
  }, []);

  const Cathegories = () => {
    setData(['Restaurantes', 'Tiendas de Ropa', 'Rock', 'Marcas y tiendas']);
  };
  return (
    <div className="w-[100vw] flex flex-col sm:pl-[60px] pl-[20px] gap-2 pt-[27px] pb-[27px] pr-[20px] relative max-w-[1010px]">
      <h1 className="h500-normal-24px text-primary-grayDark flex-wrap flex w-[94%]">
        ¡Hagámoslo más personal!
      </h1>
      <h3 className="h400-normal-16px text-primary-grayDark w-[94%] flex flex-wrap">
        Selecciona tus intereses para brindarte sugerencias de acuerdo a tus
        gustos
      </h3>
      <div className="flex gap-[13px] justify-start flex-wrap w-[94%] mt-[20px] mb-[20px]">
        <div className="flex w-max h-[45px]">
          <Cathegory Cathegories={data[0]} />
        </div>
        <div className="flex w-max h-[45px]">
          <Cathegory Cathegories={data[1]} />
        </div>
        <div className="flex w-max h-[45px]">
          <Cathegory Cathegories={data[2]} />
        </div>
        <div className="flex w-max h-[45px]">
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
