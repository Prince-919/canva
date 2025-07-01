import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Home = () => {
  const [show, setShow] = useState(false);
  const [state, setState] = useState({
    width: 0,
    height: 0,
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const create = () => {
    navigate("/design/create", {
      state: {
        type: "create",
        width: state.width,
        height: state.height,
      },
    });
  };
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mdtablet: {
      breakpoint: { max: 992, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };
  return (
    <div className="mt-5">
      <div className="w-full h-[250px] flex justify-center items-center bg-gradient-to-r from-[#4c76cf] to-[#662ab8] rounded-md overflow-hidden relative">
        <button
          onClick={() => setShow(!show)}
          className="px-2 py-2 text-[15px] overflow-hidden text-center bg-[#8b3dffad] text-white rounded-[3px] font-semibold hover:bg-[#8b3dffd3] absolute top-3 right-3"
        >
          Custom size
        </button>
        <div
          className={`absolute top-16 right-3 gap-3 bg-[#252627] w-[250px] p-4 text-white ${
            show ? "visible opacity-100" : "invisible opacity-30"
          } transition-all duration-200`}
        >
          <div className="grid grid-cols-2 pb-4 gap-3">
            <div className="flex gap-2 justify-center items-start flex-col">
              <label htmlFor="width">Width</label>
              <input
                type="number"
                name="width"
                className="w-full outline-none px-2 py-[4px] bg-[#1b1a1a] border border-[#404040] rounded-md"
                id="width"
                onChange={handleInput}
              />
            </div>
            <div className="flex gap-2 justify-center items-start flex-col">
              <label htmlFor="height">Height</label>
              <input
                type="number"
                name="height"
                className="w-full outline-none px-2 py-[4px] bg-[#1b1a1a] border border-[#404040] rounded-md"
                id="height"
                onChange={handleInput}
              />
            </div>
          </div>
          <button
            onClick={create}
            className="px-2 py-2 text-[13px] overflow-hidden text-center bg-[#8b3dffad] text-white rounded-[3px] font-semibold hover:bg-[#8b3dffd3] w-full"
          >
            Create new Design
          </button>
        </div>
        <div>
          <h2 className="text-3xl pb-10 pt-6 font-semibold text-white">
            What will you design today?
          </h2>
        </div>
      </div>
      <div>
        <h2 className="text-2xl py-6 font-semibold text-white">
          Recent designs
        </h2>
        <div>
          <Carousel
            autoPlay={true}
            infinite={true}
            transitionDuration={500}
            responsive={responsive}
          >
            {Array(8)
              .fill("")
              .map((data, i) => (
                <div key={i} className="relative group w-full h-[170px] px-2">
                  <Link className="w-full h-full block bg-[#ffffff12] p-4 rounded-md">
                    <img
                      className="w-full h-full object-cover rounded-md"
                      src="https://images.template.net/wp-content/uploads/2023/10/What-Is-a-Template-788x443.jpg"
                      alt="image"
                    />
                  </Link>
                  <div className="absolute hidden cursor-pointer top-1 right-2 text-red-500 p-2 transition-all duration-200 group-hover:block">
                    <FaTrash />
                  </div>
                </div>
              ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;
