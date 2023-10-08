import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Realiza la llamada a la API al cargar el componente
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false); // Cambia el estado a "false" cuando la carga está completa
      })
      .catch((error) => console.error('Error:', error));
  }, []); // El segundo argumento vacío asegura que useEffect solo se ejecute una vez

  return (
    <div>
      <h1>API Call con Loading</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
