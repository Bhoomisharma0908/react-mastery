import { Link } from "react-router-dom";

function Navigation() {

  return (

    <nav>

      <Link to="/">Dashboard</Link>

      {" | "}

      <Link to="/courses">Courses</Link>

      {" | "}

      <Link to="/tasks">Tasks</Link>

      {" | "}

      <Link to="/profile">Profile</Link>

      {" | "}

      <Link to="/planner">Study Planner</Link>

    </nav>

  );

}

export default Navigation;