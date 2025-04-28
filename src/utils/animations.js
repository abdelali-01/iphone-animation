'use client'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const gsapAnimation = (target , animationProps , scrollProps) =>{
    gsap.to(target , {
        ...animationProps ,
        scrollTrigger : {
            trigger : target ,
            toggleActions : 'restart reverse restart reverse',
            start : 'top 80%',
            ...scrollProps ,
        }
    });
}

export const gsapTimelineAnimation = (
  tl,
  rotationRef,
  rotationState,
  firstItem,
  secondItem,
  animationProps
) => {
    tl.to(rotationRef.current.rotation , {
        y : rotationState ,
        duration : 1 ,
        ease : 'power2.inOut'
    });
    
    tl.to(firstItem , {
        ...animationProps ,
        ease : 'power2.inOut'
    },'<');

    tl.to(secondItem , {
        ...animationProps ,
        ease : 'power2.inOut'
    },'<')
};
