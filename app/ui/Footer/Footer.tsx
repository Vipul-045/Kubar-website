import Link from 'next/link'
import React from 'react'
import logo from '../../assets/icons/kubarlogo.png'
import Image from 'next/image'


type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="shadow w-full border-t rounded-md">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <Image src={logo} alt='logo' />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kubar Protocol</span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="about-us" className="hover:underline me-4 md:me-6">About Us</Link>
            </li>
            {/* <li>
              <Link href="Blogs" className="hover:underline me-4 md:me-6">Blog</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </li> */}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link href="/" className="hover:underline">Kubar Protocol</Link>. All Rights Reserved.</span>
      </div>
    </footer>
  )
}

export default Footer