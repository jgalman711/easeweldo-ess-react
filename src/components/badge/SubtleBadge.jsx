const SubtleBadge = (props) => {
  const { state, label } = props;
  return (
    <div
      className={`w-24 text-center rounded-lg py-[5px] text-sm font-bold uppercase transition duration-200 dark:!bg-navy-700 ${
        (state === "error" || state === "failed" || state === "absent")
          ? "text-red-500 bg-red-100"
          : (state === "success" || state === "completed" || state === "approved" || state === "on-time")
          ? "text-green-500 bg-green-100"
          : (state === "info" || state === "to-pay" || state === "late" || state === "missed")
          ? "text-yellow-500 bg-yellow-100"
          : "text-blue-500 bg-blue-100"
      }`}
    >
      { label }
    </div>
  );
};

export default SubtleBadge;
