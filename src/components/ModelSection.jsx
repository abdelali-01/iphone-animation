"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import Model from "./Model";
import { yellowImg } from "@/utils";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "@/constants";
import MyCanvas from "./MyCanvas";
import { gsapTimelineAnimation } from "@/utils/animations";

const ModelSection = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "IPhone 15 pro in  Natural Titanium",
    color: ["#8f8a81", "ffe7b9", "6f6c64"],
    img: yellowImg,
  });

  // camera controll for the model
  const cameraControllSmall = useRef();
  const cameraControllLarge = useRef();

  // model itself
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // rotation
  const [smallRotation, setSmallRotaion] = useState(0);
  const [largeRotation, setLargeRotaion] = useState(0);

  const tl = gsap.timeline();

  useEffect(()=>{
    if(size === 'small'){
        gsapTimelineAnimation(tl , large , largeRotation , '#view2' , '#view1' , {
            transform : 'translateX(0)',
            duration : 2,
        })
    }
    if(size === 'large'){
        gsapTimelineAnimation(tl , small , smallRotation , '#view1' , '#view2' , {
            transform : 'translateX(-100%)',
            duration : 2,
        })
    }
  },[size]);

  useGSAP(() => {
    gsap.to("#heading", {
      opacity: 1,
      y: 0,
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h3 id="heading" className="section-heading">
          Take a closer look
        </h3>
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[70vh] md:h-[90vh] overflow-hidden relative">
            <Model
              index={1}
              gsapType="view1"
              item={model}
              groupRef={small}
              controlRef={cameraControllSmall}
              setRotationState={setSmallRotaion}
              size={size}
            />

            <Model
              index={2}
              gsapType="view2"
              item={model}
              groupRef={large}
              controlRef={cameraControllLarge}
              setRotationState={setLargeRotaion}
              size={size}
            />

            <MyCanvas />
          </div>

          <div className="w-full mx-auto">
            <p className="text-center text-sm mb-5">{model.title}</p>

            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, i) => (
                  <li
                    key={i}
                    className="rounded-full cursor-pointer mx-2 h-6 w-6"
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setModel(item)}
                  />
                ))}
              </ul>
              <button className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn cursor-pointer"
                    style={{
                      backgroundColor: value === size ? "white" : "transparent",
                      color: value === size ? "black" : "white",
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelSection;
