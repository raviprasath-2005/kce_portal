import { useLottie } from "lottie-react";
import loadingAnimation from "../assets/loading.json";

const Loader = () => {
  const options = {
    animationData: loadingAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="w-40 h-40">
        {View}
      </div>
    </div>
  );
};

export default Loader;