import { ADD ,DECREMENT } from "./action";

const initialState={
    data:{}
}

const countReducer = (state = initialState,action) => {

    switch(action.type){

        case ADD : return {
            ...state,
            
        }

        case DECREMENT : return {
            ...state,
            count :state.count > 0 ? state.count - 1 :0
            
        }

        default : return state ;

    }

}

export default countReducer
