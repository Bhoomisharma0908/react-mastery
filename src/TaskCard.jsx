
function TaskCard({ task, onDelete, onToggle }) {

  return (
    <div className="course-card">

      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>Priority: {task.priority}</p>

      <p>
        Status: {task.completed ? "Completed" : "Pending"}
      </p>

      <button onClick={() => onToggle(task.id)}>
        {task.completed ? "Mark Pending" : "Mark Complete"}
      </button>

      <button onClick={() => onDelete(task.id)}>
        Delete Task
      </button>

    </div>
  );
}

export default TaskCard;
