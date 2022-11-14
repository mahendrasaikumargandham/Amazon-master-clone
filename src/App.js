import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
