import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Account from "./pages/Account";
import PrivateRouter from "./components/PrivateRouter";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRouter />}>
          <Route path="/account" element={<Account />} />
        </Route>
        <Route path="*" element={<h3>404 Not Found</h3>} />
      </Route>
    </Routes>
  );
}
