
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import CourseCard from "./CourseCard";
import TaskCard from "./TaskCard";
import "./App.css";

function App() {

  // =================================
  // COURSE STATES
  // =================================

  const [courses, setCourses] = useState(() => {

    const savedCourses = localStorage.getItem("courses");

    return savedCourses
      ? JSON.parse(savedCourses)
      : ["React", "Java", "SQL"];

  });

  const [newCourse, setNewCourse] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");


  // =================================
  // TASK STATES
  // =================================

  const [tasks, setTasks] = useState(() => {

    const savedTasks = localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [];

  });

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("Medium");
  const [taskError, setTaskError] = useState("");


  // =================================
  // USE EFFECT
  // =================================

  // Update browser tab title whenever tasks change
  useEffect(() => {
    document.title = `Study Planner - ${tasks.length} Tasks`;
  }, [tasks]);

  // Save courses
  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  // Save tasks
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // =================================
  // COURSE FUNCTIONS
  // =================================

  // Add Course

  function addCourse(event) {

    event.preventDefault();

    if (newCourse.trim() === "") {
      setError("Course name is required.");
      return;
    }

    if (
      courses.some(
        (course) =>
          course.toLowerCase() === newCourse.trim().toLowerCase()
      )
    ) {
      setError("This course already exists.");
      return;
    }

    setCourses([...courses, newCourse.trim()]);

    setNewCourse("");
    setError("");

  }


  // Delete Course

  function deleteCourse(courseToDelete) {

    setCourses(
      courses.filter((course) => course !== courseToDelete)
    );

  }


  // Handle Course Input

  function handleInputChange(event) {

    setNewCourse(event.target.value);
    setError("");

  }


  // Search Courses

  const filteredCourses = courses.filter((course) =>
    course.toLowerCase().includes(searchTerm.toLowerCase())
  );


  // =================================
  // TASK FUNCTIONS
  // =================================

  // Add Task

  function addTask(newTask) {

    setTasks([...tasks, newTask]);

  }


  // Delete Task

  function deleteTask(taskId) {

    setTasks(
      tasks.filter((task) => task.id !== taskId)
    );

  }


  // Toggle Task Completion

  function toggleTask(taskId) {

    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );

  }


  // Handle Task Form Submission

  function handleAddTask(event) {

    event.preventDefault();

    if (taskTitle.trim() === "") {
      setTaskError("Task title is required.");
      return;
    }

    const newTask = {

      id: Date.now(),

      title: taskTitle.trim(),

      description: taskDescription.trim(),

      priority: taskPriority,

      completed: false

    };

    addTask(newTask);

    setTaskTitle("");
    setTaskDescription("");
    setTaskPriority("Medium");
    setTaskError("");

  }


  // =================================
  // UI / JSX
  // =================================

  return (

    <div className="app">

      <Navbar />

      <h1>Study Planner Dashboard</h1>


      {/* ================================= */}
      {/* ADD TASK SECTION */}
      {/* ================================= */}

      <h2>Add New Task</h2>

      <form onSubmit={handleAddTask}>

        {/* Task Title */}

        <input
          type="text"
          placeholder="Enter task title"
          value={taskTitle}
          onChange={(event) => {
            setTaskTitle(event.target.value);
            setTaskError("");
          }}
        />


        {/* Task Description */}

        <textarea
          placeholder="Enter task description"
          value={taskDescription}
          onChange={(event) =>
            setTaskDescription(event.target.value)
          }
        />


        {/* Task Priority */}

        <select
          value={taskPriority}
          onChange={(event) =>
            setTaskPriority(event.target.value)
          }
        >

          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>

        </select>


        <button type="submit">
          Add Task
        </button>

      </form>


      {/* Task Validation Error */}

      {taskError && (
        <p className="error-message">
          {taskError}
        </p>
      )}


      {/* ================================= */}
      {/* TASK LIST SECTION */}
      {/* ================================= */}

      <h2>My Tasks</h2>


      {/* No Tasks Message */}

      {tasks.length === 0 && (
        <p>No tasks added yet.</p>
      )}


      {/* Display Tasks */}

      {tasks.map((task) => (

        <TaskCard
          key={task.id}
          task={task}
          onDelete={deleteTask}
          onToggle={toggleTask}
        />

      ))}


      {/* ================================= */}
      {/* COURSE SECTION */}
      {/* ================================= */}

      <h2>My Courses</h2>


      {/* Add Course Form */}

      <form onSubmit={addCourse}>

        <input
          type="text"
          placeholder="Enter course name"
          value={newCourse}
          onChange={handleInputChange}
          maxLength={30}
        />

        <button type="submit">
          Add Course
        </button>

      </form>


      {/* Course Validation Error */}

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}


      <h3>Course List</h3>


      {/* Search Courses */}

      <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={(event) =>
          setSearchTerm(event.target.value)
        }
      />


      {/* No Courses Message */}

      {courses.length === 0 && (
        <p>No courses available. Add your first course!</p>
      )}


      {/* No Search Results */}

      {courses.length > 0 && filteredCourses.length === 0 && (
        <p>No matching courses found.</p>
      )}


      {/* Display Courses */}

      {filteredCourses.map((course, index) => (

        <CourseCard
          key={index}
          title={course}
          description="Improve your knowledge and skills."
          onDelete={() => deleteCourse(course)}
        />

      ))}

    </div>

  );

}

export default App;











