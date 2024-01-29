import eslogo from "assets/img/layout/easeweldo-workhub.png";

const FreeCard = () => {
  return (
    <div className="relative mt-14 flex w-[256px] justify-center rounded-[20px] pb-4">
      <div className="mt-1 flex h-fit flex-col items-center">
        <p className="text-lg font-bold text-gray-600 dark:text-white">Powered By</p>
        {/* <p className="mt-1 px-4 text-center text-sm text-white">
          Improve your development process and start doing more with Horizon UI
          PRO!
        </p> */}
        <img
          className="mt-4 h-11"
          src={eslogo}
          alt="Easeweldo Logo"
        />
      </div>
    </div>
  );
};

export default FreeCard;
