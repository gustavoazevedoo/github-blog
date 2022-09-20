import styled from 'styled-components'

import coverImg from '../../assets/cover.png'

export const HeaderContainer = styled.header`
  background-image: url(${coverImg});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 4rem 0 8.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`
