"use client";
import { explore1Img, explore2Img, exploreVideo } from "@/utils";
import { gsapAnimation } from "@/utils/animations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export default function Features() {
  const videoRef = useRef();
  useGSAP(() => {
    gsap.to('#explore-video', {
      scrollTrigger: {
        trigger: '#explore-video',
        toggleActions: "play pause play restart",
        start: "-10% bottom",
      },
      onComplete : ()=>{
        videoRef.current.play();
      }
    });

    gsapAnimation("#feature-heading", { opacity: 1, y: 0 });
    gsapAnimation(
      ".feature-video",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    gsapAnimation(".feature-text", { opacity: 1, y: 0 });
  }, []);

  return (
    <section className="common-padding bg-zinc-900">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h3 id="feature-heading" className="section-heading">
            Explore the full story
          </h3>
        </div>

        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-24 mb-24 pl-24">
            <h2 className="font-bold text-5xl lg:text-7xl">Iphone.</h2>
            <h2 className="font-bold text-5xl lg:text-7xl">
              Forged in titanium.
            </h2>
          </div>

          <div className="flex flex-col sm:px-10">
            <div className="h-[50vh] flex items-center w-full">
              <video
                ref={videoRef}
                id="explore-video"
                src={exploreVideo}
                className="h-full w-full object-cover object-center"
                playsInline
                preload="none"
                muted
                autoPlay
              />
            </div>
            <div className="flex flex-col items-center w-full">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={explore1Img} alt="" className="feature-video" />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={explore2Img} alt="" className="feature-video" />
                </div>
              </div>
            </div>

            <div className="flex items-start justify-center gap-5 flex-wrap mt-15">
              <div className="flex-1 flex-center min-w-[300px]">
                <p className="feature-text">
                  The iPhone 15 Pro
                  <span className="text-white">
                    {" "}
                    is Apple's premium smartphone, released in September 2023.
                    It features a lightweight titanium frame, a powerful A17 Pro
                    chip for faster performance and gaming,
                  </span>
                  and a new customizable Action Button replacing the mute
                  switch.
                </p>
              </div>
              <div className="flex-1 flex-center min-w-[300px]">
                <p className="feature-text">
                  Its camera system includes a 48MP main camera with
                  <span className="text-white">
                    {" "}
                    improved low-light performance and advanced video recording
                    capabilities. Overall, it's a sleek, fast, and highly
                    capable phone
                  </span>
                  for professionals and tech enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
