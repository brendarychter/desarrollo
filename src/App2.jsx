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

  const [singleUsuarios, setSingleUsuarios] = useState([])
  const [userById, setUserById] = useState('')

  useEffect(() => {

    async function getData(){
      try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log("await axios", await axios.get('https://jsonplaceholder.typicode.com/users'))
        console.log(response.data)
  
        const {data} = response;
        setItems(data);
        setLoading(false);
        
        // otra opcion
        // const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
      
        const data1 = data.filter(item => item.address.city == 'Gwenborough');
        console.log("Usuarios filtrados", data1);
        setSingleUsuarios(data1);
        // setSingleUsuario(data.filter(item => item.address.city == 'Gwenborough')
        
        
        const usuariosName = data.map(item=>item.name);
        console.log("Nombre usuarios", usuariosName);

        const findUsuario = data.find(item=>item.email == "Sincere@april.biz");
        console.log("Email especifico", findUsuario);


        //creo q no esta del todo bien con la consigna
        const findId = data.find(item=>item.id == 1);
        console.log("Usuario especifico", findId.name, findId.address);
        setUserById(findId.name);

        // hacer un boton para cada uno de estos. mostrar en un alert. agregarle propiedades de estilos



        // ahora esta mejor ;)
        // fetch(`${URL}/1`)
        // .then(function(response) {
        //   return response.json();
        // })
        // .then(function(data) {
        //   const nombre = data.name;
        //   const direccion = data.address;
        //   console.log("intento2", nombre, direccion);
        // })
        // .catch(function(error) {
        //   console.error(error);
        // });
   

        } catch (error){
          console.log(error);
        }
    }
    getData();

    // Realiza la llamada a la API al cargar el componente 
    // esto funciona
    // const URL=('https://jsonplaceholder.typicode.com/users')
    // axios.get(URL)

    // .then(({data}) => {
    //   setItems(data);

    //   const singleUsuarios = data.filter(item => item.address.city == 'Gwenborough');
    //   console.log("Usuarios filtrados", singleUsuarios)

    //   const usuariosName = data.map(item=>item.name);
    //   console.log("Nombre usuarios", usuariosName);

    //   const findUsuario = data.find(item=>item.email == "Sincere@april.biz");
    //   console.log("Email especifico", findUsuario);


    //   //creo q no esta del todo bien con la consigna
    //   const findId = data.find(item=>item.id == 1);
    //   console.log("Usuario especifico", findId.name, findId.address);


    //   // ahora esta mejor ;)
    //   fetch(`${URL}/1`)
    //   .then(function(response) {
    //     return response.json();
    //   })
    //   .then(function(data) {
    //     const nombre = data.name;
    //     const direccion = data.address;
    //     console.log("intento2", nombre, direccion);
    //   })
    //   .catch(function(error) {
    //     console.error(error);
    //   });
  

    // })
    // .catch((error) => console.log(error));
  }, []); // El segundo argumento vacío asegura que useEffect solo se ejecute una vez
  //console.log(items);

  
const handleClick = () => {
    alert('Botón clickeado');
  }

  const handleClickAlert = () => {
    alert({alert});
  }
  
  const sumar = (param1, param2)=> { // definicion de funcion
    return param1 + param2
  }
  console.log(sumar(1, 2))
  

  const objetos = {
    valor1: 1,
    valor2: 2
   }

sumar(objetos.valor1, objetos.valor2)

  
console.log(items);
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
        <MyButton text="Haz clic" action={handleClick} style={{ backgroundColor: 'red' }} />
        <MyButton text="Single Usuario" action={handleClickAlert} style={{ backgroundColor: 'blue' }} />
        <button onClick={()=>alert(userById)}>prueba single usuarios </button>
        </>
      )}
    </div>
  );
}

export default App;