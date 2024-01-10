"use client";

import { useSpring, animated } from "@react-spring/web";
import { isMobile } from "react-device-detect";
import { InView } from "react-intersection-observer";

const FadeIn = ({ children }: { children: React.ReactNode }) => {
  const [fade, api] = useSpring(() => ({
    from: {
      opacity: isMobile ? 1 : 0,
      transform: isMobile ? "" : `translate(0, 0%)`,
    },
  }));

  const handleViewChange = (
    inView: boolean,
    entry: IntersectionObserverEntry,
  ) => {
    let fadeDir;
    if (0 > entry.boundingClientRect.y) {
      fadeDir = "-50%";
    } else {
      fadeDir = "50%";
    }

    if (inView) {
      api.start({
        from: { opacity: 0, transform: `translate(0,${fadeDir})` },
        to: { opacity: 1, transform: "translate(0, 0%)" },
        config: { duration: 600 },
      });
    } else {
      api.start({
        from: { opacity: 1, transform: "translate(0, 0%)" },
        to: { opacity: 0, transform: `translate(0, ${fadeDir})` },
        config: { duration: 300 },
      });
    }
  };

  return (
    <InView
      as="div"
      onChange={(inView, entry) => {
        if (!isMobile) {
          handleViewChange(inView, entry);
        }
      }}
      threshold={0.4}
    >
      <animated.div style={fade}>{children}</animated.div>
    </InView>
  );
};

export default FadeIn;
