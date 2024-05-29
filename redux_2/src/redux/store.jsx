import add_data from "./reducer";
import {createStore} from 'redux'

const store=createStore(add_data)

export default store