import React from 'react'
import { shallow } from 'enzyme'
import { mainReducer } from '../redux/reducer'
import { applyMiddleware, createStore } from 'redux'

export const  findByTestAttr  = (wrapper, val) => {
	return  wrapper.find(`[data-test='${val}']`)
}


export const  setup  = (Component, props  = {}, state=  null) => {
	const  wrapper  =  shallow(<Component  {...props} />)
	if (state) wrapper.setState(state)
	return  wrapper
}


export  const  storeFactory  = (initialState) => {
  const middlewares = []
	const  createStoreWithMiddleware  =  applyMiddleware(...middlewares)(createStore)
	return  createStoreWithMiddleware(mainReducer, initialState)
}