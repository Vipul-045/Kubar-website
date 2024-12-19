"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import lender from "../../assets/images/lender.png"
import borrower from "../../assets/images/borrower.png"
import logo from '../../assets/icons/kubarlogo.png'
import Image from 'next/image';
import { Label } from '@/components/ui/label';
import { signIn, signOut , useSession } from 'next-auth/react';
import { Appbar } from '@/components/ui/Loginbutton';

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const session = useSession();


  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 max-w-7xl">
        <div className="text-lg font-bold">
          <Link href="/" className='flex justify-center items-center gap-2'>
            <Image src={logo} alt='logo' />
            <p className="text-gray-900 cursor-pointer">Kubar Protocol</p>
          </Link>
        </div>
        <div className="hidden md:flex space-x-8 justify-center items-center">
          <Link href="/about-us">
            <p className="text-gray-600 hover:text-gray-900 cursor-pointer">About Us</p>
          </Link>
          {/* <Link href="/blog">
            <p className="text-gray-600 hover:text-gray-900 cursor-pointer">Blog</p>
          </Link>
          <Link href="/contact">
            <p className="text-gray-600 hover:text-gray-900 cursor-pointer">Contact</p>
          </Link> */}
          <Dialog>
            <div>
               <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user}/>
              </div>
            <DialogContent className="sm:max-w-2xl">
              <div className="grid grid-cols-2 gap-4 py-4">
                <Link href="/lender">
                  <div className="bg-slate-200 cursor-pointer p-8 rounded-sm">
                    <div className="flex flex-col items-center gap-4">
                      <Image src={lender}
                        alt="Lender"
                      />
                      <div className="flex gap-2 justify-center items-center">
                        <Label>Continue as Lender</Label>
                        <ArrowRight />
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="/borrower">
                  <div className="bg-slate-200 cursor-pointer p-8 rounded-sm">
                    <div className="flex flex-col items-center gap-4">
                      <Image src={borrower} alt="Borrower" />
                      <div className="flex gap-2 justify-center items-center">
                        <Label>Continue as Borrower</Label>
                        <ArrowRight />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </DialogContent>
          </Dialog>
          <Link href="/demo">
          </Link>
        </div>
        <div className="md:hidden">
          <p onClick={toggleSidebar} aria-label="Toggle Menu">
            <Menu className="h-6 w-6 text-gray-900" />
          </p>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 md:hidden"
      >
        <div className="flex justify-between items-center p-6">
          <div className="text-lg font-bold">

          </div>
          <p onClick={toggleSidebar} aria-label="Close Menu">
            <X className="h-6 w-6 text-gray-900" />
          </p>
        </div>
        <nav className="flex flex-col p-6 space-y-6">
          <Link href="/about-us">
            <p onClick={toggleSidebar} className="text-gray-600 hover:text-gray-900 cursor-pointer">
              About Us
            </p>
          </Link>
          {/* <Link href="/blog">
            <p onClick={toggleSidebar} className="text-gray-600 hover:text-gray-900 cursor-pointer">
              Blog
            </p>
          </Link>
          <Link href="/contact">
            <p onClick={toggleSidebar} className="text-gray-600 hover:text-gray-900 cursor-pointer">
              Contact
            </p>
          </Link> */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="">
                Demo
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl">
              <div className="grid grid-cols-2 gap-4 py-4">
                <Link href="/lender">
                  <div className="bg-slate-200 cursor-pointer p-8 rounded-sm">
                    <div className="flex flex-col items-center gap-4">
                      <Image src={lender}
                        alt="Lender"
                      />
                      <div className="flex gap-2 justify-center items-center">
                        <Label>Continue as Lender</Label>
                        <ArrowRight />
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="/borrower">
                  <div className="bg-slate-200 cursor-pointer p-8 rounded-sm">
                    <div className="flex flex-col items-center gap-4">
                      <Image src={borrower} alt="Borrower" />
                      <div className="flex gap-2 justify-center items-center">
                        <Label>Continue as Borrower</Label>
                        <ArrowRight />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </DialogContent>
          </Dialog>
        </nav>
      </motion.div>
    </nav>
  );
};

export default Navbar;
