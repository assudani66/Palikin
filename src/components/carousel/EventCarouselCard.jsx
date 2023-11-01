const EventCarouselCard = () => {
  return (
    <div>
      <div className="w-96 h-56 bg-gradient-to-br from-orange-300 to-red-400 rounded-3xl shadow-[0px 18px 32px 0px rgba(201, 127, 96, 0.42)] border-2 border-red-400 relative snap-start">
        <div className="absolute bottom-2 left-5  w-40  p-4 text-white">
          <div className="w-11 h-11 bg-white bg-opacity-10 rounded-2xl border border-white border-opacity-10 flex items-center justify-center text-2xl ">
            🎉
          </div>
          <p className="text-2xl font-medium 	 leading-tight">Kubuntu's Party</p>
          <p className="text-xs font-medium ">4 Groups</p>
        </div>
        <div className="absolute top-10 right-10 ">
          <div className="w-20 h-11 bg-white bg-opacity-10 rounded-xl border border-white border-opacity-10 flex flex-col items-end justify-center text-white p-2 font-medium	">
            <p className="text-xs ">21-11-2023</p>
            <p className="text-xs">4:00PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCarouselCard;
