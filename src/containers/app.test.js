import React from 'react'
import { mount } from 'enzyme'
import { App } from './app'

describe("Test app mount", () => {
  test("Render the app title", () => {
    const app = mount(<App />)
    expect(app.find(".title").text()).toEqual("Hello world!")
  })
})