import React, {useState} from 'react'

const TodoContext = React.createContext()

const ContextProvider = ({children}) => {

    const [todos , setTodos] = useState([]) 
    const [task, setTask] = useState('')

    const handleTodos =(event)=>{
        event.preventDefault()
        if(task){
            const newTodo = {
                id: new Date().getTime().toString(),
                todo: task,
                completed: false
            }
             setTodos(prevTodos => [...todos, newTodo])
        setTask('')
        }
       
    }
    const addTasks =(event) => setTask(event.target.value)

    const checkedItem =(id)=>{
     const selectedItem = todos.filter(item => item.id === id)
      setTodos(!selectedItem.completed)
    }

    return (
        <TodoContext.Provider value={{addTasks,task,handleTodos,todos, checkedItem}} >
         {children}   
        </TodoContext.Provider>
    )
}

export  {ContextProvider, TodoContext}
