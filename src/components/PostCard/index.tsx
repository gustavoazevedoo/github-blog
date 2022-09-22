import { Link } from 'react-router-dom'

import {
  FaAngleLeft,
  FaCalendar,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'

import {
  PostCardContainer,
  PostCardFooter,
  PostCardHeader,
  PostTitle,
} from './styles'

interface PostCardProps {
  postUrl: string
  title: string
  commentsAmount: number
  user: string
  createdAt: Date
}

export function PostCard({
  postUrl,
  title,
  user,
  createdAt,
  commentsAmount,
}: PostCardProps) {
  return (
    <PostCardContainer>
      <PostCardHeader>
        <Link to="/">
          <FaAngleLeft size={12} />
          Voltar
        </Link>

        <a href={postUrl} target="_blank" rel="noreferrer">
          Ver no github
          <FaExternalLinkAlt size={12} />
        </a>
      </PostCardHeader>

      <PostTitle>{title}</PostTitle>

      <PostCardFooter>
        <span>
          <FaGithub />
          {user}
        </span>

        <span>
          <FaCalendar />
          {String(createdAt)}
        </span>

        <span>
          <FaComment />
          {commentsAmount} comentários
        </span>
      </PostCardFooter>
    </PostCardContainer>
  )
}
