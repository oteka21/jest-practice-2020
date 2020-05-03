import React from 'react'
import { shallow } from 'enzyme'
import { App } from './app'

describe("Test app mount", () => {
  test("Render the app title", () => {
    const app = shallow(<App />)
    expect(app.find("[data-test='container-app']").length).toBe(1)
  })
})