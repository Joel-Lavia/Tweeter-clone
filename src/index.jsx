import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Profil from './pages/Profil';
import './style/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
 <Routes>
 <Route path='/' element={<App/>}/>
 <Route path='/Profil' element={<Profil/>}/>
 </Routes>
  </Router>
  </React.StrictMode>
);
