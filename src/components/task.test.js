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

  test("Render the task titile", () => {
    const component = findByTestAttr(wrapper, "task-title")
    expect(component.text()).toEqual(props.title)
  })

  test("resnder te expected text in button", () => {
    const component = findByTestAttr(wrapper, "task-button")
    expect(component.text()).toEqual("Set to complete")
  })
})