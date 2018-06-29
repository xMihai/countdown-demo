import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 54px;
  height: 54px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1;
`

export const Digit = Cell.extend`
  font-size: 36px;
`

export const Unit = Cell.extend`
  font-size: 8px;
  text-transform: uppercase;
`
