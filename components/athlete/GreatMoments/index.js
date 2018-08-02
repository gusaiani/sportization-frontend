import {Component} from 'react'
import Container from './styles'
import {imageUrl} from 'utils/image'

export default class AthleteCard extends Component {
  render() {
    const {photo} = this.props
    const photoUrl = imageUrl(photo)
    return (
      <Container>
        <h5>Great Moments</h5>

        <div style={{backgroundImage: `url(${photoUrl})`}}/>
        <div style={{backgroundImage: `url(${photoUrl})`}}/>
        <div style={{backgroundImage: `url(${photoUrl})`}}/>
        <div style={{backgroundImage: `url(${photoUrl})`}}/>
      </Container>
    )
  }
}

