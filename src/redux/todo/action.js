import { ADDED,TOGGLER,SELECTCOLOR,CLEARCOMPLETED,DELETE,ALLCOMPLETED } from "./actionTypes";
export const added=(text)=>{
    return {
        type : ADDED,
        payload:text
    }
}
export const toggler=(id)=>{
    return {
        type : TOGGLER,
        payload:id,
    }
}
export const selectColor=(todoId,color)=>{
    return {
        type : SELECTCOLOR,
        payload:{
            todoId,
            color
    }
}
}
export const deleteTodo=(id)=>{
    return {
        type: DELETE,
        payload: id
    }

}
export const allCompleted=(text)=>{
    return {
        type : ALLCOMPLETED,
       
    }
}
export const clearCompleted=()=>{
    return {
        type : CLEARCOMPLETED,
     
    }
}

