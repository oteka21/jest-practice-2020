import React from 'react'
import { shallow } from 'enzyme'

export const  findByTestAttr  = (wrapper, val) => {
	return  wrapper.find(`[data-test='${val}']`)
}


export const  setup  = (Component, props  = {}, state=  null) => {
	const  wrapper  =  shallow(<Component  {...props} />)
	if (state) wrapper.setState(state)
	return  wrapper
}