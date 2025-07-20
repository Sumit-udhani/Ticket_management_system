import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppRoutes } from './routes/AppRoutes'

function App() {
 const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    
    const loggedIn = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(loggedIn);
  }, []);

  return (
    <>
 <AppRoutes isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      
    </>
  )
}

export default App
