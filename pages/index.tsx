import type { ReactElement } from 'react';
import Layout from '../components/layout/Layout';
import NestedLayout from '../components/NestedLayout';
import Home from './home';
import type { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
  return <Home />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Home | Para Cuando?" description="Home">
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default Page;
