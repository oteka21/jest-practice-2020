import React from "react"
import { Container, Title } from './styles'

export function App (){
    return  <Container data-test="container-app">
      <Title data-test="title">Manage your tasks</Title>
    </Container>;
}
