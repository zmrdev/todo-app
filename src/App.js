import './App.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Login';
import Dashboard from './Dashboard';
import { useState } from 'react';
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth';
function App() {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true)
  onAuthStateChanged(auth, user => {
    if (user) {
      setIsUserLoggedIn(true)
    }
    else {
      setIsUserLoggedIn(false)
    }
  })
  if (isUserLoggedIn === true) {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className='content'>
            <Routes>
              <Route path='/dashboard' element={<Dashboard />}> </Route>
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
  else {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className='content'>
            <Routes>
              <Route path='/' element={<Login />}> </Route>
            </Routes>
          </div>
        </div>
      </Router>
    );

  }
}

export default App;