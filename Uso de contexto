import { useEffect } from 'react';

// Import del contexto quiere decir, que en cmp voy a usar 
// el contexto. Pero qué voy a usar del contexto??*
import { useAppContext } from '../contexts/AppContext';

const ShowContainer = ({ id }) => {
// Yo quiero usar la funcion handleGetSingleShow que me la estoy
// trayendo del contexto 
// Especifico en esta linea que va despues de la definicion de
// componente o pagina - NO PONER ADENTRO DEL USEEFFECT 
// NI ADENTRO DEL RENDER
// *Lo que me traiga acá

// singleShowData en una primera instancia {}
  const { handleGetSingleShow, showLoading, singleShowData } = useAppContext();

  // Hay un useEffect cuya dependencia es el id lo que indica que
  // va a estar constantemente escuchando a ver si hay un cambio
  // de id


  // Va en un useEffect porque es ni bien caes a la pagina
  useEffect(() => {
    if (id) {
      // LLAMAR A LA FUNCION PARA QUE SE EJECUTE Y NADA MAS
      handleGetSingleShow(id);
      console.log(showLoading);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]); // http://localhost:5000/shows/:id 8/20/10/

  // Vengo a dibujar y pregunto con el loading como esta
  // Dibujo cada prop que tenga
  return (
    !showLoading && singleShowData && (<div>{singleShowData.name}</div>) // agregar contenido
  );
};

export default ShowContainer


// En App.Context (que es el otro archivo)
//  Defino la funcion
//      esta funcion tiene:     
//                          que recibir un parametro
//                          try/catch de llamada a la api
//                          guarda en una variable mi show
//                          y ya me dice que el loading false


// En mi componente o page
// Importo el context arriba de todo (linea 5)
//      Creo mi componente o page
//          Antes de hacer todo, digo que es lo que necesito del context (línea 16)
//              useEffect LLAMO a la función con el parametro
