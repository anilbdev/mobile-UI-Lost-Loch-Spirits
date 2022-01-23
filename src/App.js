import './App.css';
import { useEffect, useState } from 'react';
import Grow from "@mui/material/Grow"
import LandingPage from './pages/LandingPage';
import LoadingPage from './pages/LoadingPage';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000);


  }, []);


  return (
    <div className="App">
      {
        loading ?  <LoadingPage/> : <LandingPage/>
      }

    </div>
  );
}

export default App;
