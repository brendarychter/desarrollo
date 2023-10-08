import './App.css'
import axios from 'axios';

function App() {
 const URL = "https://rickandmortyapi.com/api/character/";
  // Usar esta porción de código como base
  function getData () { // Definición de función
    // Código de llamada a API

   // Promise No está terminada, no la vamos a ver
  /*
    console.log() // no entiendo que tengo que traer aca
    let myPromise = new Promise(function(myResolve, myReject) {
      let req = new XMLHttpRequest();
      req.open('GET', "https://rickandmortyapi.com/api/characters");
      req.onload = function() {
        if (req.status == 200) {
          myResolve(req.response);
        } else {
          myReject("Error, not found");
        }
      };
      req.send();
    });
    
    myPromise.then(
      function(value) {getData(value);}, // y esto no anda pq le tendria q mandar un parametro a la funcion. O quizas puedo poner otra cosa en el then??
      function(error) {getData(error);}
    );
*/


// Fetch


//ES6
fetch(URL)
  .then(response => response.json())
  .then(({results, info}) => {
 // .then(data => { // opcion b
    // ES5
    // const ejemplo = data.results;
    // console.log(ejemplo, "ejemplo");

    // ES6 destructuring
    // const {results} = data; // opcion b

    console.log(results, "results");
    console.log(info);

    // Map
    //const getSingleData = data.results.map(item => console.log(item));
    //console.log(getSingleData);
  });
  


// Filter

//const filteredData = data.filter(item => item.name = "R");
//console.log(filteredData); // same q el anterior


//ES5
/*
fetch(URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const resultados = data.results;
    console.log(resultados);
  })
  .catch(function(error) {
    console.error(error);
  });


  fetch(`${URL}/?name=rick`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const resultados = data.results;
    console.log(resultados);
  })
  .catch(function(error) {
    console.error(error);
  });

  
  fetch(`${URL}1`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.error(error);
  });

*/

/*
  fetch(`${URL}1`)
  .then(response => response.json())
  .then(({id, name}) => console.log(id, name));

  */

  // hacer el map de resultados en los casos de list
  // filtrar por los que empiecen por la letra R

 
  //Axios
  /*
  axios.get(URL)
  .then((response) => console.log(response.data.results))
  .catch((error) => console.log(error));  

 
  axios.get(`${URL}1`)
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error));  
  */

  // map y filter axios
/*
  axios.get(URL)
 .then((response) => {
  const data = response.data.results;

  //by me:
  // const getSingleData = data.map(item => console.log(item));
  // console.log(getSingleData);

  // const filteredData = data.filter(item => item.results.name.startsWith("R"));
  // console.log(filteredData);

 // by chatgpt:
        const getSingleData = data.map(item => item); // Aquí se crea un nuevo array
        console.log(getSingleData);

        const filteredData = data.filter(item => item.name.startsWith("R"));
        console.log(filteredData);

        const filteredStatus = data.filter(item => item.status == "Alive");
        console.log(filteredStatus);


 })
 .catch((error) => console.log(error));
*/

}

  getData() // Llamada a la función

  //

  
  return (
    <>
      <h3>Rick and Morty</h3>
    </>
  )
}

export default App