import React,{useRef} from 'react'

interface Props1{
    task:string;
    setTask:React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void

}

const Input:React.FC<Props1> = ({task,setTask,handleAdd}:Props1) => {
    // console.log(`task : ${task}`);
    const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
        <form action="" onSubmit={(e)=>{
            handleAdd(e)
            inputRef.current?.blur
        }} className='inputform' >
            <input ref={inputRef} value={task} onChange={(e)=>setTask(e.target.value)} type="text" className='inputBox' placeholder="Enter a task"/>
            <button  className='inputSubmit' type='submit'>+</button>
        </form>
    </div>
  )
}

export default Input