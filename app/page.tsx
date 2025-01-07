'use client'
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import thumbnail from "./assets/images/thumbnail.png"
import lender from "./assets/images/lender.png"
import borrower from "./assets/images/borrower.png"
import Link from "next/link";
import Footer from "./ui/Footer/Footer";


export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };


  return (
    <main className="flex flex-col items-center justify-between p-10 w-full">
      <section className="flex flex-col items-center gap-20 container mx-auto mb-20">
        <div className="flex flex-col justify-center items-center">
          <h1 className=" text-5xl leading-snug md:text-7xl text-center font-semibold md:leading-relaxed text-transparent bg-clip-text bg-gradient-to-b from-[#013942] via-[#013942] to-[#b7c9cc]">
            Revolutionizing Trade
          </h1>
          <h1 className="text-5xl leading-snug md:text-7xl text-center font-semibold md:leading-relaxed text-transparent bg-clip-text bg-gradient-to-b from-[#013942] via-[#013942] to-[#b7c9cc]">
            Financing Accessibility
          </h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="text-md font-medium flex gap-2 px-10 py-6 mt-10">
                <p>Get Started</p>
                <ArrowRight />
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
        </div>
        {/* Video Section */}
        <div className="relative w-full max-w-7xl p-2 bg-gradient-to-br from-[#013942] to-[#6a8288] rounded-2xl  shadow-md" style={{ boxShadow: "0px 0px 80px #013942ab" }}>
          <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
            {!isPlaying ? (
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={handlePlayVideo}
              >
                <Image
                  src={thumbnail}
                  alt="Video Thumbnail"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
                  <div className="bg-white hover:bg-slate-50 rounded-full p-8 hover:p-10 hover:outline hover:outline-primary transition-all duration-100 ease-in-out">
                    <Play className="h-12 w-12 text-primary" />
                  </div>
                </div>
              </div>
            ) : null}
            {isPlaying && (
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/RPKQoFtLVS4?autoplay=1"
                title="YouTube video player"
                allow=" autoplay; clipboard-write"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
