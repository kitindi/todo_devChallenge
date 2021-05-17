import React, {useContext} from 'react'
import {TodoContext} from '../ContextProvider'



const Active = () => {

    const {addTasks, task, handleTodos} = useContext(TodoContext)
    console.log(task);
    return (
        <div className="">
         <div className="inputs">
             <input type="text" onChange={addTasks} value={task}/>
             <button  onClick={handleTodos}>Add</button>
         </div>
         <div className="lists">
Active
         </div>
        </div>
    )
}

export default Active
