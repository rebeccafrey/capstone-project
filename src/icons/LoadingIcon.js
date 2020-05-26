import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import styled from 'styled-components/macro'

export default function LoadingIcon() {
  return (
    <Wrapper>
      <LoadingIconStyled />
      <p>loading...</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
`
const LoadingIconStyled = styled(AiOutlineLoading3Quarters)`
  width: 48px;
  height: 48px;
  transform: rotate(0deg);
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    100% {
      transform: rotate(360deg);
    }
  }
`
