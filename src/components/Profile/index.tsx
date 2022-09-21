import { useEffect, useState } from 'react'
import axios from 'axios'

import {
  Avatar,
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  ProfileFooter,
} from './styles'

import {
  FaGithub,
  FaBuilding,
  FaExternalLinkAlt,
  FaUsers,
} from 'react-icons/fa'

interface User {
  avatar_url: string
  name: string
  html_url: string
  bio: string
  login: string
  company: string
  followers: number
}

export function Profile() {
  const [user, setUser] = useState({} as User)

  async function getGithubUser() {
    const { data } = await axios.get(
      'https://api.github.com/users/gustavoazevedoo',
    )

    setUser(data)
  }

  useEffect(() => {
    getGithubUser()
  }, [])

  return (
    <ProfileContainer>
      <Avatar src={user.avatar_url} alt="" />
      <ProfileContent>
        <ProfileHeader>
          <h1>{user.name}</h1>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            github
            <FaExternalLinkAlt />
          </a>
        </ProfileHeader>
        {user.bio ? <p>{user.bio}</p> : <p>Sem biografia</p>}

        <ProfileFooter>
          <span>
            <FaGithub />
            {user.login}
          </span>

          {user.company && (
            <span>
              <FaBuilding />
              {user.company}
            </span>
          )}

          <span>
            <FaUsers /> {user.followers}
            {user.followers === 1 ? ' seguidor' : ' seguidores'}
          </span>
        </ProfileFooter>
      </ProfileContent>
    </ProfileContainer>
  )
}
