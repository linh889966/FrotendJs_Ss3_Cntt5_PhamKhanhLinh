import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Student from "./components/Student";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/student/:name" element={<Student />} />
      </Routes>
    </Router>
  );
}

export default App;
