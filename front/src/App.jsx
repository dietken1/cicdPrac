import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.text())
      .then(data => {
        setMessage(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>JisungPark Project</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Message from backend: {message}</p>
        </div>
      )}
    </div>
  )
}

export default App