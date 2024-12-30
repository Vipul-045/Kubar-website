"use client"
import Image from "next/image";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import avatarpfp from "../assets/images/avatar.png";
import account from "../assets/icons/account.svg";
import browseoffering from "../assets/icons/browseoffering.svg";
import creditcard from "../assets/icons/creditcard.svg";
import faq from "../assets/icons/faq.svg";
import loanmarketplace from "../assets/icons/loanmarketplace.svg";
import { ArrowRight, FileUp } from "lucide-react";
import Link from "next/link";

const Borrower = () => {
  const [activeSection, setActiveSection] = useState('Loan History');

  const renderSections = () => {
    switch (activeSection) {
      case 'Loan History':
        return (
          <Tabs defaultValue="active" className="w-full">
            <TabsList className='w-full flex justify-between py-6'>
              <TabsTrigger value="active" className='w-full'>Active Loans</TabsTrigger>
              <TabsTrigger value="previous" className='w-full'>Previous Loans</TabsTrigger>
            </TabsList>
            <TabsContent value="active" className='flex justify-center items-center min-h-[300px]'>
              Currently there are no active loans associated with your account
            </TabsContent>
            <TabsContent value="previous" className='flex justify-center items-center min-h-[300px]'>
              No previous loans found
            </TabsContent>
          </Tabs>
        );

      case 'Payment Method':
        return (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Payment Methods</h2>
            <div className="space-y-4">
              <div className="border rounded-md p-4">
                <h3 className="font-medium mb-2">Saved Payment Methods</h3>
                <p className="text-gray-500">No payment methods added yet</p>
              </div>
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90">
                Add Payment Method
              </button>
            </div>
          </div>
        );

      case 'Account Details':
        return (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Account Details</h2>
            <div className="space-y-4">
              <div className="border rounded-md p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Personal Information</h3>
                  <button className="text-primary hover:underline">Edit</button>
                </div>
                <p>Name: John Doe</p>
                <p>Email: johndoe@example.com</p>
                <p>Phone: +1 (555) 123-4567</p>
              </div>
              <div className="border rounded-md p-4">
                <h3 className="font-medium mb-2">Account Verification</h3>
                <p className="text-green-600">Verified</p>
              </div>
            </div>
          </div>
        );

      case 'Uploaded Documents':
        return (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Uploaded Documents</h2>
            <div className="border rounded-md p-4 min-h-[300px]">
              <p className="text-gray-500">No documents uploaded yet</p>
              <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 flex items-center gap-2">
                <FileUp className="h-4 w-4" />
                Upload Document
              </button>
            </div>
          </div>
        );

      case 'FAQs':
        return (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  question: "How do I apply for a loan?",
                  answer: "You can start a loan application by clicking on the 'Start Loan Application' button below."
                },
                {
                  question: "What documents do I need?",
                  answer: "Typically, you'll need proof of income, identification, and address verification."
                },
                {
                  question: "How long does approval take?",
                  answer: "Approval process usually takes 1-3 business days after document submission."
                }
              ].map((faq, index) => (
                <div key={index} className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const sidebarItems = [
    { icon: browseoffering, text: 'Loan History' },
    { icon: creditcard, text: 'Payment Method' },
    { icon: account, text: 'Account Details' },
    { icon: loanmarketplace, text: 'Uploaded Documents' },
    { icon: faq, text: 'FAQs' }
  ];

  return (
    <main className="flex flex-col justify-center items-center py-10 px-6 gap-8">
      <section className="w-full bg-primary p-4 rounded-md flex justify-between max-w-7xl">
        <div className="flex gap-4 justify-center items-center">
          <Image src={avatarpfp} alt="pfp" className="w-12 h-12 rounded-full" />
          <div className="flex flex-col gap-1 text-white">
            <p className="opacity-80">Welcome Back!</p>
            <p className="text-xl font-medium">John Doe</p>
          </div>
        </div>
        <div className="text-white cursor-pointer hover:underline">Edit</div>
      </section>

      <section className="w-full flex max-w-7xl gap-8 justify-between">
        <div className="basis-1/4">
          <div className="flex flex-col gap-4">
            {sidebarItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveSection(item.text)}
                className={`p-4 border rounded-md flex gap-4 items-center cursor-pointer hover:bg-slate-50 transition-colors duration-100 ease-in 
                  ${activeSection === item.text ? 'bg-blue-50 border-primary text-primary' : ''}`}
              >
                <div className="p-2 bg-[#DEF6EE] rounded-sm">
                  <Image src={item.icon} alt={item.text} />
                </div>
                <p className="font-medium">{item.text}</p>
              </div>
            ))}
          </div>

          <Link href="/borrower/create" className="block mt-8">
            <div className="p-4 bg-primary flex items-center text-white rounded-md cursor-pointer hover:bg-opacity-90">
              <p className="flex-grow">Start your loan application process</p>
              <ArrowRight className="w-10 h-10" />
            </div>
          </Link>
        </div>

        <div className="basis-4/5 border rounded-md w-full">
          {renderSections()}
        </div>
      </section>
    </main>
  );
};

export default Borrower;