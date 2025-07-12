const Shapes = ({ createShape }) => {
  return (
    <>
      <div
        onClick={() => createShape("shape", "rect")}
        className="h-[90px] bg-[#3c3c3d] cursor-pointer"
      ></div>
      <div
        onClick={() => createShape("shape", "circle")}
        className="h-[90px] bg-[#3c3c3d] cursor-pointer rounded-full"
      ></div>
      <div
        onClick={() => createShape("shape", "trangle")}
        className="h-[90px] bg-[#3c3c3d] cursor-pointer"
        style={{
          clipPath: "polygon(50% 0, 100% 100%, 0 100%)",
        }}
      ></div>
    </>
  );
};

export default Shapes;
