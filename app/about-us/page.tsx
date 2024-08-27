import React from 'react'
import Image from 'next/image'
import kubarimg from '../assets/images/kubarbiglogo.png'
import whatwedo from '../assets/images/whatwedo.png'
import indiastack from '../assets/images/indiastack.png'
import handshake from '../assets/images/handshake.png'
import transparentcommision from '../assets/images/transparentcommision.png'
import Footer from '../ui/Footer/Footer'

type Props = {}

const About = (props: Props) => {
  return (
    <main className="flex flex-col justify-center items-center py-10 px-6 gap-8">
      <section className='w-full max-w-7xl text-center'>
        <div>
          <h1 className='text-4xl font-semibold md:text-6xl'>About Us</h1>
          <p className='text-foreground font-medium text-lg'>Kubar Protocol is pioneering a more accessible approach to trade finance</p>
        </div>
      </section>
      <section className='w-full max-w-7xl my-8'>
        <div className='flex justify-between flex-wrap-reverse sm:flex-nowrap gap-10'>
          <div className='sm:basis-1/2 mt-4'>
            <h1 className='text-4xl font-semibold mb-2'>What is Kubar?</h1>
            <p className='text-foreground text-lg'>We are a cutting-edge startup dedicated to revolutionizing the world of supply chain financing. Our mission is to empower Micro, Small, and Medium Enterprises (MSMEs) by providing them with seamless access to flexible financing options. We help unlock capital locked in supply chains.</p>
          </div>
          <div className='sm:basis-1/2'>
            <Image src={kubarimg} alt='img' />
          </div>
        </div>
      </section>
      <section className='w-full max-w-7xl my-8'>
        <div className='flex justify-between flex-wrap sm:flex-nowrap gap-10'>
          <div className='sm:basis-1/2'>
            <Image src={whatwedo} alt='img' />
          </div>
          <div className='sm:basis-1/2 mt-4'> 
            <h1 className='text-4xl font-semibold mb-2'>What do we do?</h1>
            <p className='text-foreground text-lg'>We provide software integrations for managing invoice discounting and loans. Our services facilitate improved cash flow management, enabling users to leverage their unpaid invoices for immediate financial needs without the wait. We are a platform-centric solution that facilitates connectivity and transparency over the anchor buyer’s entire supply chain, along with the generation and processing of data.
            </p>
          </div>
        </div>
      </section>
      <section className='w-full max-w-7xl my-8'>
        <div className='flex flex-col items-center justify-center gap-10'>
          <div className='text-center max-w-4xl'>
            <h1 className='text-4xl font-semibold mb-2'>How we do it?</h1>
            <p className='text-foreground text-lg'>At Kubar Protocol, we leverage advanced technology and strategic partnerships to deliver seamless and effective solutions for managing invoice discounting and loans. Here's how we do it:
            </p>
          </div>
          <div className='flex justify-center xl:justify-between items-center w-full gap-20 flex-wrap text-center'>
            <div className='flex flex-col justify-center items-center text-lg font-semibold gap-4'>
              <Image src={indiastack} alt='img' className='shadow-lg rounded-md' />
              <p>Utilizing OCEN & other India Stack DPIs</p>
            </div>
            <div className='flex flex-col justify-center items-center text-lg font-semibold gap-4'>
              <Image src={handshake} alt='img' className='shadow-lg rounded-md' />
              <p>Advanced Algorithms for Fair & Flexible Financing</p>
            </div>
            <div className='flex flex-col justify-center items-center text-lg font-semibold gap-4'>
              <Image src={transparentcommision} alt='img' className='shadow-lg rounded-md' />
              <p>Transparent Commissions Structure</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default About