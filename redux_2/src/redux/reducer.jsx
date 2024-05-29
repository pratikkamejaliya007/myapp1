import { ADD } from "./action";

const instial_state={
    data:[]
}

const add_data = (state=instial_state,action)=>{

    switch(action.type){

        case ADD : return {
            ...state,
            data:[...state.data,action.payload]
        }

        default : return state

    }

}

export default add_data