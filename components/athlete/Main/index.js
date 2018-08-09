import Link from 'next/link'
import {Component, Fragment} from 'react'
import Container, {
  TeamThumbnail, Header
} from 'components/shared/Main/styles'
import GreatMoments from '../GreatMoments'
import Achievements from '../Achievements'
import teams from 'lib/data/teams'
import {imageUrl} from 'utils/image'

export default class AthleteMain extends Component {
  render() {
    const {
      fullName, sport, jobTitle,
      birthDate, birthPlace, hometown,
      photo, achievements, team
    } = this.props

    const teamFilename = teams[team].photo
    const teamPhotoUrl = imageUrl(teamFilename)

    return (
      <Container>
        <Header>
          <h1>{fullName}</h1>
          <h2>{sport} · {jobTitle}</h2>
          <h3>Born in {birthDate} in {birthPlace}</h3>
          <h3>Lives in {hometown}</h3>
        </Header>

        <Link href={`/teams?slug=${team}`} as={`/teams/${team}`}>
          <TeamThumbnail style={{backgroundImage: `url(${teamPhotoUrl})`}}/>
        </Link>

        <Achievements achievements={achievements} />
        <GreatMoments photo={photo} />
      </Container>
    )
  }
}

