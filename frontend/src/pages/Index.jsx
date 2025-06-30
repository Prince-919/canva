const Index = () => {
  return (
    <div className="bg-[#18191b] w-full min-h-screen">
      <div className="bg-[#252627] shadow-md">
        <div className="w-[95%] py-3 m-auto">
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
              <button className="bg-blue-500 py-2 w-[80px] text-center text-white transition-all hover:bg-blue-600 rounded-[5px]">
                Log in
              </button>
              <button className="bg-purple-500 py-2 w-[80px] text-center text-white transition-all hover:bg-purple-600 rounded-[5px]">
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
          <button className="bg-purple-500 py-2 w-[200px] text-center text-white transition-all hover:bg-purple-600 rounded-[5px] font-semibold text-sm">
            Start designing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
