
import "./App.css";
import Home from "./pages/Home/Home.";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./pages/Details/Details";

function App() {



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detail" element={<Details/>}/>
      </Routes>
    </Router>
  );
}

export default App;
