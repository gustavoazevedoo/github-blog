import styled from 'styled-components'

export const PostContainer = styled.div`
  max-width: 56rem;
  width: 100%;
  margin: 0 auto;
`

export const PostContent = styled.div`
  padding: 2.5rem 2rem;

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: ${({ theme }) => theme['base-text']};

    & + p {
      margin-top: 1.25rem;
    }
  }

  h2 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme['base-subtitle']};
    margin: 1.75rem 0 0.5rem;
  }

  a {
    color: ${({ theme }) => theme['brand-blue']};
  }

  img {
    max-width: 100%;
  }
`
