import { useState } from "react";
import { useEffect } from "react";
import api from "../api/api";
import Images from "./Images";

const BackgroundImages = ({ type, setImage }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getImages = async () => {
      try {
        const { data } = await api.get("/api/background-images");
        console.log(data);
        setImages(data.images);
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
  }, []);
  return <Images type={type} setImage={setImage} images={images} />;
};

export default BackgroundImages;
