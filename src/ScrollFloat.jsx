import React, { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollFloat.css";

gsap.registerPlugin(ScrollTrigger);

// Рекурсивно разбивает ReactNode на символы, оборачивая каждый в span.char
function splitNodeToChars(node, keyPrefix = "") {
  if (typeof node === "string") {
    return node.split("").map((char, i) => (
      <span className="char" key={keyPrefix + i}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }
  if (React.isValidElement(node)) {
    return React.cloneElement(
      node,
      { key: keyPrefix + (node.key || "el") },
      React.Children.map(node.props.children, (child, i) =>
        splitNodeToChars(child, keyPrefix + i + "-")
      )
    );
  }
  // если это массив или что-то ещё
  if (Array.isArray(node)) {
    return node.map((child, i) => splitNodeToChars(child, keyPrefix + i + "-"));
  }
  return null;
}

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => splitNodeToChars(children), [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const charElements = el.querySelectorAll(".char");

    gsap.fromTo(
      charElements,
      {
        willChange: "opacity, transform",
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: "50% 0%"
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true
        },
      }
    );
  }, [
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger
  ]);

  return (
    <h2 ref={containerRef} className={`scroll-float ${containerClassName}`}>
      <span className={`scroll-float-text ${textClassName}`}>{splitText}</span>
    </h2>
  );
};

export default ScrollFloat; 