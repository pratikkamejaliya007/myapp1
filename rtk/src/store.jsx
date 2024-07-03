import {configstore} from '@reduxjs/toolkit'
import Counterslice from './Counterslice'

const store=configstore({

    reducer : Counterslice

})

export default store