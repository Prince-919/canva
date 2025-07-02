const Shapes = ({ createShape }) => {
  return (
    <>
      <div
        onClick={() => createShape("shape", "square")}
        className="h-[90px] bg-[#3c3c3d] cursor-pointer"
      ></div>
      <div
        onClick={() => createShape("shape", "circle")}
        className="h-[90px] bg-[#3c3c3d] rounded-full cursor-pointer"
      ></div>
      <div
        onClick={() => createShape("shape", "trangle")}
        className="triangle h-[90px] bg-[#3c3c3d] cursor-pointer"
      ></div>
    </>
  );
};

export default Shapes;
