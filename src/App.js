
// import { Router } from "react-router";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Login from "./components/login";
import Header from "./components/Header";
// import { BrowserRouter } from 'react-router-dom';
import "./App.css";
import Home from "./components/home";
import Detail from "./components/Detail";

function App() {
  return (
  <>
  <div className="App">
    <Router>
      <Header/>
      <Routes>

      <Route exact path="/" element={<Login/>}>
        </Route>
      <Route path="/home" element={<Home />}>
        </Route>

      <Route path="/detail/:id" element={<Detail />}>
        </Route>

       
      </Routes>
       
      
    </Router>
    
  </div>
  </>
  );
}

export default App;
