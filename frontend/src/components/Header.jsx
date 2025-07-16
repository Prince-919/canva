import { Link } from "react-router-dom";
import * as htmlToImage from "html-to-image";
const Header = () => {
  const downloadImage = async () => {
    const getDiv = document.getElementById("main_design");
    const dataUrl = await htmlToImage.toPng(getDiv, {
      style: {
        transform: "scale(1)",
      },
    });
    var link = document.createElement("a");
    link.download = "image";
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-[60px] w-full bg-gradient-to-r from-[#212122] via-[#27282b] to-[#2a2b2c]">
      <div className="h-full flex justify-between items-center px-10 text-gray-400">
        <Link to={"/"}>
          <div className="w-[100px] h-[48px]">
            <img
              className="w-full h-full object-cover"
              src="http://localhost:5173/public/main-logo.png"
              alt="logo"
            />
          </div>
        </Link>
        <div className="flex justify-center items-center text-[#efefef] gap-2">
          <button className="px-2 py-[6px] bg-[rgba(3,188,206,1)] hover:opacity-95 rounded-sm">
            Save
          </button>
          <button
            onClick={downloadImage}
            className="px-2 py-[6px] bg-[rgba(123,42,232,1)] hover:opacity-95 rounded-sm"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
