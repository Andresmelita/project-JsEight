import React from 'react'
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode
  // any props that come into the component
}

const NestedLayout = ({ children, ...props }: Props) => {

  return (
    <div>
      {children}
    </div>
  )
}

export default NestedLayout