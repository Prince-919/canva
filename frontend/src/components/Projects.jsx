import api from "../api/api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Item from "./home/Item";

const Projects = ({ type, design_id }) => {
  const [designs, setDesigns] = useState([]);

  const getDesigns = async () => {
    try {
      const { data } = await api.get("/api/designs");
      setDesigns(data.designs);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteDesign = async (design_id) => {
    try {
      const { data } = await api.delete(`/api/delete-image/${design_id}`);
      toast.success(data.message);
      getDesigns();
    } catch (error) {
      toast.success(error.response.data.message);
    }
  };

  useEffect(() => {
    getDesigns();
  }, []);
  return (
    <div className="h-[88vh] w-full flex justify-start items-start scrollbar-hide overflow-x-auto">
      <div
        className={`${
          type
            ? " grid grid-cols-2 gap-2 w-full mt-5"
            : "grid grid-cols-4 gap-2 w-full mt-5"
        }`}
      >
        {designs
          .filter((d) => !design_id || d._id !== design_id)
          .map((d) => {
            return (
              <Item
                key={d._id}
                design={d}
                deleteDesign={deleteDesign}
                type={type}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Projects;
