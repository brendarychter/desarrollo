import { useState, useEffect } from 'react';
import axios from 'axios';
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
      
        const singleUsuarios = data.filter(item => item.address.city == 'Gwenborough');
        console.log("Usuarios filtrados", singleUsuarios);
        
        const usuariosName = data.map(item=>item.name);
        console.log("Nombre usuarios", usuariosName);

        const findUsuario = data.find(item=>item.email == "Sincere@april.biz");
        console.log("Email especifico", findUsuario);


        //creo q no esta del todo bien con la consigna
        const findId = data.find(item=>item.id == 1);
        console.log("Usuario especifico", findId.name, findId.address);

        

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
  }, [items]); // El segundo argumento vacío asegura que useEffect solo se ejecute una vez
  //console.log(items);

  return (
    <div>
      {loading ? "true" : "false"}
    </div>
  );
}

export default App;