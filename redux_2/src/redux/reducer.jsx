import { ADD , DELETE ,EDIT } from "./action";

const instial_state={
    data:[]
}

const add_data = (state=instial_state,action)=>{

    switch(action.type){

        case ADD : return {
            ...state,
            data:[...state.data,action.payload],
        }

        case DELETE : return {
            ...state,
            data: state.data.filter(item=>item.id !== action.payload)
        }

        case EDIT:
            return {
              ...state,
              data: state.data.map(item =>
                item.id === action.payload.id ? { ...item, ...action.payload.data } : item
              )
        };

        default : return state

    }

}

export default add_data