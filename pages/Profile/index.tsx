import React, { ReactElement } from 'react'
import Layout from '../../components/Layout'
import NestedLayout from '../../components/NestedLayout'


export default function profilePage(){
  return (
    <p>hello world from Profile</p>
  )  
}

profilePage.getLayout = function (page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}