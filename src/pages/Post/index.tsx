import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { PostCard } from '../../components/PostCard'
import { formatDistanceToNowPtBR } from '../../utils/formatter'
import { PostContainer, PostContent } from './styles'

interface PostProps {
  html_url: string
  title: string
  created_at: Date
  comments: number
  body: string
  user: {
    login: string
  }
}

export function Post() {
  const [post, setPost] = useState<PostProps>({} as PostProps)
  const { postNumber } = useParams()

  const loadPost = useCallback(async () => {
    const { data } = await axios.get(
      `https://api.github.com/repos/gustavoazevedoo/github-blog/issues/${postNumber}`,
    )

    const formattedPost = {
      ...data,
      created_at: formatDistanceToNowPtBR(new Date(data.created_at)),
    }

    setPost(formattedPost)
  }, [postNumber])

  useEffect(() => {
    loadPost()
  }, [loadPost])

  return (
    <PostContainer>
      <PostCard
        postUrl={post.html_url}
        title={post.title}
        commentsAmount={post.comments}
        user={post.user?.login}
        createdAt={post.created_at}
      />

      <PostContent>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
