import {  useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { TaskBox } from './Components/Taskbox'
import React from 'react'
import Input from './Components/Input'
import TaskList from './Components/TaskList'

export const App:React.FC = () => {

  // const [task,setTask] = useState<string>("");
  const [task, setTask] = useState<string>('');

  const [taskList, setTaskList] = useState<TaskBox[]>([]);

  const handleAdd = (e: React.FormEvent)=>{
    e.preventDefault();
    if (task) {
      setTaskList([...taskList,{id:Date.now(),task:task,completed:false}])
      setTask("")
    }
  };
  console.log(`tasklist : ${taskList}`);
  console.log(taskList);
  
  

  return (
    <div className="app">



      <h1 className='heading'>Taskify</h1>
      <Input task={task} setTask={setTask} handleAdd = {handleAdd}/>


      <TaskList taskList={taskList} setTaskList = {setTaskList}/>


    </div>
  )
}


export default App
