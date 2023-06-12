
import './App.css';
import {Routes,Route} from "react-router-dom"
import Dashboard from './components/Dashboard';
import Register from "./components/RegisterPage"
import Login from "./components/LoginPage"
import Navebar from './components/Navebar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
          <Navebar />
          <Sidebar>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
