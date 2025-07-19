import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { BsGrid1X2, BsGrid1X2Fill } from "react-icons/bs";
import { FaRegFolderClosed, FaRegFolderOpen } from "react-icons/fa6";
import { GoHome, GoHomeFill } from "react-icons/go";
import { AVATAR_IMAGE, MAIN_LOGO } from "../utils/constants";

const Layout = () => {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const create = (e) => {
    e.preventDefault();
    navigate("/design/create", {
      state: {
        type: "create",
        width: 600,
        height: 450,
      },
    });
  };

  const logout = () => {
    localStorage.removeItem("canva_token");
    window.location.href = "/";
  };

  return (
    <div className="bg-[#18191b] min-h-screen w-full">
      <div className="bg-[#212223] shadow-md fixed left-0 top-0 w-full z-20">
        <div className="w-[93%] m-auto py-3">
          <div className="flex justify-between items-center">
            <div className="w-[100px] h-[48px]">
              <img
                className="w-full h-full object-cover"
                src={MAIN_LOGO}
                alt="logo"
              />
            </div>
            <div className="flex justify-between items-center gap-4 relative">
              <button
                onClick={create}
                className="py-2 px-4 overflow-hidden text-center text-white bg-purple-500 hover:bg-purple-600 transition-all duration-200 rounded-[3px] font-medium tracking-tight"
              >
                Create a Design
              </button>
              <div
                onClick={() => setShow(!show)}
                className="cursor-pointer h-12 w-12"
              >
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={AVATAR_IMAGE}
                  alt=""
                />
              </div>

              <div
                className={`absolute top-[60px] right-0 w-[350px] bg-[#313030] p-3 border border-gray-700 transition-all duration-200 ${
                  show ? "visible opacity-100" : "invisible opacity-30"
                }`}
              >
                <div className="px-2 py-2 flex justify-start items-center gap-5">
                  <div className="cursor-pointer h-12 w-12">
                    <img
                      className="w-full h-full object-cover rounded-full"
                      src={AVATAR_IMAGE}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-center items-start flex-col">
                    <span className="text-[#e0dddd] font-bold text-md">
                      Prince Sharma
                    </span>
                    <span className="text-[#d2d2d2] font-medium text-sm">
                      princesharmabbu001@gmail.com
                    </span>
                  </div>
                </div>
                <ul className="text-[#e0dddd] font-semibold mt-2">
                  <li>
                    <Link className="p-2 cursor-pointer hover:text-purple-500 transition-all duration-100">
                      Settings
                    </Link>
                  </li>
                  <li>
                    <div
                      onClick={logout}
                      className="p-2 cursor-pointer hover:text-purple-500 transition-all duration-100"
                    >
                      Logout
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex pt-16">
        <div className="sidebar w-[300px] p-5 h-[calc(100vh-70px)] fixed">
          <div className="px-2 py-2 flex justify-start items-center gap-5 mb-3">
            <div className="cursor-pointer h-12 w-12">
              <img
                className="w-full h-full object-cover rounded-full"
                src={AVATAR_IMAGE}
                alt=""
              />
            </div>
            <div className="flex justify-center items-start flex-col">
              <span className="text-[#e0dddd] font-bold text-md">
                Prince Sharma
              </span>
              <span className="text-[#d2d2d2] font-medium text-sm">Free</span>
            </div>
          </div>
          <ul className="px-4 flex flex-col gap-2">
            <li>
              <Link
                to={"/"}
                className={`px-2 py-2 flex justify-start items-center gap-2 text-[#e0dddd] ${
                  pathname === "/" ? "bg-[#212529]" : ""
                } rounded-[5px]`}
              >
                <span className="text-xl">
                  {pathname === "/" ? <GoHomeFill /> : <GoHome />}
                </span>
                <span className="font-medium">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/projects"}
                className={`px-2 py-2 flex justify-start items-center gap-2 text-[#e0dddd] ${
                  pathname === "/projects" ? "bg-[#212529]" : ""
                } rounded-[5px]`}
              >
                <span className="text-xl">
                  {pathname === "/projects" ? (
                    <FaRegFolderOpen />
                  ) : (
                    <FaRegFolderClosed />
                  )}
                </span>
                <span className="font-medium">Projects</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/templates"}
                className={`px-2 py-2 flex justify-start items-center gap-2 text-[#e0dddd] ${
                  pathname === "/templates" ? "bg-[#212529]" : ""
                } rounded-[5px]`}
              >
                <span className="text-xl">
                  {pathname === "/templates" ? (
                    <BsGrid1X2Fill />
                  ) : (
                    <BsGrid1X2 />
                  )}
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
