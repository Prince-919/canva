import { useEffect, useState } from "react";
import api from "../api/api";

const useFetchTemplates = () => {
  const [templates, setTemplates] = useState([]);
  const getTemplates = async () => {
    try {
      const { data } = await api.get("/api/templates");
      setTemplates(data.templates);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTemplates();
  }, []);
  return { templates, getTemplates };
};
export default useFetchTemplates;
