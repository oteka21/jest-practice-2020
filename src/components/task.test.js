import React from 'react'
import {  findByTestAttr, checkProps } from '../__test__/utils'
import { Task } from './task'
import { shallow } from 'enzyme'


const defaultProps = {
  title: "Learn jest",
  status: "assigned"
}

const  setup  = (props  = {}) => {
	const  mixedProps  = {...defaultProps, ...props}
	return  shallow(<Task  {...mixedProps}/>)
}

describe("<task />", () => {

  const wrapper = setup()

  test("Does not throw warning with expected props", () => {
    checkProps(Task, defaultProps)
  })

  test("render container", () => {
    const component = findByTestAttr(wrapper, "container")
    expect(component.length).toBe(1)
  })

  test("Render the task Title", () => {
    const component = findByTestAttr(wrapper, "task-title")
    expect(component.text()).toEqual(defaultProps.title)
  })

  test("resnder te expected text in button (uncomplete)", () => {
    const component = findByTestAttr(wrapper, "task-button")
    expect(component.text()).toEqual("Set to complete")
  })

  test("resnder te expected text in button (complete)", () => {
    const wrapper = setup ({status: "complete"})
    const component = findByTestAttr(wrapper, "task-button")
    expect(component.text()).toEqual("Set to Assigned")
  })
})