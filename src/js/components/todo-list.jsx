
import React, {useEffect, useState} from "react";

function Todo(){
    const [taskList, setTaskList ] = useState(["clean room", "Eat Breakfast"]);
    const [newTask, setNewTask] = useState('')
    const [footer, setFooter] = useState()
    const taskLeft = taskList.length
    function add() {
        if (newTask.trim() === "") {
            alert("Please add a task");
            return;
        }
        setTaskList([...taskList, newTask]);
        setNewTask(""); 
    }
    function deleted (index){
         setTaskList(taskList.filter((_,i)=> i!==index))
    }
    useEffect(()=>{setFooter(`${taskLeft} task left`)},[taskList])
      

    return( 
        <div className="todoInput">
            <input type="text" onChange={e => setNewTask(e.target.value)} value={newTask}  placeholder="What needs to be done"/>
            <button className="btn addButton" onClick={add}>Add</button>
            
            <div className="taskToDo">
                <ul className="taskUl">
                    {taskList.map((task,index)=>
                    <li key={index}>
                         <p>{task}<button className="close" onClick={()=>deleted(index)}>x</button></p>
                         
                    </li>)
                    }
                </ul>
            </div>
            <div className="todoFooter">
              <p>{footer}</p>
            </div>
        </div>
        
    )

    
}
export default Todo
