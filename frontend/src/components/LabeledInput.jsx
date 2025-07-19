const LabeledInput = ({ name, label, type, onChange, id }) => {
  return (
    <div className="flex flex-col gap-2 justify-start">
      <label htmlFor={name}>{label}</label>
      <input
        onChange={onChange}
        type={type}
        name={name}
        id={id}
        className="bg-[#1b1a1a] outline-none border border-[#404040] px-2 py-[4px] rounded-[3px]"
      />
    </div>
  );
};

export default LabeledInput;
