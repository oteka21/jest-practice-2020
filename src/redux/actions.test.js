import {addTask } from './actions'
import { ADD_TASK }  from './types'

describe("TEsting actions", () => {
  test("test the add action", () => {

    const data = { id: 4, title: "Hacer tests", status: "assigned" }
    expect(addTask(data)).toEqual({
      type: ADD_TASK,
      payload: data
    })
  })
})
