const Background = () => {
  return (
    <div className="h-[88vh] w-full flex justify-start items-start scrollbar-hide overflow-x-auto">
      <div className="grid grid-cols-2 gap-2">
        {Array(18)
          .fill("")
          .map((design, i) => {
            return (
              <div
                key={i}
                className="group rounded-md overflow-hidden w-full h-[90px] bg-[#fff] cursor-pointer"
              >
                <img
                  className="w-full h-full object-fill"
                  src="https://marketplace.canva.com/EAGXZ8Q5-Ss/1/0/1600w/canva-blue-white-modern-3d-space-group-project-presentation-N6v-F93vWDc.jpg"
                  alt=""
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Background;
