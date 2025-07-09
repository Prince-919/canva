const Layout = () => {
  return (
    <div className="bg-[#18191b] min-h-screen w-full">
      <div className="bg-[#212223] shadow-md fixed left-0 top-0 w-full z-20">
        <div className="w-[93%] m-auto py-3">
          <div className="flex justify-between items-center">
            <div className="w-[100px] h-[48px]">
              <img
                className="w-full h-full object-cover"
                src="http://localhost:5173/public/main-logo.png"
                alt="logo"
              />
            </div>
            <div className="flex justify-between items-center gap-4 relative">
              <button className="py-2 px-2 overflow-hidden text-center text-white bg-purple-500 hover:bg-purple-600 transition-all duration-200 rounded-[3px] font-medium tracking-tight">
                Create a Design
              </button>
              <div className="cursor-pointer h-12 w-12">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
