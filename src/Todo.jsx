import { useReducer, useState } from "react"
import './Todo.css'

function todoReducer(todoElements, action) {
  switch(action.type) {
    case 'add':
      nextKey++
      return([...todoElements,{
        key:nextKey,text:action.text
      }])
    case 'edit':
      return(todoElements.map((elem)=>{
        if (elem.key == action.key) return {key:action.key, text: action.text}
        else return elem
      }))
    case 'delete':
      return(todoElements.filter((elem)=>elem.key !== action.key))
  }
}

export default function Todo() {
  const [todoElements, dispatch] = useReducer(todoReducer, initialTodoElements)
  const [addedTodo, setAddedTodo] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({
      type:'add',
      text:addedTodo
    })
    setAddedTodo('')
  }
  function handleChange(e) {
    setAddedTodo(e.target.value)
  }
  function handleEdit(key, text) {
    dispatch({
      type:'edit',
      key: key,
      text:text
    })
  }
  function handleDelete(key) {
    dispatch({
      type:'delete',
      key:key
    })
  }
  return (<div className="TodoContainer">
    <h1>Nice Todo List</h1>
    <div className="TodoContentContainer">
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Add Todo</label>
      <input type='text' name='todo' onChange={handleChange} value={addedTodo} autoComplete="off"/>
      <button type='submit'>Submit</button>
    </form>
    <ol className="TodoList">
    {todoElements.map((elem, idx)=>{
      return (<TodoElement idx = {idx} onDelete={()=>handleDelete(elem.key)} key={elem.key} text={elem.text} edit={(text)=>handleEdit(elem.key, text)}/>)
    })}
    </ol>
    </div> 
  </div>)
}

function TodoElement({text, edit, onDelete, idx}){
  const [isEditing, setIsEditing] = useState(false)
  const [editedTodo, setEditedTodo] = useState(text)
  function handleEditStart() {
    setIsEditing(true)
  }
  function handleChange(e) {
    setEditedTodo(e.target.value)
  }
  function handleEditFinish() {
    edit(editedTodo)
    setIsEditing(false)
  }
  return (
  <li>
    {isEditing?
    <>
      <div>{idx+1}.&nbsp;<input value={editedTodo} onChange={handleChange} autoComplete="off"/></div>
      <div>
        <button onClick={handleEditFinish}>finish</button>
        <button onClick={onDelete}>delete</button>
      </div>
    </>
    :
    <>
      <div>{idx+1}. {text}</div>
      <div>
        <button onClick={handleEditStart}>edit</button>
        <button onClick={onDelete}>delete</button>
      </div>
    </>}
  </li>)
}

const initialTodoElements = [{
  'key':0,
  'text':'study math',
  'done':false
},{
  'key':1,
  'text':'study physics',
  'done':false
},{
  'key':2,
  'text':'study AI',
  'done':false
}]
let nextKey = initialTodoElements.length-1