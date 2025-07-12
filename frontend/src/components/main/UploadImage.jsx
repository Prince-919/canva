import Images from "../Images";

const UploadImage = () => {
  return (
    <div>
      <div className="w-full h-[40px] bg-purple-500 rounded-md flex justify-center items-center font-medium text-white tracking-tight mb-3">
        <label className="text-center cursor-pointer" htmlFor="image">
          Upload image
        </label>
        <input type="file" className="hidden" id="image" />
      </div>
      <div className="h-[80vh] overflow-x-auto flex justify-start items-start scrollbar-hide">
        <Images />
      </div>
    </div>
  );
};

export default UploadImage;
