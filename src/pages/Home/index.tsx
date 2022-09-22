import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import axios from 'axios'
import { ProfileCard } from '../../components/ProfileCard'
import { Container, PostCard, PostList, SearchForm } from './styles'
import { formatDistanceToNowPtBR } from '../../utils/formatter'
interface Post {
  title: string
  created_at: string
  body: string
  number: number
}
interface Posts {
  total_count: number
  items: Post[]
}

export function Home() {
  const [posts, setPosts] = useState<Posts>()
  const [searchTerm, setSearchTerm] = useState('')

  async function loadPosts() {
    const { data } = await axios.get(
      'https://api.github.com/search/issues?q=repo:gustavoazevedoo/github-blog',
    )

    setPosts(data)
  }

  useEffect(() => {
    loadPosts()
  }, [])

  function handleSearchTermChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value)
  }

  async function handleSearch(event: FormEvent) {
    event.preventDefault()

    const { data } = await axios.get(
      `https://api.github.com/search/issues?q=${searchTerm} repo:gustavoazevedoo/github-blog`,
    )

    setPosts(data)
  }

  return (
    <Container>
      <ProfileCard />

      <SearchForm onSubmit={handleSearch}>
        <header>
          <h3>Publicações</h3>
          <span>{posts?.total_count} publicações</span>
        </header>

        <input
          type="text"
          placeholder="Buscar conteúdo"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </SearchForm>

      <PostList>
        {posts?.items.map((post) => (
          <PostCard key={post.number} to={`/posts/${post.number}`}>
            <header>
              <h2>{post.title}</h2>
              <span>{formatDistanceToNowPtBR(new Date(post.created_at))}</span>
            </header>

            <p>{post.body}</p>
          </PostCard>
        ))}
      </PostList>
    </Container>
  )
}
