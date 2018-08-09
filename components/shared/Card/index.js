import {Component, Fragment} from 'react'
import Container, {Name, Flag} from './styles'
import {imageUrl} from 'utils/image'

export default class AthleteCard extends Component {
  render() {
    const {name, country, photo} = this.props
    const photoUrl = imageUrl(photo)

    return (
      <Container style={{backgroundImage: `url(${photoUrl})`}}>
        <Name>{name}</Name>
        <Flag>
          <span>{country}</span>
          <img src={imageUrl('Flag_of_Brazil.svg')}/>
        </Flag>
      </Container>
    )
  }
}

