import React from 'react'
import { FaTrash } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { TaskBox } from './Taskbox'
import { CiEdit } from "react-icons/ci";




interface Props{
    task:string;
    completed:boolean;
    taskList:TaskBox[]
    setTaskList:React.Dispatch<React.SetStateAction<TaskBox[]>>
}

const Task:React.FC<Props> = ({task,completed,taskList,setTaskList}:Props) => {
  return (
    <form className='task-outer'>
        {/* {task} */}
        <input className='task'
        //  onChange={(e)=> setTaskList(e.value)} 
        type="text" value={task} />
        <button><TiTick /></button>
        <button><FaTrash /></button>
        <button><CiEdit /></button>
    </form>
  )
}

export default Task