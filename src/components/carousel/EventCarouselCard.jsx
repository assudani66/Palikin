import { useNavigate } from "react-router-dom";

const EventCarouselCard = ({ eventName, groups, date, time, eventPage }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-96 h-56 bg-gradient-to-br from-orange-300 to-red-400 rounded-[40px] shadow-[0px 18px 32px 0px rgba(201, 127, 96, 0.42)] border-2 border-red-400 relative snap-start">
        <div className="absolute bottom-2 left-5  w-40  p-4 text-white">
          <div className="w-11 h-11 bg-white bg-opacity-10 rounded-2xl border border-white border-opacity-10 flex items-center justify-center text-2xl ">
            🎉
          </div>
          <p className="text-2xl font-medium 	 leading-tight">{eventName}</p>
          <p className="text-xs font-medium ">{groups}</p>
        </div>
        <div className="absolute top-10 right-10 ">
          <div className="w-20 h-11 bg-white bg-opacity-10 rounded-xl border border-white border-opacity-10 flex flex-col items-end justify-center text-white p-2 font-medium	">
            <p className="text-xs ">{date}</p>
            <p className="text-xs">{time}</p>
          </div>
        </div>
        <div
          className="absolute bottom-0 right-0 "
          onClick={() => navigate(eventPage)}
        >
          <div className="">
            <svg
              width="91"
              height="60"
              viewBox="0 0 91 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 22C0 9.84974 9.84974 0 22 0H91V20C91 42.0914 73.0914 60 51 60H0V22Z"
                fill="white"
                fillOpacity="0.13"
              />
              <path
                d="M1 22C1 10.402 10.402 1 22 1H90V20C90 41.5391 72.5391 59 51 59H1V22Z"
                stroke="white"
                strokeOpacity="0.09"
                strokeWidth="2"
              />
              <path
                d="M60.6519 32.6521C61.012 32.2921 61.012 31.7083 60.6519 31.3483L54.7847 25.4809C54.4246 25.1209 53.8409 25.1209 53.4808 25.4809C53.1208 25.841 53.1208 26.4247 53.4808 26.7848L58.6962 32.0002L53.4808 37.2155C53.1207 37.5755 53.1207 38.1593 53.4808 38.5193C53.8408 38.8794 54.4246 38.8794 54.7846 38.5194L60.6519 32.6521ZM29 32.922L60 32.9221L60 31.0782L29 31.078L29 32.922Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCarouselCard;
