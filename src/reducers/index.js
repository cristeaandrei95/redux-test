import { combineReducers } from 'redux'
import house from './Houses'
import trialList from './Trial'
const Reducers = combineReducers({
  house,
  trialList
})

export default Reducers 
