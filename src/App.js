import './App.css';
import { useEffect, useState } from 'react';
import LandingPage from './pages/LandingPage';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 150);


  }, []);


  return (
    <div className="App">
      {
        loading ? <p>loading</p> : <LandingPage/>
      }

    </div>
  );
}

export default App;
