import Image from 'next/image'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import axispfp from '../assets/images/axispfp.png'
import account from '../assets/icons/account.svg'
import browseoffering from '../assets/icons/browseoffering.svg'
import faq from '../assets/icons/faq.svg'
import loanmarketplace from '../assets/icons/loanmarketplace.svg'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

type Props = {}

const Lender = (props: Props) => {
  return (
    <main className="flex flex-col justify-center items-center py-10 px-6 gap-8">
      <section className='w-full bg-primary p-4 rounded-md flex justify-between max-w-7xl'>
        <div className='flex gap-4 justify-center items-center'>
          <Image src={axispfp} alt="pfp" />
          <div className='flex flex-col gap-2 text-white'>
            <p>Welcome Back!</p>
            <p className='text-xl font-medium'>Axis Bank</p>
          </div>
        </div>
        <div className='text-white cursor-pointer'>
          Edit
        </div>
      </section>
      <section className='w-full flex max-w-7xl gap-8 justify-between'>
        <div className='basis-1/4'>
          <div className='flex flex-col gap-4'>
            <div className='p-4 border rounded-md flex gap-4 items-center cursor-pointer hover:bg-slate-50 transition-colors duration-100 ease-in'>
              <div className='p-2 bg-[#DEF6EE] rounded-sm'>
                <Image src={browseoffering} alt="browseoffering" />
              </div>
              <p className='font-medium'>Browse Offerings</p>
            </div>
            <Link href='/lender/marketplace'>
              <div className='p-4 border rounded-md flex gap-4 items-center cursor-pointer hover:bg-slate-50 transition-colors duration-100 ease-in'>
                <div className='p-2 bg-[#DEF6EE] rounded-sm'>
                  <Image src={loanmarketplace} alt="loanmarketplace" />
                </div>
                <p className='font-medium'>Loan Marketplace</p>
              </div>
            </Link>
            <div className='p-4 border rounded-md flex gap-4 items-center cursor-pointer hover:bg-slate-50 transition-colors duration-100 ease-in'>
              <div className='p-2 bg-[#DEF6EE] rounded-sm'>
                <Image src={account} alt="account" />
              </div>
              <p className='font-medium'>Account Details</p>
            </div>
            <div className='p-4 border rounded-md flex gap-4 items-center cursor-pointer hover:bg-slate-50 transition-colors duration-100 ease-in'>
              <div className='p-2 bg-[#DEF6EE] rounded-sm'>
                <Image src={faq} alt="faq" />
              </div>
              <p className='font-medium'>FAQs</p>
            </div>
          </div>
          <Link href='/lender/create'>
            <div className='mt-8 p-4 bg-primary flex items-center text-white rounded-md cursor-pointer'>
              <p>
                Click here to start your loan product offering
              </p>
              <ArrowRight height={40} width={40} />
            </div>
          </Link>
        </div>
        <div className='basis-4/5 border rounded-md w-full'>
          <Tabs defaultValue="active" className="w-full">
            <TabsList className='w-full flex justify-between py-6'>
              <TabsTrigger value="active" className='w-full'>Active Loan Offerings</TabsTrigger>
              <TabsTrigger value="due" className='w-full'>Due Loan Offerings</TabsTrigger>
              <TabsTrigger value="past" className='w-full'>Past Loan Offerings</TabsTrigger>
            </TabsList>
            <TabsContent value="active" className='flex justify-center items-center'>Currently there are no active loans associated with your account</TabsContent>
            <TabsContent value="due" className='flex justify-center items-center'>Currently there are no active loans associated with your account</TabsContent>
            <TabsContent value="past" className='flex justify-center items-center'>Currently there are no active loans associated with your account</TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}

export default Lender