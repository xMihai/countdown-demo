import React from 'react'
import Digit, { Props as DigitProps } from '../digit'
import * as S from './App.styled'

// Root component view
const App: React.ComponentType<Props> = ({ durationParts }) => (
  <S.Wrapper>{durationParts.map(props => <Digit {...{ ...props, key: props.label }} />)}</S.Wrapper>
)

export default App

export type DurationParts = DigitProps[]

export interface Props {
  durationParts: DurationParts
}
