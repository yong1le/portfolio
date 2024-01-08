"use client";
import { animated, useSpringRef, useTransition } from "@react-spring/web";
import { useEffect, useState } from "react";

const Description = ({ descriptions }: { descriptions: string[] }) => {
  const [index, setIndex] = useState(0);

  const slideRef = useSpringRef();
  const slide = useTransition(index, {
    ref: slideRef,
    keys: null,
    from: { opacity: 0, transform: "scaleY(-1)" },
    enter: { opacity: 1, transform: "scaleY(1)" },
    // leave: { opacity: 0, transform: "scaleY" },
    config: {
      duration: 1000,
    },
    // exitBeforeEnter: true,
  });

  useEffect(() => {
    slideRef.start();

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % descriptions.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [index, slideRef, descriptions.length]);

  return (
    <div className="relative flex max-h-[50px] min-h-[50px] w-[350px] flex-row">
      {slide((style, item) => (
        <animated.div style={style} className="absolute">
          {descriptions[item]}
        </animated.div>
      ))}
    </div>
  );
};

export default Description;
