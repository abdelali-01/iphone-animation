"use client";
import { rightImg, watchImg } from "@/utils";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import React from "react";
import VideoCarousel from "./VideoCarousel";
import { gsapAnimation } from "@/utils/animations";

export default function Highlights() {
  useGSAP(() => {
    gsapAnimation('#title' , {y : 0 , opacity : 1});
    gsapAnimation('.link' , { opacity: 1, duration: 1, stagger: 0.2 , y: 0 });
  }, []);
  
  return (
    <section
      id="hightlights"
      className="common-padding bg-zinc-900 h-full w-screen overflow-hidden"
    >
      <div className="screen-max-width">
        <div className="items-center justify-between mb-12 w-full md:flex">
          <h1 id="title" className="section-heading">
            Get The Highlights{" "}
          </h1>

          <div className="flex flex-wrap gap-3 items-center">
            <Link href={"#"} className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ms-2"/>
            </Link>
            <Link href={"#"} className="link">
              Watch the event
              <img src={rightImg} alt="right arrow" className="ms-2"/>
            </Link>
          </div>
        </div>

        
      <VideoCarousel/>
      </div>

    </section>
  );
}
