import Login from "./pages/Login";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { RequireAuth } from "./contexts/auth/RequireAuth";
import Vehicles from "./pages/Vehicles";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/vehicles"
            element={
              <RequireAuth>
                <Vehicles />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
