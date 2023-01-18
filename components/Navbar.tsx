import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <div className='h-[200px] justify-center items-center'>
          <Link href='/'>Home </Link> 
          <Link href='/Details/[event_id]'>Details </Link> 
          <Link href='/Brands'>Brands </Link> 
          <Link href='/Artists'>Artists </Link> 
          <Link href='/Tournaments'>Tournaments </Link> 
          <Link href='/Profile'>Profile </Link> 
          <Link href='/Create'>Create </Link> 
        </div>
    </nav>
  )
}

export default Navbar