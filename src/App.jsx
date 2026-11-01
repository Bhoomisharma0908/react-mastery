import { BrowserRouter, Routes, Route } from "react-router-dom";

import StudyPlanner from "./StudyPlanner";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";
import CourseDetails from "./pages/CourseDetails";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/tasks" element={<Tasks />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/planner" element={<StudyPlanner />} />
        <Route path="/courses/:id" element={<CourseDetails />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;
