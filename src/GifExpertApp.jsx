import { useState } from "react"
import { AddCategory, GifGrid } from './components';
export const GifExpertApp=()=>
{
    //por defecto el valor sera un arreglos ya que queremos almacenar el valor de las categorias agregadas
    const [categories,setCategories]=useState(["one punch"])

    //metodo que se encarga de agregar la categoria al arreglo
    const onAddCategory=(newCategory)=> {
        //condicional para evitar que una categoria tenga el mismo nombre 
        if(categories.includes(newCategory))return;
        //si no tiene el mismo nombre se establecera una nueva categoria siendo esta , la nueva categoria mas las categorias ya establecidads
        setCategories([newCategory,...categories]);

    }
    return (
        <>
            <h1>GifExpertApp</h1>

            {/*Este componente se le envia como propiedad una funcion para que este pueda gestionar la creacion de la categoria */}
            <AddCategory onNewCategory={(value)=>onAddCategory(value)}/>

            {/*Este bucle nos generara la galeria de gif */}
            {
                categories.map((category)=>(
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }
        </>
    )
}