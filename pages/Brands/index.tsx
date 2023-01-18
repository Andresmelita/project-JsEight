import React, { ReactElement } from 'react'
import Layout from '../../components/Layout'
import NestedLayout from '../../components/NestedLayout'


export default function brandsPage(){
  return (
    <p>hello world from Brands</p>
  )  
}

brandsPage.getLayout = function (page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}