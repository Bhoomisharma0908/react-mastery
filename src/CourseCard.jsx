
import { useState } from "react";

function CourseCard({ title, description, onDelete }) {

  const [completed, setCompleted] = useState(false);

  function handleComplete() {
    setCompleted(!completed);
  }

  return (
    <div className="course-card">

      <h3>{title}</h3>

      <p>{description}</p>

      <p className="status">
        Status: {completed ? "Completed" : "In Progress"}
      </p>

      <button onClick={handleComplete}>
        {completed ? "Mark Incomplete" : "Mark Complete"}
      </button>

      <button onClick={onDelete}>
        Delete Course
      </button>

    </div>
  );
}

export default CourseCard;





