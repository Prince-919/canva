import { useEffect, useState } from "react";
import api from "../api/api";

const useFetchImages = () => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    try {
      const { data } = await api.get("/api/get-image");
      setImages(data.images);
    } catch (error) {
      console.log(error);
    }
  };
  getImages();
  useEffect(() => {
    getImages();
  }, []);
  return { images, getImages };
};

export default useFetchImages;
