import { useRef, useState, useEffect } from "react";
import ScrollControlButton from "./ScrollControlButton";
import EventCarouselCard from "./EventCarouselCard";
const events = [
  {
    eventName: "Kubuntu Party",
    groups: "4 groups",
    date: "21-11-2023",
    time: "4:00PM",
    eventPage: "events/page",
    style:"bg-gradient-to-br from-orange-300 to-red-400 border-red-400 shadow-orange-300"
  },
  {
    eventName: "Tech Conference",
    groups: "8 groups",
    date: "15-12-2023",
    time: "9:30AM",
    eventPage: "events/page",
    style:"bg-gradient-to-br from-sky-400 to-indigo-700 border-indigo-700 shadow-sky-200"
  },
  {
    eventName: "Art Exhibition",
    groups: "2 groups",
    date: "05-01-2024",
    time: "2:00PM",
    eventPage: "events/page",
    style:"bg-gradient-to-br from-[#CB88FF] to-[#8144A6] border-[#8144A6] shadow-purple-400"
  },
];

export const Carousel = () => {
  const carouselRef = useRef(null);
  const [activeSnapPoint, setActiveSnapPoint] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft;
        if (scrollLeft >= 700) {
          setActiveSnapPoint(750);
        } else if (scrollLeft >= 400) {
          setActiveSnapPoint(400);
        } else {
          setActiveSnapPoint(0);
        }
      }
    };

    carouselRef.current.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (snapPoint) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = snapPoint;
    }
  };

  return (
    <div className="flex flex-col items-center -mt-12 pl-14">
      <div
        className="flex space-x-4 w-[450px] pb-8 px-16 overflow-scroll snap-x scroll-smooth scroll-proximity snap-mandatory cursor-grab"
        ref={carouselRef}
      >
        {events.map((event, index) => (
          <EventCarouselCard key={index} {...event} />
        ))}
      </div>
      <div className="flex  items-center space-x-2 pt-2">
        <ScrollControlButton
          snapPoint={0}
          isActive={activeSnapPoint === 0}
          handleClick={handleScroll}
          activeColor="bg-orange-300"
        />
        <ScrollControlButton
          snapPoint={400}
          isActive={activeSnapPoint === 400}
          handleClick={handleScroll}
          activeColor="bg-blue-500"
        />
        <ScrollControlButton
          snapPoint={750}
          isActive={activeSnapPoint === 750}
          handleClick={handleScroll}
          activeColor="bg-violet-500"
        />
      </div>
    </div>
  );
};
