import Login from "./pages/LoginScreen";
import "./App.css";
import AllUsers from "./pages/AllUsers";
import AddUser from "./pages/AddUser";
import Navbar from "./pages/Navbar";
import Reports from "./pages/Reports";
import Dashboard from "./pages/Reports";
import Map from "./pages/Map";
import AlertLog from "./pages/AlertLog";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/allusers" element={<AllUsers />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/alertlog" element={<AlertLog />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
