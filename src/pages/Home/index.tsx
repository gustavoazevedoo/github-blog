import { Profile } from '../../components/Profile'
import { PostCard, PostList, SearchForm } from './styles'

export function Home() {
  return (
    <>
      <Profile />

      <SearchForm action="">
        <header>
          <h3>Publicações</h3>
          <span>6 publicações</span>
        </header>

        <input type="text" placeholder="Buscar conteúdo" />
      </SearchForm>

      <PostList>
        <PostCard href="/">
          <header>
            <h2>JavaScript data types and data structures</h2>
            <span>Há 1 dia</span>
          </header>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn.
          </p>
        </PostCard>

        <PostCard href="/">
          <header>
            <h2>JavaScript data types and data structures</h2>
            <span>Há 1 dia</span>
          </header>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn.
          </p>
        </PostCard>

        <PostCard href="/">
          <header>
            <h2>JavaScript data types and data structures</h2>
            <span>Há 1 dia</span>
          </header>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn.
          </p>
        </PostCard>

        <PostCard href="/">
          <header>
            <h2>JavaScript data types and data structures</h2>
            <span>Há 1 dia</span>
          </header>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn.
          </p>
        </PostCard>

        <PostCard href="/">
          <header>
            <h2>JavaScript data types and data structures</h2>
            <span>Há 1 dia</span>
          </header>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn.
          </p>
        </PostCard>

        <PostCard href="/">
          <header>
            <h2>JavaScript data types and data structures</h2>
            <span>Há 1 dia</span>
          </header>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            drawn.
          </p>
        </PostCard>
      </PostList>
    </>
  )
}
