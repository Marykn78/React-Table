// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Button from './component/button/Button';
import Form from './component/Todo/form/Form';
import Input from './component/Todo/input/Input';
import ToDo from './component/Todo/ToDo/ToDo';
// import 
// const users =[{id:1,name:'maryam',lastname:'kohan'},
// {id:2,name:'maryam',lastname:'dds'},
// {id:3,name:'maryam',lastname:'ffdd'},
// ];

const todos =[{
  id:1,
  title:"title",
  description:"Say",
  state:false
},
{
  id:2,
  title:"new",
  description:"Say",
  state:false},
{
  id:3,
  title:"buy",
  description:"Say",
  state:true}
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
  // const formdata = new FormData(e.target);
  // const data =Object.fromEntries(formdata.entries());
  // setstate([...state,{...formdata,id:Math.floor(Math.random()*1000)}]);
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
      {/* <form onSubmit={additem}>
        <lable>title</lable>
        <input type="text" name='title' value={formdata.title} onChange={handleupdate}></input>
        <lable>description</lable>
        <input type="text" name='description' value={formdata.description} onChange={handleupdate}></input>
        <input type={"submit"}></input>
      </form> */}
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


