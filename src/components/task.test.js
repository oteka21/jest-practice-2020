import React from 'react'
import {  findByTestAttr } from '../__test__/utils'
import { Task } from './task'
import { shallow } from 'enzyme'


const props = {
  id: 1,
  title: "Learn jest",
  status: "assigned"
}

const  setup  = (props  = {}, state=  null) => {
	const  wrapper  =  shallow(<Task  {...props} />)
	if (state) wrapper.setState(state)
	return  wrapper
}

describe("<task />", () => {

  const wrapper = setup(props)

  test("render container", () => {
    const component = findByTestAttr(wrapper, "container")
    expect(component.length).toBe(1)
  })

  test("Render the task Title", () => {
    const component = findByTestAttr(wrapper, "task-title")
    expect(component.text()).toEqual(props.title)
  })

  test("resnder te expected text in button (uncomplete)", () => {
    const component = findByTestAttr(wrapper, "task-button")
    expect(component.text()).toEqual("Set to complete")
  })

  test("resnder te expected text in button (complete)", () => {
    const wrapper = setup ({...props, status: "complete"})
    const component = findByTestAttr(wrapper, "task-button")
    expect(component.text()).toEqual("Set to Assigned")
  })
})