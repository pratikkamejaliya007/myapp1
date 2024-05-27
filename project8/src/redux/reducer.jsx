import { ADD  } from "./action";

const initialState={
    items:[]
}

const countReducer = (state = initialState,action) => {

    switch(action.type){

        case 'ADD' : return {
            ...state,
            items:[...state.items, action.payload]
        }

        default : return state ;

    }

}

export default countReducer
