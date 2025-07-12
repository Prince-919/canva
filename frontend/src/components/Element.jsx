const Element = ({ id, info, extraId }) => {
  return (
    <>
      {extraId ? (
        <>
          <div
            onMouseDown={() => info.resizeElement(extraId, info)}
            className="w-[10px] h-[10px] hidden group-hover:block cursor-nesw-resize absolute -top-[5px] bg-purple-500 -right-[5px] rounded-full z-[9999]"
          ></div>
          <div
            onMouseDown={() => info.resizeElement(extraId, info)}
            className="w-[10px] h-[10px] hidden group-hover:block cursor-nesw-resize absolute -bottom-[5px] bg-purple-500 -left-[5px] rounded-full z-[9999]"
          ></div>
          <div
            onMouseDown={() => info.resizeElement(extraId, info)}
            className="w-[10px] h-[10px] hidden group-hover:block cursor-nw-resize absolute -bottom-[5px] bg-purple-500 -right-[5px] rounded-full z-[9999]"
          ></div>
        </>
      ) : (
        <>
          <div
            onMouseDown={() => info.resizeElement(id, info)}
            className="w-[10px] h-[10px] hidden group-hover:block cursor-nesw-resize absolute -top-[5px] bg-purple-500 -right-[5px] rounded-full z-[9999]"
          ></div>
          <div
            onMouseDown={() => info.resizeElement(id, info)}
            className="w-[10px] h-[10px] hidden group-hover:block cursor-nesw-resize absolute -bottom-[5px] bg-purple-500 -left-[5px] rounded-full z-[9999]"
          ></div>
          <div
            onMouseDown={() => info.resizeElement(id, info)}
            className="w-[10px] h-[10px] hidden group-hover:block cursor-nw-resize absolute -bottom-[5px] bg-purple-500 -right-[5px] rounded-full z-[9999]"
          ></div>
        </>
      )}
      <div
        onMouseDown={() => info.rotateElement(id, info)}
        className="w-[10px] h-[10px] hidden group-hover:block cursor-nw-resize absolute -top-[5px] bg-slate-600 -left-[5px] rounded-full z-[9999]"
      ></div>

      <div
        onMouseDown={() => info.moveElement(id, info)}
        className="w-[20px] h-[6px] hidden group-hover:block absolute cursor-n-resize left-1/2 -translate-x-1/2 -bottom-1 bg-blue-500 rounded-md z-[9999]"
      ></div>
      <div
        onMouseDown={() => info.moveElement(id, info)}
        className="w-[20px] h-[6px] hidden group-hover:block absolute cursor-n-resize left-1/2 -translate-x-1/2 -top-1 bg-blue-500 rounded-md z-[9999]"
      ></div>
      <div
        onMouseDown={() => info.moveElement(id, info)}
        className="h-[20px] w-[6px] hidden group-hover:block absolute cursor-w-resize top-1/2 -translate-y-1/2 bg-blue-500 -left-1 rounded-md z-[9999]"
      ></div>
      <div
        onMouseDown={() => info.moveElement(id, info)}
        className="h-[20px] w-[6px] hidden group-hover:block absolute cursor-w-resize top-1/2 -translate-y-1/2 bg-blue-500 -right-1 rounded-md z-[9999]"
      ></div>
    </>
  );
};

export default Element;
