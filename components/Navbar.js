"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Navbar = () => {
  const pathName = usePathname();
  if (pathName == '/')
    return (
      <nav className='w-[90vw] fixed bg-white pl-10 pr-4 py-2 ml-[5vw] mt-14 rounded-full flex justify-between items-center'>
        <div className='flex gap-16'>
          <div className="logo">
            <Link href="/"><img src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" alt="logo" className='w-30' /></Link>
          </div>
          <ul className='flex gap-8'>
            <li className='hover:font-bold'><Link href="/">Products</Link></li>
            <li className='hover:font-bold'><Link href="/">Templates</Link></li>
            <li className='hover:font-bold'><Link href="/">Marketplace</Link></li>
            <li className='hover:font-bold'><Link href="/">Learn</Link></li>
            <li className='hover:font-bold'><Link href="/">Pricing</Link></li>
          </ul>
        </div>
        <div className="buttons font-bold flex gap-2">
          <Link href="/"><button className='bg-gray-100 px-6 py-5 rounded-lg hover:bg-black hover:text-white cursor-pointer'>Login</button></Link>
          <Link href="/"><button className='bg-slate-800 text-white px-6 rounded-full py-5 hover:bg-black cursor-pointer'>Sign up free</button></Link>
        </div>
      </nav>
    )
}

export default Navbar
