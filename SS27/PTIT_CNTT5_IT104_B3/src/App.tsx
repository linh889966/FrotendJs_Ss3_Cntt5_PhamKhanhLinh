import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TaskList from "./pages/TaskList"
import TaskDetail from "./pages/TaskDetail"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/task/:id" element={<TaskDetail />} />
      </Routes>
    </Router>
  )
}
