
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import UserContext from "../context/UserContext";
import Navigation from "../components/Navigation";
import Card from "../components/Card";

function Dashboard() {

  // Access username from Context API
  const { username } = useContext(UserContext);

  // Navigation Hook
  const navigate = useNavigate();

  return (
    <div className="dashboard">

      {/* Navigation */}
      <Navigation />

      {/* Welcome Section */}
      <h1>Welcome, {username}!</h1>
      <p>Welcome to your Study Planner Dashboard.</p>

      {/* Dashboard Statistics */}
      <h2>My Dashboard</h2>

      <div className="dashboard-cards">

        <Card>
          <h3>Total Courses</h3>
          <p>Manage your learning subjects.</p>
        </Card>

        <Card>
          <h3>Total Tasks</h3>
          <p>Keep track of your daily tasks.</p>
        </Card>

        <Card>
          <h3>Completed Tasks</h3>
          <p>Track your learning progress.</p>
        </Card>

      </div>

      {/* Navigation Button */}
      <button onClick={() => navigate("/tasks")}>
        View My Tasks
      </button>

      <button onClick={() => navigate("/courses")}>
        View My Courses
      </button>

    </div>
  );
}

export default Dashboard;

