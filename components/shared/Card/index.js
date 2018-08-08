import {Component, Fragment} from 'react'
import Container from './styles'
import {imageUrl} from 'utils/image'

export default class AthleteCard extends Component {
  render() {
    const {name, country, photo} = this.props
    return (
      <Container>
        <img src={imageUrl(photo)}/>
        <div className="name">{name}</div>
        <div className="flag">
          <span>{country}</span>
          <img src={imageUrl('Flag_of_Brazil.svg')}/>
        </div>
      </Container>
    )
  }
}

