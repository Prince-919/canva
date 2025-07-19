import { useEffect, useState } from "react";
import api from "../api/api";

const useFetchBackgroundImages = () => {
  const [images, setImages] = useState([]);
  const getImages = async () => {
    try {
      const { data } = await api.get("/api/background-images");
      console.log(data);
      setImages(data.images);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getImages();
  }, []);
  return { images, getImages };
};

export default useFetchBackgroundImages;
