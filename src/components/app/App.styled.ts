import styled from 'styled-components'

// Styled root wrapper
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;

  & > * {
    margin: 8px;
  }
`
