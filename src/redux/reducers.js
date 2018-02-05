import { combineReducers } from 'redux'
import {
  ADD_USER,
  SEARCH_USER,
  EDIT_USER,
  VisibilityFilters
} from './actions'
const { SHOW_USER } = VisibilityFilters

function visibilityFilter(state = SHOW_USER, action) {
  switch (action.type) {
    case SEARCH_USER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_USER:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case EDIT_USER:
      return state.map((user, text) => {
        if (text === action.text) {
          return Object.assign({}, user, {
            completed: !user.completed
          })
        }
        return user
      })
    default:
      return state
  }
}

const userApp = combineReducers({
  visibilityFilter,
  todos
})

export default userApp