import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import ForgotPassword from "./Components/Login/ForgotPassword";
import ForgotUsername from "./Components/Login/ForgotUsername";
import Dashboard from "./Components/Dashboard";
import RegisterCheckin from "./Components/Register/RegisterCheckin";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/forgotUsername" element={<ForgotUsername />} />
          <Route exact path="/forgotPassword" element={<ForgotPassword />} /> 
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/registerCheckin" element={<RegisterCheckin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
