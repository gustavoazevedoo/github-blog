import styled from 'styled-components'

export const ProfileContainer = styled.section`
  background-color: ${({ theme }) => theme['base-profile']};
  padding: 2rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  max-width: 56rem;
  width: 100%;
  margin: -5.25rem auto 0;

  display: flex;
  align-items: center;
  gap: 2rem;
`

export const Avatar = styled.img`
  width: 148px;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  margin-left: 0.5rem;
`

export const ProfileContent = styled.div`
  width: 100%;

  p {
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`

export const ProfileHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 0.5rem;

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme['base-title']};
    line-height: 1.3;
  }

  a {
    position: relative;
    font-size: 0.75rem;
    line-height: 1.6;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme['brand-blue']};

    svg {
      margin-left: 0.5rem;
    }

    &::before {
      content: '';
      transition: width 250ms;

      position: absolute;
      bottom: 0;
      left: 0;
      width: 0px;
      height: 1px;
      background-color: ${({ theme }) => theme['brand-blue']};
    }

    &:hover::before {
      width: 100%;
    }
  }
`

export const ProfileFooter = styled.footer`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${({ theme }) => theme['base-subtitle']};

    svg {
      color: ${({ theme }) => theme['base-label']};
    }
  }
`
