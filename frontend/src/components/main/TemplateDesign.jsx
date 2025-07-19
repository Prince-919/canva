import { useEffect, useState } from "react";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";

const TemplateDesign = ({ type }) => {
  const navigate = useNavigate();
  const [templates, setTemplates] = useState([]);
  useEffect(() => {
    const getTemplates = async () => {
      try {
        const { data } = await api.get("/api/templates");

        setTemplates(data.templates);
      } catch (error) {
        console.log(error);
      }
    };
    getTemplates();
  }, []);

  const addTemplate = async (id) => {
    try {
      const { data } = await api.get(`/api/add-template/${id}`);
      navigate(`/design/${data.design?._id}/edit`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={`grid gap-2 ${type ? "grid-cols-2" : "grid-cols-4"} mt-5`}>
      {templates.map((design, i) => {
        return (
          <div
            onClick={() => {
              addTemplate(design._id);
            }}
            key={i}
            className={`relative group w-full cursor-pointer ${
              type ? "h-[100px]" : "h-[180px] px-2"
            }`}
          >
            <div
              className={`w-full h-full block overflow-hidden rounded-sm bg-[#ffffff12] ${
                type ? "" : "p-3"
              }`}
            >
              <img
                className="w-full h-full rounded-sm object-fill"
                src={design.imageUrl}
                alt=""
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TemplateDesign;
