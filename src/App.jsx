
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Context
import UserContext from "./context/UserContext";

// Pages
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";
import CourseDetails from "./pages/CourseDetails";

// Original Study Planner
import StudyPlanner from "./StudyPlanner";


function App() {

  // =================================
  // CONTEXT API STATE
  // =================================

  const [username, setUsername] = useState("Bhoomi");


  // =================================
  // APPLICATION ROUTING
  // =================================

  return (

    <UserContext.Provider value={{ username, setUsername }}>

      <BrowserRouter>

        <Routes>

          {/* Dashboard Page */}

          <Route
            path="/"
            element={<Dashboard />}
          />


          {/* Courses Page */}

          <Route
            path="/courses"
            element={<Courses />}
          />


          {/* Tasks Page */}

          <Route
            path="/tasks"
            element={<Tasks />}
          />


          {/* Profile Page */}

          <Route
            path="/profile"
            element={<Profile />}
          />


          {/* Dynamic Course Details Page */}

          <Route
            path="/courses/:id"
            element={<CourseDetails />}
          />


          {/* Original Study Planner */}

          <Route
            path="/planner"
            element={<StudyPlanner />}
          />


        </Routes>

      </BrowserRouter>

    </UserContext.Provider>

  );

}

export default App;


