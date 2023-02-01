import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export default function Layout({ children, ...props }: Props) {
  return (
    <div className="Application">
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
