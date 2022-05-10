//only displays a list 
import React from 'react'
import '../styles/NavList.css'

function NavList(props) {

 const arr =  props.item;
console.log(arr)
//  const listItems =  arr.map((val,index)=>
//         <li key={index}>{val}</li>
//         );


  return (
     <> {arr.map((post) => {
      return (
        <div>{post.name}</div>
      );
    })}
     </>
  
    
   );
}

export default NavList;
