import {Component, Fragment} from 'react'
import Container, {Header} from 'components/shared/Main/styles'
import GreatMoments from 'components/athlete/GreatMoments'
import Achievements from 'components/athlete/Achievements'

export default class AthleteMain extends Component {
  render() {
    const {
      fullName, sport, jobTitle,
      activeDateFrom, activeDateTo,
      hometown, photo, achievements,
    } = this.props

    return (
      <Container>
        <Header>
          <h4>Team</h4>
          <h1>{fullName}</h1>
          <h2>{sport}</h2>
          <h3>From {activeDateFrom} in {activeDateTo}</h3>
        </Header>

        <Achievements achievements={achievements} />
        <GreatMoments photo={photo} />
      </Container>
    )
  }
}

