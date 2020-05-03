
import { ADD_TASK } from './types.js'

export function mainReducer (state, {type, payload}){
  switch(type){
    case ADD_TASK:
      return {...state, tasks: [...state.tasks, payload]}
    default:
      return state
  }
}