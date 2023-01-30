import { useEffect, useState } from 'react';
import CathegoryGeneral from './Buttons/CathegoryGeneral';

const Suggestions = () => {
  const [data, setData] = useState(['']);

  useEffect(() => {
    Cathegories();
  }, []);

  const Cathegories = () => {
    setData(['Restaurantes', 'Tiendas de Ropa', 'Rock', 'Marcas y tiendas']);
  };
  return (
    <div className="w-max flex flex-col sm:pl-[60px] pl-[20px] gap-2 pt-[27px] pb-[27px]">
      <h1 className="h500-normal-24px text-primary-grayDark">
        ¡Hagámoslo más personal!
      </h1>
      <h3 className="h400-normal-16px text-primary-grayDark">
        Selecciona tus intereses para brindarte sugerencias de acuerdo a tus
        gustos
      </h3>
      <div className="flex gap-[13px] justify-start pr-[20px] max-w-[900px] flex-wrap w-[100vw] h-max mt-[20px] mb-[20px]">
        <div className="flex w-max h-[45px]">
          <CathegoryGeneral Cathegories={data[0]} />
        </div>
        <div className="flex w-max h-[45px]">
          <CathegoryGeneral Cathegories={data[1]} />
        </div>
        <div className="flex w-max h-[45px]">
          <CathegoryGeneral Cathegories={data[2]} />
        </div>
        <div className="flex w-max h-[45px]">
          <CathegoryGeneral Cathegories={data[3]} />
        </div>
      </div>
      <h3 className="h400-normal-16px text-primary-blue cursor-pointer">
        Ver todos los intereses
      </h3>
    </div>
  );
};

export default Suggestions;
