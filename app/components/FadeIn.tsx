"use client";

import { useSpring, animated } from "@react-spring/web";
import { InView } from "react-intersection-observer";

const FadeIn = ({ children }: { children: React.ReactNode }) => {
  const [fade, api] = useSpring(() => ({
    from: { opacity: 0, transform: `translate(0, 0%)` },
  }));

  const handleViewChange = (
    inView: boolean,
    entry: IntersectionObserverEntry,
  ) => {
    let fadeDir;

    console.log(entry.boundingClientRect.y);
    if (0 > entry.boundingClientRect.y) {
      fadeDir = "-50%";
    } else {
      fadeDir = "50%";
    }

    if (inView) {
      api.start({
        from: { opacity: 0, transform: `translate(0,${fadeDir})` },
        to: { opacity: 1, transform: "translate(0, 0%)" },
        config: { duration: 700 },
      });
    } else {
      api.start({
        from: { opacity: 1, transform: "translate(0, 0%)" },
        to: { opacity: 0, transform: `translate(0, ${fadeDir})` },
        config: { duration: 700 },
      });
    }
  };

  return (
    <InView as="div" onChange={handleViewChange} threshold={0.4}>
      <animated.div style={fade}>{children}</animated.div>
    </InView>
  );
};

export default FadeIn;
