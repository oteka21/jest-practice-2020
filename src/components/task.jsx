import React from 'react'
import { Container, Title, Button } from './task.styles'
import PropTypes from 'prop-types'

export function Task(props){
  return <Container data-test="container">
    <Title data-test="task-title">{props.title}</Title>
    <div>
      <Button type={props.status} data-test="task-button">
        {
          props.status === "assigned"
          ? "Set to complete"
          : "Set to Assigned"
        }
      </Button>
    </div>
  </Container>
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
}