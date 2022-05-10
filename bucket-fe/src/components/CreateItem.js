import React, { useState } from 'react'

export const CreateItem= (props) => {
  const item ={
    // code:"",
    name:""
    // price:"",
    // description:"",
  };
    const [newItem, setNewItem] = useState(item);
  
    function handleChange(e) {
      const name = e.target.name;
      const value = e.target.value;
      // console.log(name+"+"+value);
      setNewItem({ newItem, [name]: value }); //probe quitando los ... y funciono el input
    }
    function handleSubmit(e) {
      console.log("newitem "+newItem.name);
      //(newItem)
      props.handleSubmit(newItem); //le envio la informacion del nuevo contacto a la funcion referenciada AddPerso
      // setNewItem(''); //resetea el input 
      e.preventDefault();
    }
  return (
    <div>

     <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name of the product"
          value={newItem.name}
          onChange={handleChange}/>
        <button type="submit">Add</button>
      </form>

    </div>
  )
}
