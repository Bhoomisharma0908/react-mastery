import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";

function Dashboard() {

  const navigate = useNavigate();

  return (
    <div>

      <Navigation />

      <h1>Dashboard</h1>

      <p>Welcome to your Study Planner!</p>

      <button onClick={() => navigate("/tasks")}>
        View My Tasks
      </button>

    </div>
  );
}

export default Dashboard;