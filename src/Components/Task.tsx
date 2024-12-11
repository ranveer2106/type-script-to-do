import React from 'react'
import { FaTrash } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { TaskBox } from './Taskbox'



interface Props{
    task:string;
    completed:boolean;
    taskList:TaskBox[]
    setTaskList:React.Dispatch<React.SetStateAction<TaskBox[]>>
}

const Task:React.FC<Props> = ({task,completed,taskList,setTaskList}:Props) => {
  return (
    <li>
        {/* {task} */}
        <input
        //  onChange={(e)=> setTaskList(e.value)} 
        type="text" value={task} />
        <button><TiTick /></button>
        <button><FaTrash /></button>
        <button>{completed?"yes":"no"}</button>
    </li>
  )
}

export default Task