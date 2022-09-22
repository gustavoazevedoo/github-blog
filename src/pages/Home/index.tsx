import { useEffect, useState } from 'react'
import axios from 'axios'
import { ProfileCard } from '../../components/ProfileCard'
import { Container, PostCard, PostList, SearchForm } from './styles'
import { formatDistanceToNowPtBR } from '../../utils/formatter'

// https://api.github.com/search/issues?q=repo:gustavoazevedoo/github-blog LISTA TODAS AS ISSUES (POSTS)
// https://api.github.com/search/issues?q=Boas práticas repo:gustavoazevedoo/github-blog BUSCA POR ISSUE ESPECÍFICA (Contém a palavra Boas práticas)

// total_count: number
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

  async function loadPosts() {
    const { data } = await axios.get(
      'https://api.github.com/search/issues?q=repo:gustavoazevedoo/github-blog',
    )

    setPosts(data)
  }

  useEffect(() => {
    loadPosts()
  }, [])

  return (
    <Container>
      <ProfileCard />

      <SearchForm action="">
        <header>
          <h3>Publicações</h3>
          <span>{posts?.total_count} publicações</span>
        </header>

        <input type="text" placeholder="Buscar conteúdo" />
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
