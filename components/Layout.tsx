import Navbar from './Navbar'
import Footer from './Footer'
import { ReactNode } from 'react';
import Header from './Header';

interface Props {
  children?: ReactNode
  // any props that come into the component
}

export default function Layout({ children, ...props }: Props) {  
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}

