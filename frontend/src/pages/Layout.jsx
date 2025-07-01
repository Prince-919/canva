import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsFolder, BsGrid1X2 } from "react-icons/bs";

const Layout = () => {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  return (
    <div className="bg-[#18191b] min-h-screen w-full">
      <div className="bg-[#252627] shadow-md fixed top-0 left-0 w-full z-20">
        <div className="w-[90%] py-4 m-auto">
          <div className="flex justify-between items-center">
            <h1 className="logo text-3xl font-semibold tracking-wide">
              Banavo
            </h1>
            <div className="flex justify-center items-center gap-4 relative">
              <button className="py-2 px-6 overflow-hidden text-center bg-[#8b3dff] text-white font-medium rounded-[3px] hover:bg-[#9553f8]">
                Create a Design
              </button>
              <div className="cursor-pointer" onClick={() => setShow(!show)}>
                <img
                  src="https://lh3.googleusercontent.com/-xWVwILwNwuA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkkQw_8mSPidWyUWcmlXJ8dFfMlJuA/photo.jpg?sz=46"
                  alt="profile"
                  className="w-[45px] h-[45px] rounded-full"
                />
              </div>
              <div
                className={`absolute right-0 top-[65px] w-[350px] bg-[#313030] p-3 border border-gray-700 transition-all duration-200 ${
                  show ? "visible opacity-100" : "invisible opacity-30"
                }`}
              >
                <div className="px-2 py-2 flex justify-start items-center gap-5">
                  <img
                    src="https://lh3.googleusercontent.com/-xWVwILwNwuA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkkQw_8mSPidWyUWcmlXJ8dFfMlJuA/photo.jpg?sz=46"
                    alt="profile"
                    className="w-[40px] h-[40px] rounded-full"
                  />
                  <div className="flex flex-col justify-center items-start">
                    <span className="font-bold text-[#e0dddd] text-lg">
                      Prince Sharma
                    </span>
                    <span className="font-medium text-[#c4c0c0] text-sm">
                      princesharmabbu001@gmail.com
                    </span>
                  </div>
                </div>
                <ul className="text-[#e0dddd] font-semibold">
                  <li>
                    <Link className="p-2">
                      <span>Setting</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="p-2">
                      <span>Logout</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex mt-16">
        <div className="sidebar w-[300px] p-5 h-[calc(100vh-70px)] fixed">
          <div className="px-2 py-2 flex justify-start items-center gap-5 mb-3">
            <img
              src="https://lh3.googleusercontent.com/-xWVwILwNwuA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkkQw_8mSPidWyUWcmlXJ8dFfMlJuA/photo.jpg?sz=46"
              alt="image"
              className="w-[40px] h-[40px] rounded-full"
            />
            <div className="flex justify-center items-start flex-col">
              <span className="text-[#e0dddd] font-bold text-lg">
                Prince Sharma
              </span>
              <span className="text-[#c4c0c0] text-sm font-medium">Free</span>
            </div>
          </div>

          <ul className="px-4 flex flex-col gap-2">
            <li>
              <Link
                className={`text-[#e0dddd] px-2 py-2 flex justify-start items-center gap-2 ${
                  pathname === "/" ? "bg-[#ffffff26]" : ""
                } rounded-[5px]`}
              >
                <span className="text-xl">
                  <FaHome />
                </span>
                <span className="font-medium">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`text-[#e0dddd] px-2 py-2 flex justify-start items-center gap-2 ${
                  pathname === "/projects" ? "bg-[#ffffff26]" : ""
                } rounded-[5px]`}
              >
                <span className="text-xl">
                  <BsFolder />
                </span>
                <span className="font-medium">Projects</span>
              </Link>
            </li>
            <li>
              <Link
                to="/templates"
                className={`text-[#e0dddd] px-2 py-2 flex justify-start items-center gap-2 ${
                  pathname === "/templates" ? "bg-[#ffffff26]" : ""
                } rounded-[5px]`}
              >
                <span className="text-xl">
                  <BsGrid1X2 />
                </span>
                <span className="font-medium">Templates</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="ml-[300px] w-[calc(100%-300px)]">
          <div className="py-4 pr-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
