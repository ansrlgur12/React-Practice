import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignUp from './pages/SignUp';
import UseState from './pages/UseState';
import UseEffect from './pages/UseEffect';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/UseState" element={<UseState />} />
        <Route path="/UseEffect" element={<UseEffect />} />
      </Routes>
    </Router>
  );
}

export default App;