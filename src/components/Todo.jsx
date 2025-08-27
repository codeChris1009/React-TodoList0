import { PiTrashDuotone } from "react-icons/pi";
import { MdEditDocument } from "react-icons/md";
import EditForm from "./EditForm";

function Todo({
  todo,
  deleteTask,
  toggleCompletion,
  toggleIsEditing,
  editTask,
}) {
  return todo.isEditing ? (
    <EditForm todo={todo} editTask={editTask} />
  ) : (
    <div
      className={`todo ${todo.isCompleted ? "completed" : ""}`}
      onClick={() => toggleCompletion(todo.id)}
    >
      <p>{todo.task}</p>

      <div onClick={(e) => e.stopPropagation()}>
        <MdEditDocument
          size={24}
          color="#d1fdd2ff"
          style={{ cursor: "pointer" }}
          onClick={() => toggleIsEditing(todo.id)}
        />

        <PiTrashDuotone
          size={24}
          color="#ff5678ff"
          style={{
            cursor: "pointer",
            marginLeft: "3px",
          }}
          onClick={() => deleteTask(todo.id)}
        />
      </div>
    </div>
  );
}

export default Todo;
