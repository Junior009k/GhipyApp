//es javaScript puro ya que no pienso renderizar nada en este documento

//es una funcion asincrona, ya que tenemos que esperar que la peticion cargue
export const getGifs=async (category)=>
{
    //comillas simples, cada comilla tiene su propia funcion 
    //la peticion no me funciona ya que me falta el parametro de busqueda o sea q 
    const url= `https://api.giphy.com/v1/gifs/search?api_key=2ZfAPbF1r2mT0hxnt6V054p5LsLseem2&q=${ category }&limit=10`;

    //utilizaremos await para esperar que cargue nuestra respuesta
    const resp=await fetch(url);

    //una vez cargada la respuesta la pasamos a formato json
    const {data}= await resp.json();


    //guardamos los datos en una variable gifs
    const gifs=data.map(img=>({

        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url
    }));
    return gifs;
}