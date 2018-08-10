import {Component, Fragment} from 'react'
import Container, {Header} from 'components/shared/Main/styles'
import Photos from 'components/shared/Main/Photos'
import PhotosWithLinks from 'components/shared/Main/PhotosWithLinks'
import Achievements from 'components/athlete/Achievements'
import athletesData from 'lib/data/athletes'

export default class AthleteMain extends Component {
  render() {
    const {
      fullName, sport, jobTitle,
      activeDateFrom, activeDateTo,
      hometown, photo, achievements,
      athletes
    } = this.props

    const athleteImgsAndLinks = athletes.map(athlete => {
      return {
        slug: athlete,
        photo: athletesData[athlete].photo
      }
    })

    return (
      <Container>
        <Header>
          <h4>Team</h4>
          <h1>{fullName}</h1>
          <h2>{sport}</h2>
          <h3>From {activeDateFrom} in {activeDateTo}</h3>
        </Header>

        <Achievements achievements={achievements} />
        <PhotosWithLinks label="Members" items={athleteImgsAndLinks} />
        <Photos label="Great Moments" photo={photo} />
      </Container>
    )
  }
}

