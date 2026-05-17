import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Destinations from "./pages/Destinations.jsx";
import DestinationDetails from "./pages/DestinationDetails.jsx";
import PlanTrip from "./pages/PlanTrip.jsx";
import Trips from "./pages/Trips.jsx";
import Dashboard from "./pages/DashBoard.jsx";
import SignupLoginPage from "./pages/SignupLoginPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";  // import your LoginPage

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destination/:city" element={<DestinationDetails />} />
        <Route path="/plantrip" element={<PlanTrip />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignupLoginPage />} />
        <Route path="/login" element={<LoginPage />} />  {/* Login route */}
      </Routes>
    </Router>
  );
}
