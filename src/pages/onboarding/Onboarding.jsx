import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();

  const onboardingImages = [
    { illustration: "/community.png", bg: "bg-[#6E42B3]" },
    { illustration: "/Qr.png", bg: "bg-[#568B9D]" },
    {
      illustration: "/Friend.png",
      bg: "bg-gradient-to-r from-blue-500 to-blue-400",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const onClickHandler = () => {
    setCurrentImage((currentImage) => currentImage + 1);
    if (currentImage > 1) {
      navigate("/communities");
    }
  };
  return (
    <div
      className={`flex flex-col width-full h-screen items-center justify-center pt-20 bg-cover ${onboardingImages[currentImage].bg}`}
    >
      <img
        className="max-w-[430px]"
        src={[onboardingImages[currentImage].illustration]}
      ></img>
      <button
        className="w-80 h-14 px-36 py-5 bg-teal-600 rounded justify-center items-center gap-2.5 inline-flex absolute bottom-20 shadow-md"
        onClick={() => onClickHandler()}
      >
        <div className="text-orange-50 text-xl font-bold font-Lato">Next</div>
      </button>
    </div>
  );
};

export default Onboarding;
