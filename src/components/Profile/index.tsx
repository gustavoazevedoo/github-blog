import {
  Avatar,
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  ProfileFooter,
} from './styles'

import { FaGithub, FaBuilding, FaUser, FaExternalLinkAlt } from 'react-icons/fa'

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar src="https://github.com/gustavoazevedoo.png" alt="" />
      <ProfileContent>
        <ProfileHeader>
          <h1>Gustavo Azevedo</h1>
          <a
            href="https://github.com/gustavoazevedoo"
            target="_blank"
            rel="noreferrer"
          >
            github
            <FaExternalLinkAlt />
          </a>
        </ProfileHeader>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <ProfileFooter>
          <span>
            <FaGithub />
            gustavoazevedoo
          </span>

          <span>
            <FaBuilding />
            Rocketseat
          </span>

          <span>
            <FaUser /> 2 seguidores
          </span>
        </ProfileFooter>
      </ProfileContent>
    </ProfileContainer>
  )
}
