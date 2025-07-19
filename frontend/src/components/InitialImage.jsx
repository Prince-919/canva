import Images from "./Images";
import { useFetchBackgroundImages } from "../hooks";

const InitialImage = ({ addImage }) => {
  const { images } = useFetchBackgroundImages();
  return <Images addImage={addImage} images={images} />;
};

export default InitialImage;
