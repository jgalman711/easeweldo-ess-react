import Card from "components/card";

const Widget = ({ icon, title, subtitle, extraClass='' }) => {
  return (
    <Card extra={`!flex-row flex-grow items-center rounded-[20px] ${extraClass}`}>
      <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
        <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
          <span className="flex items-center text-brand-500 dark:text-white">
            {icon}
          </span>
        </div>
      </div>

      <div className="h-50 ml-4 flex w-auto flex-col justify-center">
        <p className="font-dm text-md font-medium text-gray-700">{title}</p>
        <h4 className="text-xl font-semibold text-navy-700 dark:text-white">
          {subtitle}
        </h4>
      </div>
    </Card>
  );
};

export default Widget;
