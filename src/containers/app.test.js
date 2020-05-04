import React from 'react'
import { shallow } from 'enzyme'
import  App from './app'
import { findByTestAttr, storeFactory } from '../__test__/utils'
import initialState from '../../initialState.json'


const setup = (state={}) => {
  const store = storeFactory(state)
  const wrapper = shallow(<App store={store} />).dive().dive()
  return wrapper
}

describe("Test app mount", () => {
  const wrapper = setup(initialState)

  test("Render th app container", () => {

    const component = findByTestAttr(wrapper, 'container-app')
    expect(component.length).toBe(1)
  })

  test("Render the tasks container", () => {
    const component = findByTestAttr(wrapper, "task-container")
    expect(component.length).toBe(1)
  })

})

describe("Redux props", () => {
  const wrapper = setup(initialState)
  test("have the right piece", () => {
    const tasksProp = wrapper.instance().props.tasks
    expect(tasksProp).toEqual(initialState.tasks)
  })
})