import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 1.25rem;
`

export const SearchForm = styled.form`
  max-width: 56rem;
  width: 100%;
  margin: 4.5rem auto 0;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    h3 {
      font-size: 1.125rem;
      color: ${({ theme }) => theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme['base-span']};
    }
  }

  input {
    width: 100%;
    background-color: ${({ theme }) => theme['base-input']};
    border: 1px solid ${({ theme }) => theme['base-border']};
    padding: 0.75rem 1rem;
    border-radius: 6px;
    color: ${({ theme }) => theme['base-text']};

    ::placeholder {
      font-size: 1rem;
      color: ${({ theme }) => theme['base-label']};
    }
  }
`

export const PostList = styled.section`
  max-width: 56rem;
  width: 100%;
  margin: 3rem auto 2rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`

export const PostCard = styled.a`
  display: block;

  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme['base-text']};
  text-decoration: none;

  background-color: ${({ theme }) => theme['base-post']};
  padding: 2rem;
  border-radius: 10px;
  border: 2px solid transparent;
  transition: border 200ms;

  &:hover {
    border: 2px solid ${({ theme }) => theme['base-border']};
  }

  header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    margin-bottom: 1.25rem;

    h2 {
      font-size: 1.25rem;
      color: ${({ theme }) => theme['base-title']};

      max-width: 17.5rem;
    }

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme['base-span']};
    }
  }

  p {
    overflow: hidden;
    -webkit-line-clamp: 4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
`
