import { useState } from "react"

export  const AddCategory=({onNewCategory})=>
{
    //esto es para guardar el estado de nuestro input 
    const[inputValue, setInputValue]= useState("")

    //una cosa que no sabia es que se puede desestructurar objetos, cuando esta llamando entre llaves{} se llama a una propiedad en especifico
    //cada vez que se cambie el valor del input esta funcion se ejecutara
    const onInputChange=({target})=>
    {
        //e.target.value es el valor de nuestro input
        setInputValue(target.value)
        
    }

    //me falto una funcion xD
    const onSubmit=(event)=>
    {
        //para que no me recargue la pagina al enviar el formulario cuando se ejecuta un on Change
        event.preventDefault();

        //EVALUA que no se pueda enviar un valor en blanco 
        if(inputValue.trim().length<=1 )return;

        //limpia el input
        setInputValue("");

        //onNewCategory es la funcion que le estamos pasando como props 
        //.trim() sirve para eliminar los espacios 
        onNewCategory(inputValue.trim());

    }
    return(

        <>
            {/*Haremos nuestro formulario */}
            <form onSubmit={onSubmit}>
                {/*en lo personal me gusta hacer los input asi pero si quieren pueden hacerlo en cascada*/}
                <input type="Text" placeholder="buscar Gifs" value={inputValue} onChange={onInputChange}/> 
            </form>
        </>
    )
}