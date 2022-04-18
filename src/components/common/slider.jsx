import { useEffect, useRef, useState } from "react";
import _ from "lodash";
import { getVisibleHeightPx } from "../../util/util";

export default function Slider({ total, type }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const elementRef = useRef();
  const parentElement = useRef();
  
  const listenScrollEvent = () => {
    var element,
      viewportHeight = window.innerHeight,
      max = 0;

    total.forEach((solution, index) => {
      const elementDiv = document.getElementById(
        solution.title.replace(/[^a-z0-9]/gi, "")
      );
      var visiblePx = getVisibleHeightPx(elementDiv, viewportHeight);
      if (visiblePx > max) {
        max = visiblePx;
        element = index;
      }
    });
    setActiveIndex(element);
  };

  

  useEffect(() => {
    window.addEventListener("scroll", _.throttle(listenScrollEvent, 300));

    const middle = (window.innerHeight - elementRef.current.offsetHeight) / 2;
    parentElement.current.style.top = middle+"px";
  }, []);

  return (
    <div
      className={`position-sticky container d-lg-block d-none scroll-indicator ${type}`}
      ref={parentElement}
    >
      <div className="selectors" ref={elementRef}>
        {total.map((item, index) => {
          return (
            <a
              key={item.title}
              className={`selector ${index === activeIndex ? "active" : ""}`}
              href={`#${item.title.replace(/[^a-z0-9]/gi, "")}`}
            ></a>
          );
        })}
      </div>
    </div>
  );
}
