import { useState } from "react";
import Images from "../Images";
import { BarLoader } from "react-spinners";
import api from "../../api/api";
import toast from "react-hot-toast";
import { useEffect } from "react";

const UploadImage = ({ addImage }) => {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);

  const imageUpload = async (e) => {
    if (e.target.files.length > 0) {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      try {
        setLoader(true);
        const { data } = await api.post(`/api/add-image`, formData);
        setImages([...images, data.userImage]);
        setLoader(false);
      } catch (error) {
        setLoader(false);
        toast.error(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    const getImages = async () => {
      try {
        const { data } = await api.get("/api/get-image");
        setImages(data.images);
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
  }, []);

  return (
    <div>
      <div className="w-full h-[40px] bg-purple-500 rounded-md flex justify-center items-center font-medium text-white tracking-tight mb-3">
        <label className="text-center cursor-pointer" htmlFor="image">
          Upload image
        </label>
        <input
          readOnly={loader}
          onChange={imageUpload}
          type="file"
          className="hidden"
          id="image"
        />
      </div>
      {loader ? (
        <div className="flex justify-center items-center mb-2">
          <BarLoader color="#fff" />
        </div>
      ) : (
        ""
      )}
      <div className="h-[80vh] overflow-x-auto flex justify-start items-start scrollbar-hide">
        <Images addImage={addImage} images={images} />
      </div>
    </div>
  );
};

export default UploadImage;
