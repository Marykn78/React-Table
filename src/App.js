// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import ToDo from './component/Todo/ToDo';
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
  const additem =(e)=>{
  e.preventDefault()
  const formdata = new FormData(e.target);
  const data =Object.fromEntries(formdata.entries());
  setstate([...state,{...data,id:Math.random()*100}]);
}
  return(
    <div>
      <form onSubmit={additem}>
        <lable>name</lable>
        <input type="text" name='firstname'></input>
        <lable>lastname</lable>
        <input type="text" name='lastname'></input>
        
        <button>add</button>
      </form>
      {state.map((todo)=>(
        <ToDo id={todo.id.toString()}
         title={todo.title}
         description={todo.description}/>
      )
      )}
    </div>
  )
  
}

export default App;


