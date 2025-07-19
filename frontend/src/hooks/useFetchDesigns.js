import { useEffect, useState } from "react";
import api from "../api/api";

const useFetchDesigns = () => {
  const [designs, setDesigns] = useState([]);
  const getDesigns = async () => {
    try {
      const { data } = await api.get("/api/designs");
      setDesigns(data.designs);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDesigns();
  }, []);
  return { designs, getDesigns };
};

export default useFetchDesigns;
