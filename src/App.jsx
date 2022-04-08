import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { signOut } from "firebase/auth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/createPost";
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/createpost">Create Post</Link>
        {!isAuth ? (
          <Link to="/login">Login</Link>
        ) : (
          <button onClick={signUserOut}>Log out</button>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
