//como comente anteriormente este sera nuestro customHOOK

import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs=(category)=>{

    //un useState es para establecer el estado de la imagen
    //el otro es para saber si todas las imagen cargaron 
    const [images,setImages]=useState([]);
    const [isLoading, setLoading]=useState(true);
    
    const getImages=async()=>{

        //llama a nuestra peticion creada, y el valor que retorna la guardaremos etn una variable newImages
        const newImages= await getGifs(category);

        //esa variable la usaremos para establecerla como estado
        setImages(newImages);
        //al establecerse el estado , ya no estara cargando , porque la imagen estaran cargadas
        setLoading(false)
    }

    useEffect(()=>{getImages();},[])

    
    return {
        images,
        isLoading
    }
}