import type { ReactElement } from 'react'
import EventCard from '../components/EventCard'
import Layout from '../components/Layout'
import NestedLayout from '../components/NestedLayout'
import type { NextPageWithLayout } from './_app'
import Image from 'next/image';

const Page: NextPageWithLayout = () => {
  return <EventCard></EventCard>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}

export default Page