import React, {useContext} from 'react'
import {TodoContext} from '../ContextProvider'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';



const AllTasks = () => {

    const {addTasks, task, handleTodos, todos, checkedItem} = useContext(TodoContext)
    console.log(todos);
    return (
        <div className="">
         <div className="inputs">
             <input type="text" onChange={addTasks} value={task}/>
             <button  onClick={handleTodos}>Add</button>
         </div>
         <div className="lists">
            {todos.map(task =>(
                <div key={task.id} className="task-item">
                    <div>
                        <input type="checkbox"/> 
                    </div>
                    <div className="para">
                    <p >{task.todo}</p>
                    </div>       
                     <DeleteOutlineIcon/>
                </div>
            ))}
         </div>
        </div>
    )
}

export default AllTasks
