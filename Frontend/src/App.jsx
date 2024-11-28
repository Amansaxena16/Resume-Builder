import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home/Home";
import Resume from "./components/resume/Resume";
import { useUser } from "@clerk/clerk-react";
import SignInPage from "./components/signIn/SignInPage";

function App() {
  const { user, isSignedIn, isLoaded } = useUser(); 

  return (
    <Router>
      <Routes>
        {/* Redirect unauthenticated users */}
        <Route
          path="/" element={<Home/>}
        />
        <Route
          path="/resume"
          element={isSignedIn && isLoaded ? <Resume /> : <Navigate to="/signIn" />}
        />
        <Route path="/signIn" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
