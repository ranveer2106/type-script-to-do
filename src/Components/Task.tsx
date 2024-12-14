import React,{useState} from 'react';
import { FaTrash } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
// import { CiEdit } from "react-icons/ci";
import { FaPen } from "react-icons/fa";

import { TaskBox } from './Taskbox'; // Assuming TaskBox is defined elsewhere

interface Props {
    task: string;
    completed: boolean;
    id: number; // Added an id field for each task
    taskList: TaskBox[];
    setTaskList: React.Dispatch<React.SetStateAction<TaskBox[]>>;
}

const Task: React.FC<Props> = ({ task, completed, id, taskList, setTaskList }) => {

  const [edit,setEdit] = useState<boolean>(false);
  const [value,setValue] = useState<string>(task);

    const handleDone = (id: number) => {
        setTaskList(taskList.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const handleDelete = (id: number) => {
        setTaskList(taskList.filter(task => task.id !== id));
    };

    const handleEdit = (e:React.FormEvent,id: number) => {
        // You can implement an edit function here (like opening an input for the user)
        

        e.preventDefault();

        setTaskList(taskList.map((task)=>(
          task.id === id ?{...task,task:value}:task
        )))

        setEdit(false)
        
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    const editc = () => {
      if (!edit && !completed) {
        setEdit(true)
      }
      else{
        setEdit(false)
      }
    }

    // const inputRef = useRef<>(null)

    return (
        <form className='task-outer' onSubmit={(e)=>handleEdit(e,id)}>
          {
            edit&&!completed? (

              <input
                  className={`task ${edit?"edit":" "}`}
                  type="text"
                  value={value}
                  onChange={handleInputChange} // Making the task input read-only as it is just for display
              />
            ):(

              
              <input
                  className={`task ${completed?"yes":"no"}`}
                  type="text"
                  value={value}
                  readOnly // Making the task input read-only as it is just for display
              />
              
            )
          }
            <button type="button"  onClick={() => handleDone(id)}>
                <TiTick />
            </button>
            <button type="button" onClick={() => handleDelete(id)}>
                <FaTrash />
            </button>
            <button type="button" onClick={editc}>
                {/* <CiEdit /> */}
                <FaPen />

            </button>
        </form>
    );
};

export default Task;
