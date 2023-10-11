/*
    Con esta API https://jsonplaceholder.typicode.com/users 
    usando Axios y try/catch para manejar errores
    destructuring para las propiedades
    y template literals si es necesario

    (Realizar las peticiones y mostrar por consola)

        - Filtrar usuarios por una ciudad especifica
        - Mapear nombres de usuarios para crear un array que contenga solo los nombres de los usuarios.
        - Encontrar un usuario por correo electronico

        - Elegir un usuario y con la API https://jsonplaceholder.typicode.com/users/{id} mostrar por consola
        el nombre y la direccion
*/



// Funciona

import { useState, useEffect } from 'react';
// useState es un hook (comportamiento propio de react que provee funcionalidades de formas simples), que permite definir en una misma linea 
// una variable junto a su funcion modificadora. 
// ejemplos: const [variable, setVariable] = useState(valorInicial)
// const [texto, setTexto) = useState('')
// const [loading, setLoading] = useState(false)


// useEffect: Otro hook que permite, dependiendo de ciertas condiciones establecidas, permite escucharlas y estar atenta a los cambios que produzcan.
// Hay distintos tipos de escuchas

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Realiza la llamada a la API al cargar el componente
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((info) => {
        setData(info);
        setLoading(false); // Cambia el estado a "false" cuando la carga está completa
      })
      .catch((error) => console.error('Error:', error));
  }, []); // El segundo argumento vacío asegura que useEffect solo se ejecute una vez
  console.log(data); // adentro del scope, no trae la data todavia

  return (
    <div>
      <h1>API Call con Loading</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {/* preguntar si la data no es undefined y esta disponible
          data?.map
          */}
          {data.map((item) => (
            <li key={item.id}> {item.title} </li> // key: indicador unico (obligatorio). 
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
