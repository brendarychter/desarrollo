/*
    - Orden en definición de componente - props - useEffect/useState
        - Destructuring
        - Template literals
        - Llamadas a Apis: es objeto o lista? - axios - async/await - try/catch
        - Renderizado condicional
        - filter/map/find
        - Router - link
        - Rutas dinámicas
    - Context
    - ...rest
*/

// - Orden en definición de componente - props
//      1- IMPORTS
//          Van arriba de todo en todos los archivos. Chequear que si se escribe una función/variable que no está en tu archivo 
//          o que marca el vscode, es porque no está importado.    
import {axios} from 'axios';
import {Show} from '../Show';
import {useEffect, useState} from 'react';
import {useAppContext} from './Context';
import {Mijson} from './api';

//      2- DEFINICIÓN DE COMPONENTE
//          Le pongo nombre al componente o la página o context que necesite y, si es necesario, 
//          las props que va a recibir de su padre

const Shows = ({id})=> {

//NO OLVIDAR CONSOLE.LOG DE TODO

//      3- DEFINICIÓN DE VARIABLES LOCALES Y/O CONVOCATORIA DE "VARIABLES GLOBALES (CONTEXT)"    
//          Se utiliza useState para variables que se quieran definir y dar valor posteriormente. Se les puede dar valor inicial

//          ENTENDER QUE PIDE LA CONSIGNA
//              QUÉ DEVUELVE LA API
//                  QUÉ NECESITO
//          En el json de la api tengo una lista? mi useState va a tener un array []                  

    const [show, setShow] = useState([]);
    const [showsLoading, setShowsLoading] = useState(true);
    
    const [nombre, setNombre] = useState();

//      4- USEEFFECT: PRESTAR ATENCION A QUE PIDE EL COMPONENTE/PAGINA. 
//          En este caso pide que al momento de entrar haga la llamada a la api.
//          Tener en cuenta las dependencias* según lo que se pida dentro

    useEffect(() => {
        // Defino la función que ejecuta la llamada a la api
        // Como es asincrónica, no olvidar el async()
        const handleGetShow = async () => {
        
            // Intento (try) ejecutar la llamada
            try {
                // Espero a recibir la llamada (await)
                // Y me la guardo en una variable propia de este scope

                // Template Literal: Como la url necesita un parámetro, que esta viniendo como prop (línea 27),
                // necesito incorporarlo en la url
                // Fórmula: usar comilla ` - texto random - incorporar la variable así: ${id} - `

                const show = await axios.get(`http://api.tvmaze.com/shows/${id}`);
                
                // Guardo la respuesta en la variable (línea 32) - no olvidar que axios trae lo que necesito en .data
                setShow(show.data);

                // DESTRUCTURING: 
                // Lado izquierdo: lo que quiero extraer
                // Lado derecho: de donde sale

                /*
                    const persona = {
                        nombre: "mica",
                        edad: "23",
                        genero: "femenino"
                    }

                    const {nombre, edad} = persona
                */
                const {data} = await axios.get(`https://api.tvmaze.com/shows/${id}`);
                setShow(data)

                // Le doy un nuevo valor al loading en false - quiere decir que ya no está cargando más y la data puede
                // ser mostrada
                setShowsLoading(false);
            // Atrapo (catch) si hay error y lo muestro
            } catch (error) {
                console.log(error);
            }
        };

        // Llamo y ejecuto la función que está arriba
        handleGetShow();
    // *    
    }, [id]); // si quiero hacerlo una vez, esto va vacío []
              // por ejemplo, al momento de una landing, que quiero que se ejecute
              // algo ni bien caes en la página-> llamada a api, mostrar x cosa, etc.


    // 5- DEVUELVO EL COMPONENTE - no olvidar el return
        // RENDERIZADO CONDICIONAL:
        //  Me fijo si sigue cargando - es porque la api todavía no devolvió infor - muestro un loading
        //  Si no, dibujo
        // Si es un if - else -----  variable ? codigo1 : codigo2
        // Si se cumple la condición, que pase una sola cosa ----- variale && codigo
    
    return showsLoading ? (
        <p>Loading</p>
      ) : (
        // 6- DIBUJO y accedo a las propiedades que necesite de mi variable/objeto (línea 33 - con su data guardada en línea 38)
        // entre {}
        <div>
          <Image src={show.image.medium} alt={show.name} width={500} height={500} />
          <h2> {show.name}</h2>
          <p>Generos: </p>
          <ul>
            {/* 7- RECORRO: MAPA: como estamos en una lista, necesitamos RECORRERLA*/}
            {/* 
                    LISTAARECORRER.MAP ((ITEM)=> { ejecuto codigo, muestro li, etc - SIEMPRE ACÁ SE MANEJA ITEM})
            */}
            {/* 
              for (var i = 0; i < show.genres.length; i++) {
                console.log(show.genres[i]);
              }

              show.genres[i] === item
            */}
            {show.genres.map((genre) => {
              // Recordar que si manejo una lista si o si hay que poner el 
              // atributo key: lo mas logico es poner un id alifleres+'idAlfiler'
              return <li key={genre}>{genre}</li>;
            })}

            {
              shows.map((showSingular)=> {
                return <Show show={show} origin="FS"/>
              })
            }
          </ul>{' '}
          <button>

            {/* 8- LINKS DINAMICOS: ver a qué ruta redireccionar y con template literals indicar el id/queryparam */}
            <Link href={`/shows/${id}`}>Show</Link>
          </button>
        </div>
      );
}


// 9- EXPORTO MI COMPONENTE
export default Shows;


// FUNCIONES
// Declaración de función. Esto así solo no hace nada
const miFuncion = (texto1, texto2) => {
  // return texto1 + ' ' + texto2;
  return `${texto1} ${texto2}`;
}

// Llamar
miFuncion("hola", "mundo");




/////////////////////CONTEXT////////////////////////
// Es un reglamento de declaraciones.
// Es decir que declaro cosas que van a ser exportadas desde aca
// e importadas desde quien me consuma -> page, landing, componente...
// Las funciones no se ejecutan hasta que sean llamadas

// Import de cosas propias de react - usestate, definiciones propias del contexto
import React, { useState, createContext, useContext } from 'react';
// Importo axios porque me pide hacer llamadas a apis
import axios from 'axios';

// Creo el contexto
const AppContext = createContext();

const AppProvider = ({ defaultValue = [], children }) => {
  // Defino variables y metodos que cambian a esas variables.
  // Estos setter (setShowdata, setLoading...) NO se exportan
  // Esto quiere decir que cuando quiera usar en una page que importa el context === Page shows/id import Context
  // y yo quiero usarloading, no puedo setLoading(false) XXXXXX
  // Solo desde page puedo usar loading*. Loading solo tiene un valor mostrable true/false
  // y me sirve como flag para mostrar o no la data
  const [showsData, setShowsData] = useState(defaultValue);
  const [singleShowData, setSingleShowData] = useState({});
  const [loading, setLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(true);


  // Funciones vemos adentro que tienen llamadas a api
  // Me pide un parametro
  // El nombre dice que trae shows (plural)
  const handleGetShows = async (query) => {
    console.log('data del search', query);
    try {
      const showsData = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${query}`,
      );
      // La respuesta que yo necesito esta adentro de .data
      console.log(showsData.data);
      // Setea la info que tiene la api
      setShowsData(showsData.data); // SOLO ACA SE CAMBIA EL VALOR DE
      // Cambiarle el valor al loading SOLO ACA SE CAMBIA EL VALOR DE LOADING
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // Otra funcion mas. El nombre lo dice, trae un solo show (singular)
  // Tiene un parametro que es id
  const handleGetSingleShow = async (id) => {
    console.log(id);
    try {
      const singleShowData = await axios.get(
        `https://api.tvmaze.com/shows/${id}`,
      );
      console.log(singleShowData.data);
      setSingleShowData(singleShowData.data);
      setShowLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
    // El provider tiene una prop que es VALUE
    // que me indica tanto VALORES como FUNCIONES que se van a exportar
      value={{
        showsData,
        handleGetShows,
        loading,
        singleShowData,
        handleGetSingleShow,
        showLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  return context;
};

export { AppProvider, AppContext };


