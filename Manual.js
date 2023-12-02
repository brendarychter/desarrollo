/*
    - Orden en definición de componente - props - useEffect/useState
        - Destructuring
        - Template literals
        - Llamadas a Apis: es objeto o lista? - axios - async/await - try/catch
        - Renderizado condicional
        - filter/map/find
        - Router - link
    - Context
    - ...rest
    - Rutas dinámicas
*/

// - Orden en definición de componente - props
//      1- IMPORTS
//          Van arriba de todo en todos los archivos. Chequear que si se escribe una función/variable que no está en tu archivo 
//          o que marca el vscode, es porque no está importado.    
import {axios} from 'axios';
import {Cajita} from '../Cajita';
import {useEffect, useState} from 'react';
import {useAppContext} from './Context';


//      2- DEFINICIÓN DE COMPONENTE
//          Le pongo nombre al componente o la página o context que necesite y, si es necesario, 
//          las props que va a recibir de su padre

const Show = ({id})=> {

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

                const show = await axios.get(`https://api.tvmaze.com/shows/${id}`);
                
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
    }, [id]);


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
            {show.genres.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>{' '}
          <button>

            {/* 8- LINKS DINAMICOS: ver a qué ruta redireccionar y con template literals indicar el id/queryparam */}
            <Link href={`/shows/${id}`}>Show</Link>
          </button>
        </div>
      );
}


// 9- EXPORTO MI COMPONENTE
export default Show;
