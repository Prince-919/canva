const Shapes = () => {
  return (
    <>
      <div className="h-[90px] bg-[#3c3c3d] cursor-pointer"></div>
      <div className="h-[90px] bg-[#3c3c3d] cursor-pointer rounded-full"></div>
      <div
        className="h-[90px] bg-[#3c3c3d] cursor-pointer"
        style={{
          clipPath: "polygon(50% 0, 100% 100%, 0 100%)",
        }}
      ></div>
    </>
  );
};

export default Shapes;
