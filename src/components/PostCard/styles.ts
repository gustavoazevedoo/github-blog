import styled from 'styled-components'

export const PostCardContainer = styled.div`
  background-color: ${({ theme }) => theme['base-profile']};
  padding: 2rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  margin: -5.25rem auto 0;
`

export const PostCardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 0.5rem;

  a {
    position: relative;
    font-size: 0.75rem;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme['brand-blue']};

    display: flex;
    align-items: center;
    gap: 0.5rem;

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

export const PostTitle = styled.h1`
  font-size: 1.5rem;
  line-height: 1.3;
  color: ${({ theme }) => theme['base-title']};
  margin: 1.25rem 0 0.5rem;
`

export const PostCardFooter = styled.footer`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${({ theme }) => theme['base-span']};

    svg {
      color: ${({ theme }) => theme['base-label']};
    }
  }
`
