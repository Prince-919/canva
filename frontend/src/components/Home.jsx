import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import Item from "./home/Item";
import toast from "react-hot-toast";

const Home = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [state, setState] = useState({
    width: "",
    height: "",
  });
  const [designs, setDesigns] = useState([]);

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
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const create = (e) => {
    e.preventDefault();
    navigate("/design/create", {
      state: {
        type: "create",
        width: state.width,
        height: state.height,
      },
    });
  };

  const getDesigns = async () => {
    try {
      const { data } = await api.get("/api/designs");

      setDesigns(data.designs);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteDesign = async (design_id) => {
    try {
      const { data } = await api.delete(`/api/delete-image/${design_id}`);
      toast.success(data.message);
      getDesigns();
    } catch (error) {
      toast.success(error.response.data.message);
    }
  };

  useEffect(() => {
    getDesigns();
  }, []);

  return (
    <div className="pt-1 pl-3">
      <div className="bg-gradient-to-r flex justify-center items-center bg-primary w-full h-[250px] rounded-md relative overflow-hidden">
        <button
          onClick={() => setShow(!show)}
          className="px-4 py-2 text-[15px] overflow-hidden transition-all duration-100 bg-[rgba(123,42,232,1)] hover:bg-purple-600 text-center text-white   font-medium rounded-[3px] absolute top-3 right-3"
        >
          Custom size
        </button>
        <form
          onSubmit={create}
          className={`absolute top-16 right-3 gap-3 bg-[#252627] w-[250px] p-4 text-white ${
            show ? "visible opacity-100" : "invisible opacity-30"
          } transition-all duration-200 rounded-[5px]`}
        >
          <div className="grid grid-cols-2 gap-3 pb-4">
            <div className="flex flex-col gap-2 justify-start">
              <label htmlFor="width">Width</label>
              <input
                onChange={inputHandler}
                type="number"
                name="width"
                id="width"
                className="bg-[#1b1a1a] outline-none border border-[#404040] px-2 py-[4px] rounded-[3px]"
              />
            </div>
            <div className="flex flex-col gap-2 justify-start">
              <label htmlFor="height">Height</label>
              <input
                onChange={inputHandler}
                type="number"
                name="height"
                id="height"
                className="bg-[#1b1a1a] outline-none border border-[#404040] px-2 py-[4px] rounded-[3px]"
              />
            </div>
          </div>
          <button className="w-full py-2 px-4 overflow-hidden text-center text-white bg-purple-500 hover:bg-purple-600 rounded-[3px] font-medium tracking-tight">
            Create new design
          </button>
        </form>
        <div>
          <h2 className="text-white text-3xl font-semibold pb-10 pt-6 tracking-tight select-none">
            What will you design today?
          </h2>
        </div>
      </div>
      <div className="">
        <h2 className="py-6 text-white font-semibold text-xl">
          Your recent designs
        </h2>
        <div className="">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            transitionDuration={500}
          >
            {designs.map((d, i) => {
              return <Item design={d} key={i} deleteDesign={deleteDesign} />;
            })}
          </Carousel>
          ;
        </div>
      </div>
    </div>
  );
};

export default Home;
