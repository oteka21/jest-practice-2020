import React from 'react'
import { Container, Title, Button } from './task.styles'

export function Task(props){
  return <Container>
    <Title>{props.title}</Title>
    <div>
      <Button type={props.status}>
        {
          props.status === "assigned"
          ? "Set to complete"
          : "Set to Assigned"
        }
      </Button>
    </div>
  </Container>
}