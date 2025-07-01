import { Link } from "react-router-dom";

const Header = () => {
  const saveImage = () => {};
  const downloadImage = () => {};

  return (
    <div className="h-[60px] bg-gradient-to-r from-[#212122] via-[#27282b] to-[#2a2b2c] w-full">
      <div className="flex justify-between items-center px-10 text-gray-300 h-full">
        <Link to={"/"}>
          <h1 className="logo text-3xl font-semibold tracking-wide">Banavo</h1>
        </Link>
        <span className="text-xl">Mini Banavo</span>
        <div className="flex items-center justify-center gap-2 text-gray-300">
          <button
            onClick={saveImage}
            className="px-3 py-[6px] bg-[#252627] rounded-sm outline-none"
          >
            Save
          </button>
          <button
            onClick={downloadImage}
            className="px-3 py-[6px] bg-[#252627] rounded-sm outline-none"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
