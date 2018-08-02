import {Component, Fragment} from 'react'
import Container from './styles'
import GreatMoments from '../GreatMoments'

export default class AthleteMain extends Component {
  render() {
    const {fullName, sport, jobTitle, birthDate, birthPlace,
           hometown, photo} = this.props
    return (
      <Container>
        <h1>{fullName}</h1>
        <h2>{sport} · {jobTitle}</h2>
        <h3>Born in {birthDate} in {birthPlace}</h3>
        <h3>Lives in {hometown}</h3>

        <GreatMoments photo={photo} />
      </Container>
    )
  }
}

