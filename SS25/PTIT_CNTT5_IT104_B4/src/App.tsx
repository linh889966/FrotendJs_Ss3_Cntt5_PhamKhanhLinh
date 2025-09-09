import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* /register -> hiện form đăng ký */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
