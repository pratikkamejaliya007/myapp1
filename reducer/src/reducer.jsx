import { INCREMENT , DECREMENT } from "./action";

const reducer = (state,action)=>{

    switch(action.type){

        case INCREMENT: return{
            ...state,
            prices: state.prices.map(el=>
                el.id === action.payload ? {
                    ...el,value: el.value + el.prices
                } : el
            )
        }

        case DECREMENT: return{
            ...state,
            prices: state.prices.map(el=>
                el.id === action.payload ? {
                    ...el,value: el.value - el.prices
                } : el
            )
        }

        default : return state

    }

}

export default reducer
