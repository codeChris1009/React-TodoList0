import { useState } from "react";

function EditForm({ todo, editTask }) {
  const [newTask, setNewTask] = useState(todo?.task || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(todo.id, newTask);
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="submit">Done</button>
    </form>
  );
}

export default EditForm;
