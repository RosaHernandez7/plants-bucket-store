import React, {useState} from 'react'
import Roses from '../images/roses.jpg'
import { CreateItem } from '../components/CreateItem';
import NavList from '../components/NavList';
function AdminView() {
 
  const [allItems, setAllItems] = useState([
    {name:"Petalos"},
    {name:"Rosas"}
  ]);

  function handleOnSave (item){
    console.log(...allItems)
    setAllItems([...allItems, item]);
    // navigate("/", {replace: true});
  };

  
  return(
    <>
    <CreateItem  handleSubmit={handleOnSave}/>
    <NavList item={allItems}/>
      <button>Añadir Item</button>
      <div>
        <img src={Roses} alt="roses image"/>
        <div>Código: R-Rojas</div>
        <div>Roses</div>
        <div>Precio:$15</div>
        <div>descricion: Flores silvestres</div>
        
        <button>Add to cart</button>

      </div>
      
  </>  
  );
}

export default AdminView;