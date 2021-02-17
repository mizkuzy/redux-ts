import {combineReducers} from 'redux'
import repositoriesReducer from './repositories/repositoriesReducer'

const reducers = combineReducers({repositories: repositoriesReducer})
export default reducers