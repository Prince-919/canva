import Images from "./Images";
import { useFetchBackgroundImages } from "../hooks";

const BackgroundImages = ({ type, setImage }) => {
  const { images } = useFetchBackgroundImages();
  return <Images type={type} setImage={setImage} images={images} />;
};

export default BackgroundImages;
