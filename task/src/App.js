import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from './containers/Login'; 
import Signup from './containers/Signup';
import Citydata from './containers/Citydata';
import Dashoard from './containers/Dashoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Dashoard /> */}
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashoard />} />
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
