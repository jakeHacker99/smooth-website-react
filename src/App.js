import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <h1>shu bre vagörri!</h1>
    </Router>
  );
}

export default App;
