const TemplateDesign = () => {
  return (
    <>
      {Array(8)
        .fill("")
        .map((design, i) => {
          return (
            <div className="group rounded-md overflow-hidden w-full bg-[#fff] cursor-pointer">
              <img
                className="w-full h-full"
                src="https://marketplace.canva.com/EAGXZ8Q5-Ss/1/0/1600w/canva-blue-white-modern-3d-space-group-project-presentation-N6v-F93vWDc.jpg"
                alt=""
              />
            </div>
          );
        })}
    </>
  );
};

export default TemplateDesign;
