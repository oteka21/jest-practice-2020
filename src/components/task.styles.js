import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  background: #2F2F33;
  padding: 20px 10px;
  border-radius: 8px;
`

export const Title = styled.p`
  font-size: 18px;
  display: block;
`

export const Time = styled.span`
  margin-left: auto;
`


const handlecolosr = {
  assigned: "#fff",
  complete: "#32773e"

}
export const Button = styled.button`
  background: ${props => handlecolosr[props.type]};
  border-radius: 4px;
  border: 0;
  padding: 4px;
  font-size: 14px;
  cursor: pointer;
  color: ${props => ["assigned"].includes(props.type) ? "#2F2F33" : "#D8D8D8"};

  &:hover{
    opacity: .8;
  }
`