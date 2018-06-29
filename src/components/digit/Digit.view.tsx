import React from 'react'
import * as S from './Digit.styled'

// Component displaying one duration part
const Digit = ({ value, label }: Props) => (
  <S.Wrapper>
    <S.Digit>{value}</S.Digit>
    <S.Unit>{label}</S.Unit>
  </S.Wrapper>
)

export interface Props {
  value: string
  label: string
}

export default Digit
