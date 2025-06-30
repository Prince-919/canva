import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Index = () => {
  const [type, setType] = useState("");
  const [show, setShow] = useState(false);
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div className="bg-[#18191b] w-full min-h-screen">
      <div
        className={`w-screen ${
          show ? "visible opacity-100" : "invisible opacity-30"
        } transition-all duration-200 h-screen fixed bg-[#252627ad] flex justify-center items-center`}
      >
        <div className="w-[750px] bg-[#323335] m-auto rounded-xl relative">
          <div
            className="absolute -right-12 -top-1 bg-[#323335] p-2 rounded-full text-white cursor-pointer text-xl"
            onClick={() => setShow(false)}
          >
            <IoMdClose />
          </div>
          <div className="flex">
            <div className="w-[50%] p-8">
              <h2 className="text-[22px] text-white mb-4 text-pretty font-semibold">
                Log in or sign up in seconds
              </h2>
              <p className="text-[#c5c5c5] text-pretty text-sm mb-4">
                Use your email or another service to continue with Canva (it’s
                free)!
              </p>
              {type === "login" && (
                <form>
                  <div className="flex flex-col gap-3 mb-3 text-white">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={state.email}
                      className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] hover:border-purple-500 bg-transparent"
                    />
                  </div>
                  <div className="flex flex-col gap-3 mb-3 text-white">
                    <label htmlFor="password">Password</label>
                    <input
                      type="text"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={state.password}
                      className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] hover:border-purple-500 bg-transparent"
                    />
                  </div>
                  <div>
                    <button className="w-full px-3 py-2 bg-purple-500 rounded-md hover:bg-purple-600 outline-none text-white">
                      Log in
                    </button>
                  </div>
                  <div className="flex py-4 px-3 justify-between items-center">
                    <div className="w-[45%] h-[1px] bg-[#434449]"></div>
                    <div className="w-[6%] text-center flex pb-1 pl-1 text-white">
                      or
                    </div>
                    <div className="w-[45%] h-[1px] bg-[#434449]"></div>
                  </div>
                  <div className="pb-4">
                    <button className="w-full px-3 flex justify-center items-center py-2 gap-2 rounded-md bg-orange-700 hover:bg-orange-800 text-white outline-none">
                      <span>
                        <AiOutlineGoogle />
                      </span>
                      <span>Continue with Google</span>
                    </button>
                  </div>
                  <div className="pb-4">
                    <button className="w-full px-3 flex justify-center items-center py-2 gap-2 rounded-md bg-blue-700 hover:bg-blue-800 text-white outline-none">
                      <span>
                        <FaFacebookF />
                      </span>
                      <span>Continue with Facebook</span>
                    </button>
                  </div>
                </form>
              )}
              {type === "signup" && (
                <form>
                  <div className="flex flex-col gap-3 mb-3 text-white">
                    <label htmlFor="name">Name</label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={state.name}
                      className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] hover:border-purple-500 bg-transparent"
                    />
                  </div>
                  <div className="flex flex-col gap-3 mb-3 text-white">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={state.email}
                      className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] hover:border-purple-500 bg-transparent"
                    />
                  </div>
                  <div className="flex flex-col gap-3 mb-3 text-white">
                    <label htmlFor="password">Password</label>
                    <input
                      type="text"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={state.password}
                      className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] hover:border-purple-500 bg-transparent"
                    />
                  </div>
                  <div>
                    <button className="w-full px-3 py-2 bg-purple-500 rounded-md hover:bg-purple-600 outline-none text-white">
                      Log in
                    </button>
                  </div>
                  <div className="flex py-4 px-3 justify-between items-center">
                    <div className="w-[45%] h-[1px] bg-[#434449]"></div>
                    <div className="w-[6%] text-center flex pb-1 pl-1 text-white">
                      or
                    </div>
                    <div className="w-[45%] h-[1px] bg-[#434449]"></div>
                  </div>
                  <div className="pb-4">
                    <button className="w-full px-3 flex justify-center items-center py-2 gap-2 rounded-md bg-orange-700 hover:bg-orange-800 text-white outline-none">
                      <span>
                        <AiOutlineGoogle />
                      </span>
                      <span>Continue with Google</span>
                    </button>
                  </div>
                  <div className="pb-4">
                    <button className="w-full px-3 flex justify-center items-center py-2 gap-2 rounded-md bg-blue-700 hover:bg-blue-800 text-white outline-none">
                      <span>
                        <FaFacebookF />
                      </span>
                      <span>Continue with Facebook</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
            <div className="w-[50%]">
              <img
                src="https://static.canva.com/authenticating/auth_dialog/auth_dialog_en.jpg"
                alt="image"
                className="w-full h-full object-cover rounded-tr-xl rounded-br-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#252627] shadow-md">
        <div className="w-[95%] py-4 m-auto">
          <div className="flex justify-between items-center">
            {/* <div className="h-[48px] w-[80px]">
              <img
                src="https://1000logos.net/wp-content/uploads/2023/02/Canva-logo-768x432.png"
                alt="logo"
                className="w-full h-full"
              />
            </div> */}
            <h1 className="logo text-3xl font-semibold tracking-wide">
              Banavo
            </h1>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setType("login");
                  setShow(true);
                }}
                className="bg-blue-500 py-2 w-[80px] text-center text-white transition-all hover:bg-blue-600 rounded-[5px]"
              >
                Log in
              </button>
              <button
                onClick={() => {
                  setType("signup");
                  setShow(true);
                }}
                className="bg-purple-500 py-2 w-[80px] text-center text-white transition-all hover:bg-purple-600 rounded-[5px]"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full justify-center items-center p-4">
        <div className="py-[80px] flex justify-center items-center gap-6 flex-col">
          <h2 className="text-[80px] text-[#c7c5c5]">
            Where heart meets <span className="art font-normal">art</span>.
          </h2>
          <span className="text-2xl text-[#aca9a9] font-normal mb-6">
            Banavo makes it easy to create and share professional designs.
          </span>
          <button
            onClick={() => {
              setType("signup");
              setShow(true);
            }}
            className="bg-purple-500 py-2 w-[200px] text-center text-white transition-all hover:bg-purple-600 rounded-[5px] font-semibold text-sm"
          >
            Start designing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
