const Text = ({ addText }) => {
  return (
    <div
      onClick={() => addText("text", "title")}
      className="text-white cursor-pointer font-bold text-xl rounded-sm p-3 bg-[#3c3c3d] tracking-tight"
    >
      <h2>Add your text</h2>
    </div>
  );
};

export default Text;
