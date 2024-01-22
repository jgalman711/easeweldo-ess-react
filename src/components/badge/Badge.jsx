const Badge = (props) => {
  const { state, label } = props;
  return (
    <div
      className={`w-24 text-center rounded-sm py-[5px] text-xs font-bold uppercase text-white transition duration-200 ${
        (state === "error" || state === "failed")
          ? "bg-red-500 dark:bg-red-400"
          : (state === "success" || state === "completed" || state === "approved")
          ? "bg-green-500 dark:bg-green-400"
          : state === "info"
          ? "bg-yellow-500 dark:bg-yellow-400"
          : "bg-blue-500 dark:bg-blue-400"
      }`}
    >
      { label }
    </div>
  );
};

export default Badge;
