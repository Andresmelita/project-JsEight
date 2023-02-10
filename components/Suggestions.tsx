import Link from 'next/link';
import { useTags } from '../lib/services/tag.services';
import Category from './Buttons/Category';

const Suggestions = () => {
  const { data: tags } = useTags();

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
        {tags?.map((tag) => {
          return (
            <div className="flex w-max h-[45px]" key={tag.id}>
              <Category Categories={tag.name} />
            </div>
          );
        })}
      </div>
      <Link href="/profile">
        <h3 className="h400-normal-16px text-primary-blue cursor-pointer hover:underline hover:decoration-1">
          Ver todos los intereses
        </h3>
      </Link>
    </div>
  );
};

export default Suggestions;
