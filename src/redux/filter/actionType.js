import { COLORCHANGED, STATUSCHANGED } from "./action";



export const statusChange=(status)=>{
    return {
        type: STATUSCHANGED,
        payload: status,
    };
}

export const colorChanged=(color,changeType)=>{
    return {
        type : COLORCHANGED,
        payload:{
            color,
            changeType

        },

    };
};