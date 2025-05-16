'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className='flex bg-transparent text-white justify-between px-4 h-16 items-center'>
      <div className="logo font-bold text-lg">
        GetMeaChai
      </div>
        <ul className='flex justify-between gap-4'>
            <li><Link className={`${pathname === '/'?"font-bold":""}`} href="/">Home</Link></li>
            <li><Link className={`${pathname === '/about'?"font-bold":""}`} href="/about">About</Link></li>
            <li><Link className={`${pathname === '/projects'?"font-bold":""}`} href="/projects">Projects</Link></li>
            <li><Link className={`${pathname === '/contact'?"font-bold":""}`} href="/contact">Contact</Link></li>
            <li><Link className={`${pathname === '/blog'?"font-bold":""}`} href="/blog">Blog</Link></li>
            <li><Link className={`${pathname === '/login'?"font-bold":""}`} href="/login">Login</Link></li>
            <li><Link className={`${pathname === '/signup'?"font-bold":""}`} href="/signup">Sign Up</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
