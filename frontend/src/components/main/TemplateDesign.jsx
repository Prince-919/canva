const TemplateDesign = () => {
  return (
    <>
      {Array(8)
        .fill("")
        .map((data, i) => {
          return (
            <div className="w-full group rounded-md overflow-hidden bg-[#ffffff12] cursor-pointer">
              <img
                className="w-full h-full rounded-md overflow-hidden"
                key={i}
                src="https://images.template.net/wp-content/uploads/2023/10/What-Is-a-Template-788x443.jpg"
                alt=""
              />
            </div>
          );
        })}
    </>
  );
};

export default TemplateDesign;
