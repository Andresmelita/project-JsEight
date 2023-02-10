import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const NestedLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default NestedLayout;
