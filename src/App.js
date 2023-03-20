import './App.css';
import Home from './screens/Home';
import Register from './components/RegisterForm';
import LogIn from './components/LogIn';
import Dashboard from './screens/Dashboard';
import AdminDashboard from './screens/AdminDashboard';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);
  
  if(user)
    console.log(user.user.user.role);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/login" element={isAuthenticated ? <Navigate to="/dashboard"/> : <LogIn/>} />
        <Route exact path="/dashboard" element = {isAuthenticated ? (user && user.user.user.role === 'STUDENT' ? <Dashboard /> : <AdminDashboard />) : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
