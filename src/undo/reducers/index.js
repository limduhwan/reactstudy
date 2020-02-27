import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from '../containers/visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
