import Login from "./pages/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { RequireAuth } from "./contexts/auth/RequireAuth";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
