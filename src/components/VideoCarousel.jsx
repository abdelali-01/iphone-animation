"use client";
import { hightlightsSlides } from "@/constants";
import { pauseImg, playImg, replayImg } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VideoCarousel() {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    id: 0,
    isEnd: false,
    startPlay: false,
    isLast: false,
    isPlaying: false,
  });
  const [loadedData, setLoadedData] = useState([]);

  console.log("video", video);
  console.log("loadedData", loadedData);

  // gsap animation setup
  useGSAP(() => {
    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((prev) => ({ ...prev, startPlay: true, isPlaying: true }));
      },
    });
  }, [video.isEnd, video.id]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!video.isPlaying) {
        videoRef.current[video.id].pause();
      } else {
        video.startPlay && videoRef.current[video.id].play();
      }
    }
  }, [video.isPlaying, video.startPlay, loadedData, video.id]);

  const handleLoadedData = (i, e) => {
    console.log(`Video ${i} metadata loaded`, e);
    setLoadedData((prev) => [...prev, e]);
  };

  const handleProccess = (type, i) => {
    switch (type) {
      case "video-end":
        setVideo((prev) => ({ ...prev, isEnd: true, id: i + 1 }));
        break;
      case "video-last":
        setVideo((prev) => ({ ...prev, isLast: true }));
        break;
      case "video-reset":
        setVideo((prev) => ({ ...prev, isLast: false, id: 0 }));
        break;
      case "play":
        setVideo((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
        break;

      default:
        return video;
    }
  };

  console.log("videoRef", videoRef.current);

  //   force load all videos
  useEffect(() => {
    hightlightsSlides.forEach((_, i) => {
      videoRef.current[i]?.load?.();
    });
  }, []);

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((item, i) => (
          <div key={item.id} id="slider" className="pr-10 sm:pr-20">
            <div className="video-carousel_container">
              <div className="h-full w-full rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  src={item.video}
                  muted
                  preload="auto"
                  playsInline={true}
                  ref={(el) => {
                    videoRef.current[i] = el;
                  }}
                  onPlay={() => {
                    setVideo((prev) => ({ ...prev, isPlaying: true }));
                  }}
                  onLoadedMetadata={(e) => {
                    console.log(`Loaded metadata for video ${i}:`, e);
                    handleLoadedData(i, e);
                  }}
                />
              </div>

              <div className="absolute top-12 left-[5%] z-10">
                {item.textLists.map((text, index) => (
                  <p
                    key={index}
                    className="text-white text-xl sm:text-3xl font-medium mb-2"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-center mt-15 gap-3">
        <div className="px-7 py-5 bg-zinc-700 rounded-full flex items-center">
          {videoRef &&
            videoRef.current.map((_, index) => (
              <div
                key={index}
                className="h-3 w-3 relative rounded-full bg-gray-400 mx-1 cursor-pointer"
              >
                <span
                  className="w-full h-full absolute rounded-full bg-white top-0 left-0"
                  ref={(el) => {
                    videoSpanRef.current[index] = el;
                  }}
                />
              </div>
            ))}
        </div>

        <div className="bg-zinc-700 rounded-full h-full p-3 flex-center cursor-pointer">
          <img
            src={
              video.isLast ? replayImg : video.isPlaying ? pauseImg : playImg
            }
            alt=""
          />
        </div>
      </div>
    </>
  );
}
