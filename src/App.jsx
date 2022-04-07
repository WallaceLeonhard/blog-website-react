import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/createPost";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/createpost">Create Post</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/createpost" element={<CreatePost />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
