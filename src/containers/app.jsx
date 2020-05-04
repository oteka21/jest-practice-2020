import React, { Component } from "react"
import { Container, Title, TaskContainer } from './styles'
import { Task } from '../components/task'
import { connect } from 'react-redux'


export class App extends Component {
    render(){

      const {tasks} = this.props
      return  <Container data-test="container-app">
        <Title data-test="title">Manage your tasks</Title>
        <TaskContainer data-test="task-container">
          {
            tasks.map((item, index) => <Task key={index} {...item} />)
          }
        </TaskContainer>
      </Container>;
    }
}

const mapStateToProps = ({tasks}) => ({
  tasks
})

export default connect(mapStateToProps)(App)