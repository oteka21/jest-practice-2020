import { storeFactory } from '../__test__/utils'
import  initialState  from '../../initialState.json'
import { addTask } from './actions'

describe("test the reducer", () => {
  const store = storeFactory(initialState)
  test("initialize the store", () => {
    expect(store.getState()).toEqual(initialState)
  })

  test("Change the state", () => {
    const task = { title: "test redux", status: "complete"}

    store.dispatch(addTask(task))
    
    expect(store.getState()).toEqual({
      ...initialState,
      tasks: [
        ...initialState.tasks,
        task
      ]
    })
  })

})