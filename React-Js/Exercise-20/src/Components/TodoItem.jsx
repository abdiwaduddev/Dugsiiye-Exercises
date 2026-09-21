function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between bg-[#f8f9fc] hover:bg-[#f1f3f9] px-4 py-3.5 rounded-2xl transition-colors duration-200">
      <label className="flex items-center gap-3.5 cursor-pointer flex-1 min-w-0">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 accent-[#0075ff] rounded cursor-pointer border-gray-300 focus:ring-0 shrink-0"
        />
        <span
          className={`text-[15px] font-medium transition-all duration-200 truncate select-none ${
            todo.completed ? "line-through text-gray-400" : "text-gray-700"
          }`}
        >
          {todo.text}
        </span>
      </label>
      <button
        type="button"
        onClick={() => onDelete(todo.id)}
        className="text-[#dc2626] font-semibold text-sm px-2 py-1 rounded-md hover:bg-red-50 transition-colors duration-200 ml-2 shrink-0"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
