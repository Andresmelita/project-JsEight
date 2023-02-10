import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  title: string;
  description: string;
  // any props that come into the component
}

export default function Layout({ children, title, description }: Props) {
  return (
    <div className="Application container-layout">
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      {children}
    </div>
  );
}

Layout.defaultProps = {
  title: 'Para Cuando?',
  description: 'Descripción del sitio',
};
