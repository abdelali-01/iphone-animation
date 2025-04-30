"use client";

import { chipImg, frameImg, frameVideo } from "@/utils";
import { gsapAnimation } from "@/utils/animations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export default function MobileMockup() {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to("#hiw-video", {
      scrollTrigger: {
        trigger: "#hiw-video",
        toggleActions: "play pause play restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });
    gsapAnimation("#chip", { scale: 0.5, ease: "power2.inOut" });
    gsap.from(".hiw-text", {
      scrollTrigger: {
        trigger: ".hiw-text",
        start: "top 80%",
        toggleActions: "restart none none restart",
      },
      y: 50,
      opacity: 0,
      duration : 1 ,
      stagger: 0.2,
    });
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={360} height={360} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro chip
            <br />A monster win for gaming
          </h2>

          <p className="hiw-subtitle">
            It's here , The biggest redesign in the history of Apple GPUs
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="h-full relative flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>

            <div className="hiw-video rounded-[30px] lg:rounded-[52px]">
              <video
                src={frameVideo}
                id="hiw-video"
                playsInline
                preload="none"
                autoPlay
                muted
                ref={videoRef}
              />
            </div>
          </div>
        </div>

        <div className="flex items-start justify-center gap-5 flex-wrap mt-15">
          <div className="flex-1 flex-center min-w-[300px]">
            <p className="hiw-text">
              The iPhone 15 Pro
              <span className="text-white">
                {" "}
                is Apple's premium smartphone, released in September 2023. It
                features a lightweight titanium frame, a powerful A17 Pro chip
                for faster performance and gaming,
              </span>
              and a new customizable Action Button replacing the mute switch.
            </p>
          </div>
          <div className="flex-1 flex-center min-w-[300px]">
            <p className="hiw-text">
              Its camera system includes a 48MP main camera with
              <span className="text-white">
                {" "}
                improved low-light performance and advanced video recording
                capabilities. Overall, it's a sleek, fast, and highly capable
                phone
              </span>
              for professionals and tech enthusiasts.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start mt-15">
            <span className="hiw-text">New</span>
            <h3 className="hiw-bigtext">Pro-class GPU</h3>
            <span className="hiw-text">With 6 cores</span>
        </div>
      </div>
    </section>
  );
}
