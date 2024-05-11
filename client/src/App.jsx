import { Route, Routes } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
