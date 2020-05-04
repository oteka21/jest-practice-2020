import styled, { createGlobalStyle } from 'styled-components'


export const GlobalStyles = createGlobalStyle`
  html{
    box-sizing: border-box;
    font-family: system-ui, Helvetica;
  }
  *, *:before, *:after{
      box-sizing: inherit;
  }
  ul, li, h1, h2, h3, p, button {
      margin: 0;
      padding: 0;
  }
  ul {
      list-style: none;
  }
  button { 
      background : transparent;
      border: 0;
      outline: 0
  }

  body{
    background: #1D1E20;
    color: #D8D8D8;
  }
`

export const Container = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`

export const Title = styled.h1`
  text-align: center;
  width: 100%;
`

export const TaskContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  
`