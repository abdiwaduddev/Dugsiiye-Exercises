import styles from "./TodoItem.module.css";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className={styles.itemContainer}>
      <label className={styles.leftGroup}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className={styles.checkbox}
        />
        <span
          className={`${styles.todoText} ${
            todo.completed ? styles.completed : ""
          }`}
        >
          {todo.text}
        </span>
      </label>
      <button
        type="button"
        className={styles.deleteButton}
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
