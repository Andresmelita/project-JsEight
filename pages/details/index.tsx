import React, { ReactElement } from 'react'
import Layout from '../../components/Layout'
import NestedLayout from '../../components/NestedLayout'


export default function detailsPage(){
  return (
    <p>hello world from Details</p>
  )  
}

detailsPage.getLayout = function (page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}


