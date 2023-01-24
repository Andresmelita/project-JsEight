import { kMaxLength } from 'buffer';
import Image from 'next/image';
import { ReactElement, useEffect, useState } from 'react';
import Cathegory from '../../components/Buttons/Cathegory';
import Layout from '../../components/Layout';
import NestedLayout from '../../components/NestedLayout';

export default function ProfilePage() {
  const [data, setData] = useState(['']);

  useEffect(() => {
    Cathegories();
  }, []);

  const Cathegories = () => {
    setData(['Mis votos', 'Mis publicaciones']);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex bg-primary-blue h-[129px] justify-center items-end w-[100vw]">
        <div className="max-h-[117px] max-w-[117px] bg-transparent mb-[-60px] z-50">
          <Image
            src="/images/profileImage.png"
            alt=""
            width={kMaxLength}
            height={kMaxLength}
            className="flex rounded-full"
          />
        </div>
      </div>
      <div className="flex gap-[13px] w-max h-[45px] mb-[82px] mt-[82px]">
        <div className="flex w-[100%]">
          <Cathegory Cathegories={data[0]} />
        </div>
        <div className="flex w-[100%]">
          <Cathegory Cathegories={data[1]} />
        </div>
      </div>
    </div>
  );
}

ProfilePage.getLayout = function (page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};
