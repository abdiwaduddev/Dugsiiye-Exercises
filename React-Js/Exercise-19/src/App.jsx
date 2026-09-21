import TodoList from "./components/TodoList";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <TodoList />
    </div>
  );
}

export default App;
