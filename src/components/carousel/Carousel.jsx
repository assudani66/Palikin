import { useRef, useState, useEffect } from "react";
import ScrollControlButton from "./ScrollControlButton";
import EventCarouselCard from "./EventCarouselCard";

export const Carousel = () => {
  const carouselRef = useRef(null);
  const [activeSnapPoint, setActiveSnapPoint] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft;
        if (scrollLeft >= 750) {
          setActiveSnapPoint(750);
        } else if (scrollLeft >= 400) {
          setActiveSnapPoint(400);
        } else {
          setActiveSnapPoint(0);
        }
      }
    };

    carouselRef.current.addEventListener("scroll", handleScroll);

    return () => {
      carouselRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (snapPoint) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = snapPoint;
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="flex space-x-4 w-[450px] overflow-scroll snap-x scroll-smooth scroll-proximity snap-mandatory cursor-grab"
        ref={carouselRef}
      >
        <EventCarouselCard />
        <EventCarouselCard />
        <EventCarouselCard />
      </div>
      <div className="flex  items-center space-x-2">
        <ScrollControlButton
          snapPoint={0}
          isActive={activeSnapPoint === 0}
          handleClick={handleScroll}
        />
        <ScrollControlButton
          snapPoint={400}
          isActive={activeSnapPoint === 400}
          handleClick={handleScroll}
        />
        <ScrollControlButton
          snapPoint={750}
          isActive={activeSnapPoint === 750}
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
};
