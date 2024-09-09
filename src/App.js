import './App.css';
import Login from './Components/login';
import { BrowserRouter as Router , Route , Routes, BrowserRouter } from 'react-router-dom';
import Dashboard from './Components/Dashboard';

function App() {
  return (
   <>
   <Router>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
     </Routes>
   </Router>

 
   </>
  );
}

export default App;
