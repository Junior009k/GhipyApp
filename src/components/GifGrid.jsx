import {GifItem} from './GifItem';
import{ useFetchGifs} from '../hooks/useFetchGifs';

export const GifGrid=({category})=>{

    //esto es un hook pero no se me agrego automaticamente como useState
    //esto pasa ya que es un custom HOOK Y aun no he creado la referencia 
    const {images, isLoading}=useFetchGifs(category);

    return(
        <>
            <h3>{category}</h3>
            {isLoading && (<h2>cargando...</h2>)}

            <div className='card-Grid'>
            {
                    images.map((image)=>(
                        <GifItem key={image.id} {...image}/>   
                    ))
                }
            </div>
            
        </>
    )
}