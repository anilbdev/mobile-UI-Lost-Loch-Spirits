import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500);


  }, []);


  return (
    <div className="App">
      {
        loading ? <p>loading</p> : <p>Finished</p>
      }

    </div>
  );
}

export default App;
