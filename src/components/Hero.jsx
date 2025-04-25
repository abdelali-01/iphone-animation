"use client";
import { heroVideo, smallHeroVideo } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

export default function Hero() {
  useGSAP(() => {
    gsap.to("#heroTitle", {
      duration: 1.5,
      opacity: 1,
    });

    gsap.to(".cta", {
      duration: 1,
      opacity: 1,
      y: -50,
    });
  }, []);

  return (
    <div className="nav-height bg-black relative overflow-hidden">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="heroTitle" className="hero-title mt-10">
          IPhone 15 Pro
        </p>

        <div className="w-9/12 md:w-10/12">
          <video src={heroVideo} autoPlay muted playsInline className="pointer-events-none hidden sm:block"></video>
          <video src={smallHeroVideo} autoPlay muted playsInline className="pointer-events-none block sm:hidden max-h-[400px] m-auto"></video>
        </div>
      </div>

      <div className="cta flex flex-col items-center opacity-0 translate-y-20" >
        <Link href="#" id="#highlights" className="btn">Buy</Link>
        <p className="text-xl">From $199/month or 999$</p>
      </div>
    </div>
  );
}
