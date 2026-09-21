import { useState } from "react";

function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
      <input
        type="text"
        placeholder="Add a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all duration-200 text-sm"
      />
      <button
        type="submit"
        className="bg-[#8b12f6] hover:opacity-90 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 active:scale-95 text-sm"
      >
        Add
      </button>
    </form>
  );
}

export default TodoInput;
