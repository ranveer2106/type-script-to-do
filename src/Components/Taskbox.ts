export interface TaskBox {
    id:number;
    task:string;
    completed:boolean
}

// type Action = 
// | {type:'add',payload:string};
// | {type:"remove";payload:number};
// | {type:'done',payload:number};

// import React,{act, useReducer} from 'react'

// const TaskReducer = (state:TaskBox[],action:Action) => {
//     switch (action.type) {
//         case "add":
//             return [
//                 ...state,
//                 { id :Date.now(),task:action.payload,completed:false}
//             ];
//         case "remove":
//             return state.filter((task)=>task.id !== action.payload);
//         case "done":
//             return state.filter((task)=>
//             task.id !== action.payload ? {...task,completed:!task.completed}
//             )
//             default:
//             return false;
//     }
// }

// const Reducer:React.FC = () => {

//     const [state, dispatch] = useReducer(Reducer,[])

//   return (
//     <>
//         <div>Reducer</div>
//     </>
//   )
// }

// export default Reducer