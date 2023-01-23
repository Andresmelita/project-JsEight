import type { ReactElement } from 'react';
import Layout from '../components/Layout';
import NestedLayout from '../components/NestedLayout';
import Home from './Home';
import type { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
  return <Home />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default Page;
