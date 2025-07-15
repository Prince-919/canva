import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import api from "../api/api";

const Index = () => {
  const [type, setType] = useState("");
  const [show, setShow] = useState(false);
  const [loader, setLoader] = useState(false);
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const { data } = await api.post("/api/register", state);
      setLoader(false);
      localStorage.setItem("canva_token", data.token);
      setState({
        name: "",
        email: "",
        password: "",
      });
      window.location.href = "/";
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };

  return (
    <div className="bg-[#18191b] min-h-screen w-full">
      <div
        className={`w-screen ${
          show ? "visible opacity-100" : "invisible opacity-30"
        } transition-all duration-200 h-screen fixed bg-[#252627ad] flex justify-center items-center`}
      >
        <div className="w-[768px] bg-[#323335] m-auto rounded-lg relative flex">
          <div
            onClick={() => setShow(false)}
            className="absolute -right-9 -top-1 text-lg bg-[#323335] cursor-pointer text-white p-[6px] rounded-full"
          >
            <RxCross2 />
          </div>

          <div className="w-[50%] px-6 py-4">
            <h2 className="text-white text-2xl font-medium py-4">
              Log in or sign up in seconds
            </h2>
            <p className="text-[15px] text-white/75 mb-3">
              Use your email or another service to continue with Canva (it’s
              free)!
            </p>
            {type === "login" && (
              <form>
                <div className="flex flex-col gap-2 mb-3 text-white">
                  <label htmlFor="email">Email</label>
                  <input
                    className="px-3 py-2 bg-transparent rounded-md border-[#5c5c5e] border outline-none focus:border-purple-500"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={state.email}
                    onChange={inputHandler}
                  />
                </div>
                <div className="flex flex-col gap-2 mb-3 text-white">
                  <label htmlFor="password">Password</label>
                  <input
                    className="px-3 py-2 bg-transparent rounded-md border-[#5c5c5e] border outline-none focus:border-purple-500"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={inputHandler}
                  />
                </div>
                <div>
                  <button
                    disabled={loader}
                    className="py-2 px-3 w-full bg-purple-500 text-white hover:bg-purple-600 rounded-md font-medium"
                  >
                    {loader ? "Loading.." : "Log in"}
                  </button>
                </div>
                <div className="flex py-4 justify-between items-center px-3">
                  <div className="w-[45%] h-[0.5px] bg-[#5c5c5e]"></div>
                  <div className="text-[#dee2e6] w-[5%]">or</div>
                  <div className="w-[45%] h-[0.5px] bg-[#5c5c5e]"></div>
                </div>
                <div className="pb-4">
                  <button className="flex justify-center items-center gap-2 py-2 px-3 w-full bg-red-500 text-white hover:bg-red-600 rounded-md font-medium">
                    <span>
                      <FaGoogle />
                    </span>
                    <span>Continue with Google</span>
                  </button>
                </div>
                <div className="pb-4">
                  <button className="flex justify-center items-center gap-2 py-2 px-3 w-full bg-blue-500 text-white hover:bg-blue-600 rounded-md font-medium">
                    <span>
                      <FaFacebookF />
                    </span>
                    <span>Continue with Facebook</span>
                  </button>
                </div>
              </form>
            )}
            {type === "signup" && (
              <form onSubmit={register}>
                <div className="flex flex-col gap-2 mb-3 text-white">
                  <label htmlFor="name">Name</label>
                  <input
                    className="px-3 py-2 bg-transparent rounded-md border-[#5c5c5e] border outline-none focus:border-purple-500"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={state.name}
                    onChange={inputHandler}
                  />
                </div>
                <div className="flex flex-col gap-2 mb-3 text-white">
                  <label htmlFor="email">Email</label>
                  <input
                    className="px-3 py-2 bg-transparent rounded-md border-[#5c5c5e] border outline-none focus:border-purple-500"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={state.email}
                    onChange={inputHandler}
                  />
                </div>
                <div className="flex flex-col gap-2 mb-3 text-white">
                  <label htmlFor="password">Password</label>
                  <input
                    className="px-3 py-2 bg-transparent rounded-md border-[#5c5c5e] border outline-none focus:border-purple-500"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={inputHandler}
                  />
                </div>
                <div>
                  <button
                    disabled={loader}
                    className="py-2 px-3 w-full bg-purple-500 text-white hover:bg-purple-600 rounded-md font-medium"
                  >
                    {loader ? "Loading.." : "Sign up"}
                  </button>
                </div>
                <div className="flex py-4 justify-between items-center px-3">
                  <div className="w-[45%] h-[0.5px] bg-[#5c5c5e]"></div>
                  <div className="text-[#dee2e6] w-[5%]">or</div>
                  <div className="w-[45%] h-[0.5px] bg-[#5c5c5e]"></div>
                </div>
                <div className="pb-4">
                  <button className="flex justify-center items-center gap-2 py-2 px-3 w-full bg-red-500 text-white hover:bg-red-600 rounded-md font-medium">
                    <span>
                      <FaGoogle />
                    </span>
                    <span>Continue with Google</span>
                  </button>
                </div>
                <div className="pb-4">
                  <button className="flex justify-center items-center gap-2 py-2 px-3 w-full bg-blue-500 text-white hover:bg-blue-600 rounded-md font-medium">
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
              className="w-full h-full object-cover rounded-tr-lg rounded-br-lg"
              src="https://static.canva.com/authenticating/auth_dialog/auth_dialog_en.jpg"
              alt="Girl computer image"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#212223] shadow-md">
        <div className="w-[93%] m-auto py-3">
          <div className="flex justify-between items-center">
            <div className="w-[100px] h-[48px]">
              <img
                className="w-full h-full object-cover"
                src="http://localhost:5173/public/main-logo.png"
                alt="logo"
              />
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setShow(true);
                  setType("login");
                }}
                className="py-2 w-[80px] text-center bg-blue-500 text-white transition-all hover:bg-blue-600 rounded-[5px] font-medium"
              >
                Log in
              </button>
              <button
                onClick={() => {
                  setShow(true);
                  setType("signup");
                }}
                className="py-2 w-[80px] text-center bg-purple-500 text-white transition-all hover:bg-purple-600 rounded-[5px] font-medium"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full justify-center items-center p-4">
        <div className="py-[90px] flex justify-center items-center flex-col gap-8">
          <h1 className="text-7xl text-[#dee2e6]">
            Where heart meets <span className="custom_text_gradient">art</span>.
          </h1>
          <div>
            <p className="text-[#aca9a9] text-xl mt-4">
              Canva makes it easy to create and share professional designs.
            </p>
          </div>
          <button
            onClick={() => {
              setShow(true);
              setType("signup");
            }}
            className="py-2 mt-4 w-[200px] text-center bg-purple-500 text-white transition-all hover:bg-purple-600 rounded-[5px] font-medium"
          >
            Start designing
          </button>
        </div>
      </div>
    </div>
  );
};
export default Index;
