import { useState, useEffect } from 'react';
import axios from 'axios';
import MyButton from './components/MyButton';
// useState es un hook (comportamiento propio de react que provee funcionalidades de formas simples), que permite definir en una misma linea 
// una variable junto a su funcion modificadora. 
// ejemplos: const [variable, setVariable] = useState(valorInicial)
// const [texto, setTexto) = useState('')
// const [loading, setLoading] = useState(false)


// useEffect: Otro hook que permite, dependiendo de ciertas condiciones establecidas, permite escucharlas y estar atenta a los cambios que produzcan.
// Hay distintos tipos de escuchas


/*
CONSIGNA:
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

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userById, setUserById] = useState('')


  //Dejar lo mas limpio posible el useEffect principal, en caso de tener una llamada a una API
  // Ejemplo: landing de pasajes de avion
  //          bandeja de entrada de mails
  
  useEffect(() => {
    async function getData(){
      try{
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
        setItems(data);
        setLoading(false);
        // Uso AXIOS para traer la data de la API
        // Set de mi variable items que tengo mas arriba
        // El loading lo dejo en false que significa que ya tengo todo cargado
        } catch (error){
          console.log(error);
        }
    }
    getData();
  }, []); // El segundo argumento vacío asegura que useEffect solo se ejecute una vez

  
  // Tantos useEffect como dependencias quiera oir y estar atenta
  useEffect(()=> {
    const user = items.find(item=>item.id == 3);
    setUserById(user);

    // desde aca puedo convocar a funciones que esten por afuera

  }, [items]) // El segundo argumento *items* asegura que ese useEffect esta escuchando a items y va a 
              // mostrar lo que tiene adentro una vez lleno
  
  const handleClick = (texto) => {
    console.log(userById[texto]);
  }

  // const objeto = {
  //   name: 'brenda',
  //   edad: 29
  // }

  // console.log(objeto['name'])

  // const array = ['manzana', 'peras', 'bananas']
  // console.log(array[2])
  return ( // cuando queres incorporar codigo js en el html, va dentro de {}
    <div>
      <h1>API Call con Loading</h1>
      {loading ? ( // como esto que incorpora una funcion ternaria
        <p>Cargando...</p>
      ) : (
        <>
          <ul>
            {items.map((item) => (
              <li key={item.id}>{item.name}</li> // cada vez q recorres, react te pide que cada elemento tenga un key. la key en un array es index, en objeto es id
            ))}
          </ul>
          <MyButton text="Name" action={()=>handleClick('name')} color='red' />
          <MyButton text="ID" action={()=>handleClick('id')} color='blue' />
          
          {/* <button onClick={()=>alert(userById.address.street)}>prueba single usuarios </button> */}
        </>
      )}
    </div>
  );
}

export default App;