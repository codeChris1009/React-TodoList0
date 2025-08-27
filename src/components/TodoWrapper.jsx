import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

function TodoWrapper() {
  const [todos, setTodos] = useState([
    {
      task: "read a book ",
      id: 1,
      isCompleted: false,
      isEditing: false,
    },
    {
      task: "eat a meal",
      id: 2,
      isCompleted: false,
      isEditing: false,
    },
    {
      task: "play with cat",
      id: 3,
      isCompleted: false,
      isEditing: false,
    },
  ]);

  // Add a new task
  const addTask = (task) => {
    const newTodo = {
      task,
      id: todos.length + 1,
      isCompleted: false,
      isEditing: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Update an existing task
  const editTask = (id, newTask) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask, isEditing: false } : todo
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle task
  const toggleCompletion = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const toggleIsEditing = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  // Title
  const title = "todo l1ist";

  return (
    <div className="wrapper">
      <div className="wrapper-inner">
        <h1>{title.toUpperCase()}</h1>
        <CreateForm addTask={addTask} />
        {todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              deleteTask={deleteTask}
              toggleCompletion={toggleCompletion}
              toggleIsEditing={toggleIsEditing}
              editTask={editTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TodoWrapper;
