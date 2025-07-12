const ToolButton = ({ label, icon: Icon, onClick, isActive }) => {
  return (
    <div
      onClick={onClick}
      className={`${
        isActive ? "bg-[#252627]" : ""
      } w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
    >
      <span className="text-2xl">
        <Icon />
      </span>
      <span className="text-[13px] font-medium">{label}</span>
    </div>
  );
};

export default ToolButton;
