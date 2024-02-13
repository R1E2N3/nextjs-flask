"use client";

import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const NavBar = () => {
  

    const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>Autinosis</p>
      </Link>

      <div className='sm:flex hidden'>
        <div className='flex gap-3 md:gap-5'>
            <Link href='/test' className='black_btn'>
                Take a test
            </Link>

            <Link href='/contact' className='black_btn'>
                Contact us
            </Link>
        </div>
        </div>

        {/* Mobile Navigation */}
        <div className='sm:hidden flex relative'>
            <div className='flex'>
            <Image
              src='/assets/images/logo.svg'
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />
                    {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                href='/'
                >
                </Link>
                <Link
                  href='/test'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Take a test
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
            </div>
        </div>


        {/* <LoginButton /> */}
    </nav>
  )
}

export default NavBar