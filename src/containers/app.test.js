import React from 'react'
import { shallow } from 'enzyme'
import { App } from './app'
import { findByTestAttr } from '../__test__/utils'

describe("Test app mount", () => {
  test("Render th app container", () => {
    const app = shallow(<App />)
    const component = findByTestAttr(app, 'container-app') 
    expect(component.length).toBe(1)
  })

  test("Render the tasks container", () => {
    const wrapper = shallow(<App />)
    const component = findByTestAttr(wrapper, "task-container")
    expect(component.length).toBe(1)
  })
})