import React from 'react'
import { FaTrash } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { TaskBox } from './Taskbox'
import { CiEdit } from "react-icons/ci";
// import TaskList from './TaskList';




interface Props{
    task:string;
    completed:boolean;
    taskList:TaskBox[];
    key:number;
    setTaskList:React.Dispatch<React.SetStateAction<TaskBox[]>>
}

const Task:React.FC<Props> = ({task,taskList,setTaskList}:Props) => {
  
  const handleDone= (id:number,completed:boolean)  => {
    setTaskList(taskList.map(task)=>key===id?{...taskList,completed})
  }

  return (
    <form className='task-outer'>
        {/* {task} */}
        <input className='task'
        //  onChange={(e)=> setTaskList(e.value)} 
        type="text" value={task} />
        <button onClick={()=>handleDone(key,completed)}><TiTick /></button>
        <button><FaTrash /></button>
        <button><CiEdit /></button>
    </form>
  )
}

export default Task