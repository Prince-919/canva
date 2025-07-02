const Image = () => {
  return (
    <div className="grid grid-cols-2 gap-2 ">
      {Array(8)
        .fill("")
        .map((data, i) => {
          return (
            <div
              key={i}
              className="w-full h-[90px] rounded-sm overflow-hidden cursor-pointer"
            >
              <img
                className="w-full h-full object-fill rounded-md overflow-hidden"
                src="https://images.template.net/wp-content/uploads/2023/10/What-Is-a-Template-788x443.jpg"
                alt=""
              />
            </div>
          );
        })}
    </div>
  );
};

export default Image;
