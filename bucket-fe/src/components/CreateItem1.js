import React from 'react'

class CreateItem1 extends React.Component{
  constructor(){
    super();
    this.state={
        name:"",
    }
  }
    
  
    handleChange(e) {

      this.setState({
        name:e.target.value
      });
 
    }
     handleSubmit(e) {
      //props.handleSubmit(newItem); //le envio la informacion del nuevo contacto a la funcion referenciada AddPerso
      // setNewItem(''); //resetea el input 
      e.preventDefault();
    }
    render(){
      return (
    <div>

     <form >
        <input
          type="text"
          placeholder="Name of the product"
          onChange={this.handleChange.bind(this)}
          value={this.name}/>
        <button type="submit">Add</button>
      </form>

    </div>
  )
    }
  
}

export default CreateItem1;