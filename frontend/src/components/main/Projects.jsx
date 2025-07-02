import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="h-[88vh] overflow-x-auto flex justify-start items-start scrollbar-hide">
      <div className="grid grid-cols-2 gap-2 ">
        {Array(80)
          .fill("")
          .map((data, i) => {
            return (
              <Link
                key={i}
                className="w-full h-[90px] rounded-sm overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full object-fill rounded-md overflow-hidden"
                  src="https://images.template.net/wp-content/uploads/2023/10/What-Is-a-Template-788x443.jpg"
                  alt=""
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Projects;
