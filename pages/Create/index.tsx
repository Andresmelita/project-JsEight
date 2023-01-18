import React, { ReactElement } from 'react'
import Layout from '../../components/Layout'
import NestedLayout from '../../components/NestedLayout'


export default function createPage(){
  return (
    <p>hello world from Create</p>
  )  
}

createPage.getLayout = function (page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}