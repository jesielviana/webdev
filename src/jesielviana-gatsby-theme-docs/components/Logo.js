import React from 'react'
import styled from '@emotion/styled'

const LogoText = styled.span`
  margin: 0;
  border: none;
  padding: 0;
  font-size: 2rem;
  font-family: 'Yanone Kaffeesatz';
  color: var(--heading);
  @media (max-width: 359px) {
    font-size: 1.5rem !important;
  }
`

export default function Logo (props) {
  return (
    <LogoText>
      Webdev I
    </LogoText>
  )
}
