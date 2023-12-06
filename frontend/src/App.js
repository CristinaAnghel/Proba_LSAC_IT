import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import RegisterComponent from './components/RegisterPage/RegisterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<TestComponent/>}></Route>
        <Route path="/test" element={<TestComponent/>}></Route>
        <Route path="/registered" element={<RegisterComponent/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
