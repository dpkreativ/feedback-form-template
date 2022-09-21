export function Input({ id, label, onChange, placeholder, type }) {
  return (
    <div className="mb-10">
      <label htmlFor={id} className="text-xs mb-3">
        {label}
      </label>
      <div className="border-b-2 border-[#2A2B50] py-2">
        <input
          type={type}
          name={id}
          id={id}
          placeholder={placeholder}
          className="w-full outline-none"
          required
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export function TextArea({ id, label, onChange, placeholder }) {
  return (
    <div className="mb-10">
      <label htmlFor={id} className="text-xs mb-3">
        {label}
      </label>
      <div className="border-b-2 border-[#2A2B50] py-2">
        <textarea
          name={id}
          id={id}
          cols="30"
          rows="3"
          placeholder={placeholder}
          className="w-full outline-none"
          required
          onChange={onChange}
        ></textarea>
      </div>
    </div>
  );
}

export function Button({ children, onClick, type }) {
  return (
    <div className="w-full flex justify-center">
      <button
        type={type}
        className="bg-[#2A2B50] p-5 rounded-full text-white shadow-lg hover:bg-[#21213e]"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
