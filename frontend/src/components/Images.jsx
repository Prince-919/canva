const Images = ({ addImage, images, type, setImage }) => {
  return (
    <div className={`grid grid-cols-2 gap-2`}>
      {images.map((item, i) => (
        <div
          onClick={() =>
            type === "background"
              ? setImage(item.imageUrl)
              : addImage(item.imageUrl)
          }
          key={i}
          className="rounded-sm overflow-hidden w-full h-[90px] cursor-pointer"
        >
          <img
            className="w-full h-full object-fill"
            src={item.imageUrl}
            alt="image"
          />
        </div>
      ))}
    </div>
  );
};

export default Images;
