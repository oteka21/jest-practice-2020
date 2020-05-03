import { ADD_TASK } from './types'

export function addTask(task){
  return {
    type: ADD_TASK,
    payload: task
  }
}