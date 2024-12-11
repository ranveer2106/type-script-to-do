import React from 'react'
import "./tasklist.css"
import { TaskBox } from './Taskbox'
import Task from './Task'


interface Props{
  taskList:TaskBox[];
  setTaskList:React.Dispatch<React.SetStateAction<TaskBox[]>>
}

const TaskList:React.FC<Props> = ({taskList,setTaskList}:Props) => {
  return (
    <div className='tasklist'>
      TaskList


      
      {
        taskList.map((i)=>(
            <Task task={i.task} 
             key={i.id}
             taskList ={taskList}
              setTaskList={setTaskList} 
              completed={i.completed}/>
            
        ))
      }

    </div>
  )
}

export default TaskList