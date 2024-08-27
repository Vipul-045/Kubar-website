import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image'
import account from '../../assets/icons/account.svg'
import { Button } from '@/components/ui/button'
import { ArrowRight, BadgeCheck } from 'lucide-react'

type Props = {}

const Marketplace = (props: Props) => {
  return (
    <main className="flex flex-col justify-center items-center py-10 px-6 gap-8">
      <section className='w-full max-w-7xl'>
        <div>
          <h1 className='text-2xl font-semibold text-primary'>Loan Marketplace</h1>
          <p className='text-foreground'>Select an offer from the list to check the loan details from the following lender</p>
        </div>
      </section>
      <section className=' border rounded-md w-full max-w-7xl'>
        <Tabs defaultValue="amount" className="w-full">
          <TabsList className='w-full flex justify-between py-6'>
            <TabsTrigger value="amount" className='w-full'>Loan Amount</TabsTrigger>
            <TabsTrigger value="high" className='w-full'>High Tenure</TabsTrigger>
            <TabsTrigger value="max" className='w-full'>Maximum Amount</TabsTrigger>
          </TabsList>
          <TabsContent value="amount" className='flex flex-col gap-4 justify-center items-center p-4'>
            <div className='w-full border rounded-md'>
              <div className='p-4 flex gap-4 border-b'>
                <Image src={account} alt='account' />
                <p>Chris Smith</p>
              </div>
              <div>
                <Accordion type="single" collapsible className="w-full px-4">
                  <AccordionItem value="item-1" className='border-none'>
                    <AccordionTrigger className='border-b hover:no-underline'>
                      <div className='flex gap-20 text-left'>
                        <div>
                          <p className='font-semibold text-sm text-foreground'>Requested Loan Amount</p>
                          <div className='text-lg'>₹90,000</div>
                        </div>
                        <div>
                          <p className='font-semibold text-sm text-foreground'>Requested Tenure</p>
                          <div className='text-lg'>4 months</div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className='mt-4'>
                      <div className='flex justify-between'>
                        <div className='flex gap-20 text-left'>
                          <div>
                            <p className='font-semibold text-sm text-foreground'>Purpose</p>
                            <div className='text-lg'>₹90,000</div>
                          </div>
                          <div>
                            <p className='font-semibold text-sm text-foreground'>Credit Score</p>
                            <div className='text-lg'>~740</div>
                          </div>
                          <div>
                            <p className='font-semibold text-sm text-foreground'>Documents Verifed</p>
                            <div className='text-lg flex justify-between gap-8'>Done <BadgeCheck className='text-primary' /></div>
                          </div>
                          <div>
                            <p className='font-semibold text-sm text-foreground'>KYC</p>
                            <div className='text-lg flex justify-between gap-8'>Done <BadgeCheck className='text-primary' /></div>
                          </div>
                        </div>
                        <div>
                          <Button>Proceed <ArrowRight /></Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div>
              </div>
            </div>
            <div className='w-full border rounded-md'>
              <div className='p-4 flex gap-4 border-b'>
                <Image src={account} alt='account' />
                <p>Chris Smith</p>
              </div>
              <div>
                <Accordion type="single" collapsible className="w-full px-4">
                  <AccordionItem value="item-1" className='border-none'>
                    <AccordionTrigger className='border-b hover:no-underline'>
                      <div className='flex gap-20 text-left'>
                        <div>
                          <p className='font-semibold text-sm text-foreground'>Requested Loan Amount</p>
                          <div className='text-lg'>₹90,000</div>
                        </div>
                        <div>
                          <p className='font-semibold text-sm text-foreground'>Requested Tenure</p>
                          <div className='text-lg'>4 months</div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className='mt-4'>
                      <div className='flex justify-between'>
                        <div className='flex gap-20 text-left'>
                          <div>
                            <p className='font-semibold text-sm text-foreground'>Purpose</p>
                            <div className='text-lg'>₹90,000</div>
                          </div>
                          <div>
                            <p className='font-semibold text-sm text-foreground'>Credit Score</p>
                            <div className='text-lg'>~740</div>
                          </div>
                          <div>
                            <p className='font-semibold text-sm text-foreground'>Documents Verifed</p>
                            <div className='text-lg flex justify-between gap-8'>Done <BadgeCheck className='text-primary' /></div>
                          </div>
                          <div>
                            <p className='font-semibold text-sm text-foreground'>KYC</p>
                            <div className='text-lg flex justify-between gap-8'>Done <BadgeCheck className='text-primary' /></div>
                          </div>
                        </div>
                        <div>
                          <Button>Proceed <ArrowRight /></Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div>
              </div>
            </div>
            <div className='w-full border rounded-md'>
              <div className='p-4 flex gap-4 border-b'>
                <Image src={account} alt='account' />
                <p>Chris Smith</p>
              </div>
              <div>
                <Accordion type="single" collapsible className="w-full px-4">
                  <AccordionItem value="item-1" className='border-none'>
                    <AccordionTrigger className='border-b hover:no-underline'>
                      <div className='flex gap-20 text-left'>
                        <div>
                          <p className='font-semibold text-sm text-foreground'>Requested Loan Amount</p>
                          <div className='text-lg'>₹90,000</div>
                        </div>
                        <div>
                          <p className='font-semibold text-sm text-foreground'>Requested Tenure</p>
                          <div className='text-lg'>4 months</div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className='mt-4'>
                      <div className='flex justify-between'>
                        <div className='flex gap-20 text-left'>
                          <div>
                            <p className='font-semibold text-sm text-foreground'>Purpose</p>
                            <div className='text-lg'>₹90,000</div>
                          </div>
                          <div>
                            <p className='font-semibold text-sm text-foreground'>Credit Score</p>
                            <div className='text-lg'>~740</div>
                          </div>
                          <div>
                            <p className='font-semibold text-sm text-foreground'>Documents Verifed</p>
                            <div className='text-lg flex justify-between gap-8'>Done <BadgeCheck className='text-primary' /></div>
                          </div>
                          <div>
                            <p className='font-semibold text-sm text-foreground'>KYC</p>
                            <div className='text-lg flex justify-between gap-8'>Done <BadgeCheck className='text-primary' /></div>
                          </div>
                        </div>
                        <div>
                          <Button>Proceed <ArrowRight /></Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div>
              </div>
            </div>
            <div className='w-full border rounded-md'>
              <div className='p-4 flex gap-4 border-b'>
                <Image src={account} alt='account' />
                <p>Chris Smith</p>
              </div>
              <div>
                <Accordion type="single" collapsible className="w-full px-4">
                  <AccordionItem value="item-1" className='border-none'>
                    <AccordionTrigger className='border-b hover:no-underline'>
                      <div className='flex gap-20 text-left'>
                        <div>
                          <p className='font-semibold text-sm text-foreground'>Requested Loan Amount</p>
                          <div className='text-lg'>₹90,000</div>
                        </div>
                        <div>
                          <p className='font-semibold text-sm text-foreground'>Requested Tenure</p>
                          <div className='text-lg'>4 months</div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className='mt-4'>
                      <div className='flex justify-between'>
                        <div className='flex gap-20 text-left'>
                          <div>
                            <p className='font-semibold text-sm text-foreground'>Purpose</p>
                            <div className='text-lg'>₹90,000</div>
                          </div>
                          <div>
                            <p className='font-semibold text-sm text-foreground'>Credit Score</p>
                            <div className='text-lg'>~740</div>
                          </div>
                          <div>
                            <p className='font-semibold text-sm text-foreground'>Documents Verifed</p>
                            <div className='text-lg flex justify-between gap-8'>Done <BadgeCheck className='text-primary' /></div>
                          </div>
                          <div>
                            <p className='font-semibold text-sm text-foreground'>KYC</p>
                            <div className='text-lg flex justify-between gap-8'>Done <BadgeCheck className='text-primary' /></div>
                          </div>
                        </div>
                        <div>
                          <Button>Proceed <ArrowRight /></Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div>
              </div>
            </div>

          </TabsContent>
          <TabsContent value="high" className='flex justify-center items-center'>Currently there are no active loans associated with your account</TabsContent>
          <TabsContent value="max" className='flex justify-center items-center'>Currently there are no active loans associated with your account</TabsContent>
        </Tabs>
      </section>
    </main>
  )
}

export default Marketplace