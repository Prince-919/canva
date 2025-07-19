import { FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Item = ({ design, deleteDesign }) => {
  return (
    <div className="w-full h-[180px] px-2 relative group">
      <Link
        to={`design/${design._id}/edit`}
        className="w-full h-full block bg-[#323232] p-3 rounded-md"
      >
        <img
          className="w-full h-full object-fill rounded-[3px] overflow-hidden"
          src={design.imageUrl}
          alt=""
        />
      </Link>
      <div
        onClick={() => deleteDesign(design._id)}
        className="absolute hidden cursor-pointer top-1 right-2 text-red-500 p-2 transition-all duration-200 group-hover:block"
      >
        <FaTrash />
      </div>
    </div>
  );
};

export default Item;
