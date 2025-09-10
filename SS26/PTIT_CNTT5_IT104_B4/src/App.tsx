import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./components/Student";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/student" element={<Student />} />
      </Routes>
    </BrowserRouter>
  );
}
