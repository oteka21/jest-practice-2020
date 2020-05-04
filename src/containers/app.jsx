import React from "react"
import { Container, Title, TaskContainer } from './styles'
import { Task } from '../components/task'
import initialState from '../../initialState.json'


export function App ({tasks = initialState.tasks}){
  
    return  <Container data-test="container-app">
      <Title data-test="title">Manage your tasks</Title>
      <TaskContainer data-test="task-container">
        {
          tasks.map((item, index) => <Task key={index} {...item} />)
        }
      </TaskContainer>
    </Container>;
}