'use client'
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import successtick from '../../assets/images/successtick.svg'
import Image from 'next/image'


type Props = {}

const Create = (props: Props) => {
  const [create, setCreate] = useState(false)
  return (<>

    {
      (create) ? <>
        <main className="flex flex-col justify-center items-center py-10 px-6 gap-8">
          <section className='w-full max-w-7xl border flex flex-col justify-center items-center p-24 rounded-md gap-8'>
            <Image src={successtick} alt="faq" />
            <p className='font-semibold text-primary text-xl'>Loan Product Created Successfully</p>
            <p>LOC id: <span className='text-primary font-medium'>#AGI34BDUEDEHER</span> </p>
            <div>
              <Button className='flex justify-center items-center gap-2'
                onClick={() => setCreate(true)}
              >Continue</Button>
            </div>
          </section>
        </main>
      </>
        :
        <>
          <main className="flex flex-col justify-center items-center py-10 px-6 gap-8">
            <section className='w-full max-w-7xl'>
              <div>
                <h1 className='text-2xl font-semibold text-primary'>Create New Loan Product Offering</h1>
                <p className='text-foreground'>Fill up the form to post your loan offering in our marketplace</p>
              </div>
            </section>
            <section className='w-full max-w-7xl border rounded-xl'>
              <div className='bg-primary p-4 rounded-xl'>
                <p className='uppercase font-semibold text-white'>Product Information</p>
              </div>
              <div className='p-4 flex flex-col gap-4'>
                <div className="grid w-full max-w-lg items-center gap-1.5">
                  <Label htmlFor="name">What is the name of your product?</Label>
                  <Input id="name" type="text" placeholder="Enter the name" />
                </div>
                <div className="grid w-full max-w-3xl gap-1.5">
                  <Label htmlFor="message">Description of your product</Label>
                  <Textarea placeholder="Enter the description" id="message" />
                </div>
                <div className='flex gap-4 items-center '>
                  <Label>List the product on product registry</Label>
                  <Switch />
                </div>
              </div>
            </section>
            <section className='w-full max-w-7xl border rounded-xl'>
              <div className='bg-primary p-4 rounded-xl'>
                <p className='uppercase font-semibold text-white'>PRODUCT CATEGORY</p>
              </div>
              <div className='p-4 flex flex-col gap-4'>
                <Label htmlFor="name">Define the classification of the product</Label>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <div>
                    <label htmlFor="terms" className='font-medium'>
                      End User Control
                    </label>
                    <p>The disbursement will happen to a non borrower account</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <div>
                    <label htmlFor="terms" className='font-medium'>
                      Collection Control
                    </label>
                    <p>The money receivable from the Borrower from the LSP will be deposited in an Escrow account and will be created by the Lender before the Borrower can withdraw the money</p>
                  </div>
                </div>
              </div>
            </section>
            <section className='w-full max-w-7xl border rounded-xl'>
              <div className='bg-primary p-4 rounded-xl'>
                <p className='uppercase font-semibold text-white'>ALLOWED BORROWERS / ENTITIES</p>
              </div>
              <div className='p-4 flex flex-col gap-4'>
                <Label htmlFor="name">Select the borrowers or entities that are allowed to apply for this product</Label>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <div>
                    <label htmlFor="terms" className='font-medium'>
                      Individual
                    </label>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <div>
                    <label htmlFor="terms" className='font-medium'>
                      Sole Proprietor
                    </label>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="partnership" />
                  <div>
                    <label htmlFor="partnership" className='font-medium'>
                      Partnership
                    </label>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="pvtltd" />
                  <div>
                    <label htmlFor="pvtltd" className='font-medium'>
                      Private Limited
                    </label>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <div>
                    <label htmlFor="terms" className='font-medium'>
                      Public Limited
                    </label>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <div>
                    <label htmlFor="terms" className='font-medium'>
                      Limited Liability Partnership
                    </label>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <div>
                    <label htmlFor="terms" className='font-medium'>
                      Trust
                    </label>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <div>
                    <label htmlFor="terms" className='font-medium'>
                      Cooperative Society
                    </label>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <div>
                    <label htmlFor="terms" className='font-medium'>
                      Farmer Producer Organization
                    </label>
                  </div>
                </div>
              </div>
            </section>
            <section className='w-full max-w-7xl border rounded-xl'>
              <div className='bg-primary p-4 rounded-xl'>
                <p className='uppercase font-semibold text-white'>DATA REQUIREMENTS</p>
              </div>
              <div className='p-4 flex flex-col gap-4'>
                <Label htmlFor="name">Data requirements and settings for the Product Underwriting</Label>
                <div className='flex flex-wrap items-center justify-between'>
                  <Card className="w-[350px]">
                    <CardHeader>
                      <p className='font-semibold text-lg'>Account Aggregator Flow</p>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <p>
                          Account Aggregators in the India Stack facilitate seamless and secure data sharing across financial institutions, enabling individuals to consolidate their financial information and enhance financial inclusion and credit access
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-4">
                      <p className='font-medium'>Required</p>
                      <Switch></Switch>
                    </CardFooter>
                  </Card>
                  <Card className="w-[400px]">
                    <CardHeader>
                      <p className='font-semibold text-lg'>Monitoring Consent</p>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <p>
                          Monitoring consent in the India Stack ensures that individuals maintain control over their data, allowing them to grant and revoke permissions for data sharing with financial institutions, thereby safeguarding privacy and promoting trust
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-4">
                      <p className='font-medium'>Required</p>
                      <Switch></Switch>
                    </CardFooter>
                  </Card>
                  <Card className="w-[350px]">
                    <CardHeader>
                      <p className='font-semibold text-lg'>Benchmark Data</p>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <p>
                          Benchmark data in the India Stack provides standardized metrics for financial performance, enabling stakeholders to make informed decisions and drive transparency across the financial ecosystem.
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-4">
                      <p className='font-medium'>Required</p>
                      <Switch></Switch>
                    </CardFooter>
                  </Card>
                </div>
                <div className="grid w-full max-w-3xl gap-1.5">
                  <Label htmlFor="message">Benchmark Data Description</Label>
                  <Textarea placeholder="Enter the description" id="message" />
                </div>
              </div>
            </section>
            <section className='w-full max-w-7xl border rounded-xl'>
              <div className='bg-primary p-4 rounded-xl'>
                <p className='uppercase font-semibold text-white'>LINE OF CREDIT DETAILS</p>
              </div>
              <div className='p-4 flex flex-col gap-4'>
                <div className="grid w-full max-w-lg items-center gap-1.5">
                  <Label htmlFor="loan">Loan Amount(Rupees)</Label>
                  <Input id="loan" type="text" placeholder="₹" />
                </div>
                <div className="grid w-full max-w-lg items-center gap-1.5">
                  <Label htmlFor="roi">Rate of Interest(%)</Label>
                  <Input id="roi" type="text" placeholder="%" />
                </div>
                <div className="grid w-full max-w-lg items-center gap-1.5">
                  <Label htmlFor="duration">Duration(months)</Label>
                  <Input id="duration" type="text" placeholder="Enter the number of months" />
                </div>
                <div className="grid w-full max-w-lg items-center gap-1.5">
                  <Label htmlFor="disbursement">Initial Disbursement(Rupees)</Label>
                  <Input id="disbursement" type="text" placeholder="₹" />
                </div>
              </div>
            </section>
            <div className='flex justify-end w-full max-w-7xl'>
              <Button className='flex justify-center items-center gap-2'
                onClick={() => setCreate(true)}
              >Create <ArrowRight /></Button>
            </div>
          </main>
        </>
    }
  </>
  )
}

export default Create