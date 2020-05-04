import React from 'react'
import { shallow } from 'enzyme'
import { App } from './app'
import { findByTestAttr } from '../__test__/utils'

describe("Test app mount", () => {
  test("Render the app title", () => {
    const app = shallow(<App />)
    const component = findByTestAttr(app, 'container-app') 
    expect(component.length).toBe(1)
  })
})