// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Button from './component/button/Button';
import Form from './component/Todo/form/Form';
import Input from './component/Todo/input/Input';
import ToDo from './component/Todo/ToDo/ToDo';

const todos =[{
  id:1,
  title:"add title",
  description:"add description",
  state:false
},
{
  id:2,
  title:"add title",
  description:"add description",
  state:false},

];

function App() {
  const [state, setstate] = useState(todos);
  const [formdata,setFormData]=useState({
    id:1,
    title:"",
    description:""
  })
  const [mode,setmode] =useState("create")
  const additem =(e)=>{
  e.preventDefault();
  if(mode==="create"){
    setstate([...state,{...formdata,id:Math.floor(Math.random()*1000)}])
  }
  else{ 
    setstate(state.map(item =>( item.id === formdata.id ? formdata :item)))
    setmode("create");
  }
  setFormData({
    id:1,
    title:"",
    description:""
  })
};
const handleitem =(todo)=>{
  setFormData(todo)
  setmode("update")
}

const handleupdate =(e)=>{
  setFormData({...formdata,[e.target.name]:e.target.value})
}
const handledelete =(id)=>{
  setstate(state.filter(item =>(item.id !== id)))
}
  return(
    <div>
      <Form onsubmit={additem}>
        <Input
          name={"title"}
          value={formdata.title}
          onchange={handleupdate}
          lable={"title"}
        />
        <Input
          name={"description"}
          value={formdata.description}
          onchange={handleupdate}
          lable={"description"}
        />
        <Button/>
      </Form>
      {state.map((todo)=>(
        <ToDo id={todo.id.toString()}
         title={todo.title}
         description={todo.description}
         onclickdelete={()=>handledelete(todo.id)}
         onclickupdate={()=>handleitem(todo)}
         />
      )
      )}
    </div>
  )
  
}

export default App;




  // const formdata = new FormData(e.target);
  // const data =Object.fromEntries(formdata.entries());
  // setstate([...state,{...formdata,id:Math.floor(Math.random()*1000)}]);
      {/* <form onSubmit={additem}>
        <lable>title</lable>
        <input type="text" name='title' value={formdata.title} onChange={handleupdate}></input>
        <lable>description</lable>
        <input type="text" name='description' value={formdata.description} onChange={handleupdate}></input>
        <input type={"submit"}></input>
      </form> */}
