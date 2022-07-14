import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={!currentUser ? <Home /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/signup"
          element={!currentUser ? <Signup /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/login"
          element={!currentUser ? <Login /> : <Navigate to="/dashboard" />}
        />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/dashboard"
          element={currentUser ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
