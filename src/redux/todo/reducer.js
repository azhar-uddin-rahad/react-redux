import { allCompleted } from "./action";
import { DELETE } from "./actionTypes";
import {
    ADDED,
    ALLCOMPLETED,
    CLEARCOMPLETED,
    SELECTCOLOR,
    TOGGLER,
} from "./actionTypes";
import initialState from "./initialState";

const nextTodoId=(todo)=>{
    const maxId=todo.reduce((maxId,todo)=>Math.max(todo.id,maxId),0);
    return maxId + 1

}


const reducer=(state=initialState,action)=>{
switch(action.type){
    case ADDED :
        return [
            ...state,
            {
                id: nextTodoId(state),
                text:action.payload,
                completed: false
            }
        ];
        case TOGGLER:
            return state.map(todo =>{
                if(todo.id !== action.payload){
                    return todo
                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }) 
            case SELECTCOLOR: 
            const { todoId,color}=action.payload;
            return state.map(todo=>{
                if(todo.id !== todoId ){
                    return todo
                }
                return{
                    ...todo,
                    color: color
                }
            })
            case DELETE: 
            return state.filter(todo => todo.id !== action.payload);
            case ALLCOMPLETED:
                return state.map((todo) =>{
                   return{
                    ...todo,
                    completed:true
                   }
                })      
                case CLEARCOMPLETED:
                    return state.filter(todo=> !todo.completed)  
                default:
                    return state    
}    

}

export default reducer