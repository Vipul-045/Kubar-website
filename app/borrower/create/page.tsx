"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight, BadgeCheck } from 'lucide-react'
import { MoveRight, Upload } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import setu from '../../assets/icons/setu.svg';
import phonepe from '../../assets/icons/phonepe.svg';
import digio from '../../assets/icons/digio.svg';
import onemoney from '../../assets/icons/onemoney.svg';
import finvu from '../../assets/icons/finvu.svg';
import sheild from '../../assets/images/sheildexplaim.png';
import account from '../../assets/icons/account.svg'
import axis from '../../assets/icons/axis.png'
import hdfc from '../../assets/icons/hdfc.png'
import icici from '../../assets/icons/icici.png'
import consent from '../../assets/images/consent.png'
import trade from '../../assets/images/trade.png'
import digilock from '../../assets/images/digilocker.png'
import lock from '../../assets/icons/lock.png'
import banklogo from '../../assets/icons/ph_bank-duotone.png'
import upilogo from '../../assets/icons/upi_logo_icon_169316 1.png'
import payment from '../../assets/images/autopayment.png'
import complete from '../../assets/images/complete.png'


// Dynamically import the StepperComponent to avoid SSR issues
const StepperComponent = dynamic(
  () => import("../../../components/stepper/customStepper"),
  {
    ssr: false,
  }
);

// Define the steps of the loan request form
const loanRequestSteps = [
  { label: "Loan Details" },
  { label: "Consent Management" },
  { label: "Loan Offers and KYC Verification" },
  { label: "Loan Agreement & Repayment" },
];

const Create = () => {
  const [step, setStep] = useState(1);

  const [loanPurpose, setLoanPurpose] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [loanDocuments, setLoanDocuments] = useState(false);
  const [mobilenumber, setMobileNumber] = useState("")
  const [showNextContent, setShowNextContent] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [steps, setSteps] = useState(1);

  const handleRadioChange = (value) => {
    setSelectedOption(value);
  };

  // Function to go to the next step
  const goToNextStep = () => setSteps((prev) => prev + 1);

  // Function to go to the previous step
  const goToPreviousStep = () => setSteps((prev) => Math.max(prev - 1, 1));

  const advanceToNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNextContent(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  // Function to handle advancing to the next step
  const handleNextStep = () => {
    if (step < loanRequestSteps.length) {
      setStep((prevStep) => prevStep + 1);
    }
  };



  // Function to handle going back to the previous step
  const handlePrevStep = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };



  return (
    <main className="flex flex-col justify-center items-center py-10 px-6 gap-8">
      <section className="w-full max-w-7xl">
        <div>
          <h1 className="text-2xl font-semibold text-primary">
            Loan Request Form
          </h1>
          <p className="text-foreground">Request for your loan application</p>
        </div>
        <div>
          <StepperComponent steps={loanRequestSteps} activeStep={step} />
        </div>
      </section>

      {/* Render the first step */}
      {step === 1 && (
        <section className="w-full max-w-7xl">
          <section className="w-full max-w-7xl border rounded-xl">
            <div className="bg-primary p-4 rounded-tl-xl rounded-tr-xl">
              <p className="uppercase font-semibold text-white">Loan Details</p>
            </div>
            <div className="p-4 flex flex-col gap-6">
              <div className="grid w-full max-w-lg items-center gap-1.5">
                <Label htmlFor="loanPurpose">What is the purpose of your loan?</Label>
                <Input
                  id="loanPurpose"
                  type="text"
                  placeholder="Enter the loan purpose"
                  value={loanPurpose}
                  onChange={(e) => setLoanPurpose(e.target.value)}
                />
              </div>
              <div className="grid w-full max-w-lg items-center gap-1.5">
                <Label htmlFor="loanAmount">Loan Amount</Label>
                <Input
                  id="loanAmount"
                  type="text"
                  placeholder="Enter a loan amount"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                />
              </div>
              <div className="grid w-full max-w-lg items-center gap-1.5">
                <Label htmlFor="loanTenure">Required Tenure</Label>
                <div className="flex items-center border rounded-xl">
                  <Input
                    id="loanTenure"
                    type="text"
                    placeholder="Enter the loan tenure"
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(e.target.value)}
                  />
                  <div className="px-4 py-2 b-l">months</div>
                </div>
              </div>
              <div className="grid w-full max-w-lg gap-1.5">
                <Label htmlFor="loanDocuments">Upload required documents</Label>
                {loanDocuments ? (
                  <div className="flex items-center gap-2">
                    <p className="w-full">Document1.pdf</p>
                    <Button
                      className="max-w-3xl"
                      onClick={() => setLoanDocuments(!loanDocuments)}
                    >
                      Remove
                    </Button>
                  </div>
                ) : (
                  <Button
                    className="max-w-3xl"
                    onClick={() => setLoanDocuments(!loanDocuments)}
                  >
                    Upload Files <Upload className="ml-2 size-5" />
                  </Button>
                )}
              </div>
            </div>
          </section>
          <div className="mt-5 flex justify-end">
            <Button className="" onClick={handleNextStep}>
              Continue <MoveRight className="ml-2" />
            </Button>
          </div>
        </section>
      )}
      {step == 2 && (
        <section className="w-full max-w-7xl">
          <section className="w-full max-w-7xl border rounded-xl">
            <div className="bg-primary p-4 rounded-tl-xl rounded-tr-xl">
              <p className="uppercase font-semibold text-white">Consent Management</p>
            </div>
            <div className="p-4 flex flex-col gap-6">
              <Tabs defaultValue="aggregators" className="w-full">
                <TabsList className="w-full flex justify-between mb-6">
                  <TabsTrigger value="banks" className="w-full">Banks</TabsTrigger>
                  <TabsTrigger value="aggregators" className="w-full">Account Aggregators</TabsTrigger>
                </TabsList>
                
                {/* Banks Tab Content */}
                <TabsContent value="banks" className="mt-2">
                  <div className="flex justify-center items-center h-40 text-gray-500">
                    No banks available at the moment
                  </div>
                </TabsContent>

                {/* Account Aggregators Tab Content */}
                <TabsContent value="aggregators">
                  <RadioGroup defaultValue="option-one">
                    <div className="w-full rounded-md border p-4 flex justify-between items-center">
                      <div className="flex gap-4">
                        <Image src={setu} alt="img" />
                        <div>
                          <p>Setu AA by Agya Technologies</p>
                          <p>Rating: 4/5</p>
                        </div>
                      </div>
                      <div>
                        <RadioGroupItem value="setu" id="setu" />
                      </div>
                    </div>
                    <div className="w-full rounded-md border p-4 flex justify-between items-center">
                      <div className="flex gap-4">
                        <Image src={phonepe} alt="img" />
                        <div>
                          <p>PhonePe</p>
                          <p>Rating: 5/5</p>
                        </div>
                      </div>
                      <div>
                        <RadioGroupItem value="phonepay" id="phonepay" />
                      </div>
                    </div>
                    <div className="w-full rounded-md border p-4 flex justify-between items-center">
                      <div className="flex gap-4">
                        <Image src={digio} alt="img" />
                        <div>
                          <p>Digio Link</p>
                          <p>Rating: 4/5</p>
                        </div>
                      </div>
                      <div>
                        <RadioGroupItem value="digio" id="digio" />
                      </div>
                    </div>
                    <div className="w-full rounded-md border p-4 flex justify-between items-center">
                      <div className="flex gap-4">
                        <Image src={onemoney} alt="img" />
                        <div>
                          <p>Onemoney</p>
                          <p>Rating: 4/5</p>
                        </div>
                      </div>
                      <div>
                        <RadioGroupItem value="onemoney" id="onemoney" />
                      </div>
                    </div>
                    <div className="w-full rounded-md border p-4 flex justify-between items-center">
                      <div className="flex gap-4">
                        <Image src={finvu} alt="img" />
                        <div>
                          <p>Finvu</p>
                          <p>Rating: 4/5</p>
                        </div>
                      </div>
                      <div>
                        <RadioGroupItem value="finvu" id="finvu" />
                      </div>
                    </div>
                  </RadioGroup>
                </TabsContent>
              </Tabs>
            </div>
          </section>
          <div className="mt-5 flex justify-end">
            <Dialog>
              <DialogTrigger asChild>
                {/* <Button className="" onClick={handleNextStep}> */}
                <Button className="" >
                  Continue <MoveRight className="ml-2" />
                </Button>
              </DialogTrigger>
              {currentStep === 0 && (
                <DialogContent className="sm:max-w-sm">
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <Image src={sheild} alt="img" />
                    <p>Manage Consent</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Pharetra mattis turpis consectetur pharetra amet id ut tristique risus. Metus ipsum consectetur dictum sodales nunc.
                      Aliquet varius malesuada praesent ac rutrum sodales vitae senectus. Tincidunt nisl facilisis at nunc at sed.
                    </p>
                    <div className="flex gap-4">
                      <Button onClick={advanceToNextStep}>Agree</Button>
                      <DialogTrigger asChild>
                        <Button className="bg-[#D5E3E5] text-black hover:text-black hover:bg-[#bcd6da]">Deny</Button>
                      </DialogTrigger>
                    </div>
                  </div>
                </DialogContent>
              )}
              {currentStep === 1 && (
                <DialogContent className="sm:max-w-md">
                <div className="">
                  <Image src={phonepe} alt='img' object-cover h-30 w-20 />
                  <p className="ml-3 m-5 font-semibold"> Register to link your account, view balance and approve data sharing consents</p>
                  <Label>Mobile Number</Label>
                  <Input
                    id="accountlink"
                    type="text"
                    value={mobilenumber}
                    onClick={Number}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                  <div className="flex gap-4 justify-end pt-40">
                    <Button className="p-5 bg-[#D5E3E5] text-purple-900 hover:text-purple-950 hover:bg-[#bcd6da] border-solid border-purple-900" onClick={advanceToNextStep}> Login </Button>
                    <Button className="p-5 bg-purple-900 hover:bg-purple-900" onClick={advanceToNextStep}> Register</Button>
                  </div>
                  <p className="text-sm font-semibold flex justify-end pt-2">By continuing you aggree to our&nbsp;  <span className="text-purple-950">terms and services</span></p>
                </div>
              </DialogContent> 
              )}

              {currentStep === 2 && (  <DialogContent>
                  <Image src={phonepe} alt="img" />
                  <p className="flex pt-2 font-medium">Your number needs verification to complete the registration</p>
                  <InputOTP maxLength={6} className="w-full">
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                  <p className="text-sm font-semibold text-purple-950">Resend OTP</p>
                  <div className="flex gap-4 justify-end pt-40">
                    <Button className="p-5 bg-purple-900 hover:bg-purple-900 px-10" onClick={advanceToNextStep}>Verify</Button>
                  </div>
                </DialogContent>
              )}
              {currentStep === 3 && (
                <DialogContent>
                  <Image src={phonepe} alt="img" />
                  <h3 className="font-bold">Link Account</h3>
                  <p className="font-medium">Select from below accounts to link to your id</p>
                  <hr />
                  <RadioGroup defaultValue="option-one">
                    <div className="flex gap-7">
                      <div className="flex flex-col justify-center">
                        <Image src={axis} alt="img" className="ml-1.5" />
                        <p className="text-xs">AXIS BANK</p>
                      </div>
                      <p className="flex flex-col text-sm font-bold mt-3">XXXXXXXXX1234&nbsp;
                        <span className="text-purple-950">SAVINGS</span></p>
                      <div className="flex mt-5 ml-40">
                        <RadioGroupItem value="Account1" id="account1" className="text-purple-950" />
                      </div>
                    </div>
                    <hr />
                    <div className="flex gap-7">
                      <div className="flex flex-col justify-center">
                        <Image src={axis} alt="img" className="ml-1.5" />
                        <p className="text-xs">AXIS BANK</p>
                      </div>
                      <p className="flex flex-col text-sm font-bold mt-3">XXXXXXXXX1234&nbsp;
                        <span className="text-purple-950">SAVINGS</span></p>
                      <div className="flex mt-5 ml-40">
                        <RadioGroupItem value="Account2" id="account2" className="text-purple-950" />
                      </div>
                    </div>
                    <hr />
                  </RadioGroup>
                  <div className="flex gap-4 justify-end pt-16">
                    <Button className="p-5 bg-purple-900 hover:bg-purple-900 px-10" onClick={advanceToNextStep}>Link</Button>
                  </div>
                </DialogContent>
              )}
              {currentStep === 4 && (
                <DialogContent>
                  <Image src={phonepe} alt="img" />
                  <p className="flex pt-2 font-bold">Enter OTP</p>
                  <InputOTP maxLength={6}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                  <p className="text-sm font-semibold text-purple-950">Resend OTP</p>
                  <div className="flex gap-4 justify-end pt-40">
                    <Button className="p-5 bg-purple-900 hover:bg-purple-900 px-10" onClick={advanceToNextStep}>Verify</Button>
                  </div>
                </DialogContent>
              )}
              {currentStep === 5 && (
                <DialogContent>
                  <Image src={phonepe} alt="img" />
                  <div className="flex flex-col">
                    <div className="ml-44">
                      <Image src={consent} alt="" className="" />
                    </div>
                    <h3 className="font-bold ml-40">Consent Accepted!</h3>
                    <p className="text-xs ml-36">You will be redirected in 5 seconds</p>
                  </div>
                  <div className="flex gap-4 justify-center pt-5">
                    <Button className="p-5 bg-purple-900 hover:bg-purple-900 px-10" onClick={handleNextStep}>Done</Button>
                  </div>
                </DialogContent>
              )}
            </Dialog>
          </div>
        </section>
      )}
      {step === 3 && (
        <section className="w-full max-w-7xl">
          <section className="w-full max-w-7xl border rounded-xl">
            <div className="bg-primary p-4 rounded-tl-xl rounded-tr-xl">
              <p className="uppercase font-semibold text-white">Select Account Aggregators</p>
            </div>
            <div className="p-4 flex flex-col gap-6">
              <Tabs defaultValue="amount" className="w-full">
                <TabsList className='w-full flex justify-between py-6'>
                  <TabsTrigger value="amount" className='w-full'>Loan Amount</TabsTrigger>
                  <TabsTrigger value="high" className='w-full'>High Tenure</TabsTrigger>
                  <TabsTrigger value="max" className='w-full'>Maximum Amount</TabsTrigger>
                </TabsList>
                <TabsContent value="amount" className='flex flex-col gap-4 justify-center items-center p-4'>
                  <div className='w-full border rounded-md'>
                    <div className='p-4 flex gap-4 border-b items-center font-semibold'>
                      <Image src={icici} alt='account' />
                      <p>ICICI Bank</p>
                    </div>
                    <div>
                      <Accordion type="single" collapsible className="w-full px-4">
                        <AccordionItem value="item-1" className='border-none'>
                          <AccordionTrigger className='border-b hover:no-underline'>
                            <div className='flex gap-20 text-left'>
                              <div>
                                <p className='font-semibold text-sm text-foreground'>Loan Amount Approved</p>
                                <div className='text-lg'>₹90,000</div>
                              </div>
                              <div>
                                <p className='font-semibold text-sm text-foreground'>Interest</p>
                                <div className='text-lg'>₹5000 (8%)</div>
                              </div>
                              <div>
                                <p className='font-semibold text-sm text-foreground'>Deposit</p>
                                <div className='text-lg'>₹45,000</div>
                              </div>
                              <div>
                                <p className='font-semibold text-sm text-foreground'>Duration</p>
                                <div className='text-lg'>80 days</div>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className='mt-4'>
                            <div className='flex justify-between'>
                              <div className='flex gap-40 text-left'>
                                <div>
                                  <p className='font-semibold text-sm text-foreground'>Repayment</p>
                                  <div className='text-lg'>₹50000</div>
                                </div>
                                <div>
                                  <p className='font-semibold text-sm text-foreground'>Processing Charge</p>
                                  <div className='text-lg'>₹1,500</div>
                                </div>
                              </div>
                              <div>
                                <Button onClick={handleNextStep}>Select Offer <ArrowRight /></Button>
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
                    <div className='p-4 flex gap-4 border-b items-center font-semibold'>
                      <Image src={axis} alt='account' />
                      <p>Axis Bank</p>
                    </div>
                    <div>
                      <Accordion type="single" collapsible className="w-full px-4">
                        <AccordionItem value="item-1" className='border-none'>
                          <AccordionTrigger className='border-b hover:no-underline'>
                            <div className='flex gap-20 text-left'>
                              <div>
                                <p className='font-semibold text-sm text-foreground'>Loan Amount Approved</p>
                                <div className='text-lg'>₹90,000</div>
                              </div>
                              <div>
                                <p className='font-semibold text-sm text-foreground'>Interest</p>
                                <div className='text-lg'>₹5000 (8%)</div>
                              </div>
                              <div>
                                <p className='font-semibold text-sm text-foreground'>Deposit</p>
                                <div className='text-lg'>₹45,000</div>
                              </div>
                              <div>
                                <p className='font-semibold text-sm text-foreground'>Duration</p>
                                <div className='text-lg'>80 days</div>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className='mt-4'>
                            <div className='flex justify-between'>
                              <div className='flex gap-40 text-left'>
                                <div>
                                  <p className='font-semibold text-sm text-foreground'>Repayment</p>
                                  <div className='text-lg'>₹50000</div>
                                </div>
                                <div>
                                  <p className='font-semibold text-sm text-foreground'>Processing Charge</p>
                                  <div className='text-lg'>₹1,500</div>
                                </div>
                              </div>
                              <div>
                                <Button>Select Offer <ArrowRight /></Button>
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
                    <div className='p-4 flex gap-4 border-b items-center font-semibold'>
                      <Image src={hdfc} alt='account' />
                      <p>HDFC Bank</p>
                    </div>
                    <div>
                      <Accordion type="single" collapsible className="w-full px-4">
                        <AccordionItem value="item-1" className='border-none'>
                          <AccordionTrigger className='border-b hover:no-underline'>
                            <div className='flex gap-20 text-left'>
                              <div>
                                <p className='font-semibold text-sm text-foreground'>Loan Amount Approved</p>
                                <div className='text-lg'>₹90,000</div>
                              </div>
                              <div>
                                <p className='font-semibold text-sm text-foreground'>Interest</p>
                                <div className='text-lg'>₹5000 (8%)</div>
                              </div>
                              <div>
                                <p className='font-semibold text-sm text-foreground'>Deposit</p>
                                <div className='text-lg'>₹45,000</div>
                              </div>
                              <div>
                                <p className='font-semibold text-sm text-foreground'>Duration</p>
                                <div className='text-lg'>80 days</div>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className='mt-4'>
                            <div className='flex justify-between'>
                              <div className='flex gap-40 text-left'>
                                <div>
                                  <p className='font-semibold text-sm text-foreground'>Repayment</p>
                                  <div className='text-lg'>₹50000</div>
                                </div>
                                <div>
                                  <p className='font-semibold text-sm text-foreground'>Processing Charge</p>
                                  <div className='text-lg'>₹1,500</div>
                                </div>
                              </div>
                              <div>
                                <Button>Select Offer <ArrowRight /></Button>
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
            </div>
          </section>
          <div className="mt-5 flex justify-end">
            <Dialog>
              <DialogTrigger asChild>
                {/* <Button className="" onClick={handleNextStep}> */}
                <Button className="" >
                  Continue <MoveRight className="ml-2" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-sm">
                <div className="flex flex-col gap-2 justify-center items-center">
                  <Image src={sheild} alt='img' />
                  <p>Manage Consent</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Pharetra mattis turpis consectetur pharetra amet id ut tristique risus. Metus ipsum consectetur dictum sodales nunc.
                    Aliquet varius malesuada praesent ac rutrum sodales vitae senectus. Tincidunt nisl facilisis at nunc at sed.
                  </p>
                  <div className="flex gap-4">
                    <Button className="" onClick={handleNextStep}>Agree</Button>
                    <DialogTrigger asChild>
                      <Button className="bg-[#D5E3E5] text-black hover:text-black hover:bg-[#bcd6da]" >Deny</Button>
                    </DialogTrigger>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>
      )}

      {step == 4 && (
        <section className="w-full max-w-7xl">
          {steps == 1 && (
            <div className="border rounded-xl mb-8">
              <div className="flex flex-col p-5">
                <p className="text-center p-10 font-bold ">Fetch Aadhar Card Using Digilocker</p>
                <div className="flex justify-center cursor-pointer">
                  <Image src={digilock} alt="Img" onClick={goToNextStep} />
                </div>
                <p className="text-center text-md p-5">You will receive an OTP on your Aadhar linked mobile number</p>
                <div className="flex content-center justify-center mt-24">
                  <Image src={lock} alt='Img' />
                  <p className="text-sm">Your data is 100% secure with us. We don't sell or misuse your personal data.</p>
                </div>
              </div>
            </div>
          )}

          {steps == 2 && (
            <div className="border rounded-xl mb-8">
              <div className="flex bg-primary p-4 rounded-tl-xl rounded-tr-xl">
                <Image src={icici} alt="Img" className="w-10" />
                <p className="mt-2 px-2 text-white">LOAN AGREEMENT</p>
              </div>
              <div className="p-4">
                <p className="mt-4 mb-7 font-bold">PLEASE READ THESE TERMS CAREFULLY BEFORE PROCEEDING</p>
                <p>This Loan Agreement ('Agreement') establishes the terms under which the Lender agrees to lend the borrower, a sum of money ('Loan'). The Loan shall bear interest at [Interest Rate]% per annum. Repayment shall be made in [Number of Installments] equal installments of [Installment Amount], beginning on [Start Date] and continuing monthly thereafter until the Loan is fully repaid by [End Date]. Borrower agrees to make payments promptly as scheduled. In the event of default, Borrower agrees to cover all costs of collection, including reasonable legal fees. Lender retains the right to accelerate the Loan upon Borrower's failure to meet payment obligations. This Agreement constitutes the entire agreement between the parties, superseding any prior understandings. Both parties acknowledge their acceptance of the Loan amount and agree to the terms outlined herein.</p>
                <div className="flex justify-end mt-16 gap-4">
                  <Button className="bg-[#D5E3E5] hover:bg-[#D5E3E5] text-black">Download PDF</Button>
                  <Button onClick={goToNextStep}>I Agree To The Terms and Conditions</Button>
                </div>
              </div>
            </div>
          )}

          {steps === 3 && (
            <>
              <div className="border rounded-xl mb-8">
                <div className="flex bg-primary p-4 rounded-tl-xl rounded-tr-xl">
                  <p className="text-white">REPAYMENT PROCESS</p>
                </div>
                <div>
                  <p className="p-2">Amount Payable <span className="float-end font-bold">₹90,000</span></p>
                </div>
                <div>
                  <p className="p-2">Due Date <span className="float-end font-bold">4th September, 2025</span></p>
                </div>
                <div>
                  <p className="p-2">Validity of auto-repay <span className="float-end font-bold break-after-column">From - 4th July 2024 <br /> To - 30 August 2024</span></p>
                </div><br />
                <div>
                  <p className="p-2">Maximum Repayment<span className="float-end font-bold">₹90,000</span></p>
                </div>
              </div>
              <div className="border rounded-xl mb-8">
                <div className="flex bg-primary p-4 rounded-tl-xl rounded-tr-xl">
                  <p className="text-white">ACCOUNT DETAILS</p>
                </div>
                <div className="flex flex-row p-2">
                  <Image src={icici} alt="account" />
                  <h3 className="p-3 font-bold">ICICI BANK</h3>
                </div>
                <div>
                  <p className="py-2 px-4">Account Holder Name <span className="float-end font-bold">Vaibhav</span></p>
                </div>
                <div>
                  <p className="py-2 px-4">Account Number <span className="float-end font-bold">549388394584</span></p>
                </div>
                <div>
                  <p className="py-2 px-4">IFSC Code<span className="float-end font-bold">ICIC20008200</span></p>
                </div>
              </div>
              <div className="border rounded-xl mb-8">
                <div className="flex bg-primary p-4 rounded-tl-xl rounded-tr-xl">
                  <p className="text-white">REPAYMENT METHOD</p>
                </div>
                <RadioGroup
                  value={selectedOption}
                  onValueChange={handleRadioChange}
                >
                  <div className="flex flex-row items-center justify-between px-4 py-2">
                    <div className="flex items-center">
                      <Image src={banklogo} alt="" />
                      <p className="p-2">e NACH</p>
                    </div>
                    <div className="mr-10">
                      <RadioGroupItem value="Account1" id="account1" className="text-purple-950" />
                    </div>
                  </div>
                  <hr />
                  <div className="flex flex-row items-center justify-between px-4 py-2">
                    <div className="flex items-center">
                      <Image src={upilogo} alt="" />
                      <p className="p-2">UPI</p>
                    </div>
                    <div className="mr-10">
                      <RadioGroupItem value="Account2" id="account2" className="text-purple-950" />
                    </div>
                  </div>
                </RadioGroup>

              </div>
              <div className="my-5 flex justify-end">
                {selectedOption && steps < 4 && <Button onClick={goToNextStep}>Next</Button>}
              </div>
            </>
          )}

          {steps === 4 && (
            <div className="border rounded-xl">
              {/* <div className="flex flex-col p-10">
                <div className="flex content-center justify-center">
                  <Image src={payment} alt="img" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-primary">Auto Repayment has been set!</h3>
                  <p className="text-xs p-2">Please do not close the browser or go back</p>
                </div>
              </div> */}

              <div className="flex flex-col p-5">
                <div className="flex justify-center">
                  <Image src={complete} alt="Img" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-primary">Thank You!</h3>
                  <p>The amount has been disbursed to your account</p>
                  <p className="font-bold">Loan id: <span className="text-primary font-bold">#AGI34BDUEDEHER</span></p>
                </div>
              </div>
            </div>
          )}

        </section>)}
    </main >
  );
};

export default Create;
