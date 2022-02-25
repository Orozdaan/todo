

import React from 'react'
import './Form.css'
const  Form=({setInputText,todos,setTodos,inputText})=> {

const inputTextHandler=(e)=>{
  
    setInputText(e.target.value)
}
const submitTodoHandler =(e)=>{
e.preventDefault()
setTodos([
    ...todos,
     {
        text : inputText,
        completed:false,
        id:Math.random().toString(),
    } 
    
]);
// if(setInputText===""){
//     setInputText(false)
// }

  setInputText('')
};
// console.log(todos);
     
  return (
   <form>
       <input  
       value={inputText}
       onChange={inputTextHandler} type="text" />
       <button onClick={submitTodoHandler} type="submit">Add
       </button>
       <div className='select'>
           <select name='todos' className='filter-todo'>
               <option value='all'>All</option>
               <option value='completed'>Completed</option>
               <option value='uncompleted'>Uncompleted</option>
           </select>
       </div>
   </form>
  )
}

export default Form
