import { useState } from "react";
import { useEffect } from "react";
import api from "../api/api";
import Images from "./Images";

const InitialImage = ({ addImage }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const { data } = await api.get("/api/design-images");
        console.log(data);
        setImages(data.images);
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
  }, []);
  return <Images addImage={addImage} images={images} />;
};

export default InitialImage;
