import {Component, Fragment} from 'react'
import Container from './styles'
import GreatMoments from '../GreatMoments'
import Achievements from '../Achievements'

export default class AthleteMain extends Component {
  render() {
    const {fullName, sport, jobTitle, birthDate, birthPlace,
           hometown, photo, achievements} = this.props
    return (
      <Container>
        <h1>{fullName}</h1>
        <h2>{sport} · {jobTitle}</h2>
        <h3>Born in {birthDate} in {birthPlace}</h3>
        <h3>Lives in {hometown}</h3>

        <Achievements achievements={achievements} />
        <GreatMoments photo={photo} />
      </Container>
    )
  }
}

