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
