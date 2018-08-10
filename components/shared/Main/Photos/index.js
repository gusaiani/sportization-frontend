import {Component} from 'react'
import Container from './styles'
import {imageUrl} from 'utils/image'

export default class AthleteCard extends Component {
  render() {
    const {label, photo} = this.props
    const photoUrl = imageUrl(photo)
    return (
      <Container>
        <h5>{label}</h5>

        <div style={{backgroundImage: `url(${photoUrl})`}}/>
      </Container>
    )
  }
}
