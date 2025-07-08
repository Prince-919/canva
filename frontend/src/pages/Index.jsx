const Index = () => {
  return (
    <div className="bg-[#18191b] min-h-screen w-full">
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
              <button className="py-2 w-[80px] text-center bg-blue-500 text-white transition-all hover:bg-blue-600 rounded-[5px] font-medium">
                Log in
              </button>
              <button className="py-2 w-[80px] text-center bg-purple-500 text-white transition-all hover:bg-purple-600 rounded-[5px] font-medium">
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
          <p className="text-[#aca9a9] text-xl mt-4">
            Canva makes it easy to create and share professional designs.
          </p>
          <button className="py-2 mt-4 w-[200px] text-center bg-purple-500 text-white transition-all hover:bg-purple-600 rounded-[5px] font-medium">
            Start designing
          </button>
        </div>
      </div>
    </div>
  );
};
export default Index;
