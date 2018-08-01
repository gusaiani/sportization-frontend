import {Component, Fragment} from 'react'
import Container from './styles'

export default class AthleteCard extends Component {
  render() {
    return (
      <Container>
        <img src="https://res.cloudinary.com/du17bhl36/image/upload/v1533086881/Adriana_Behar.jpg"/>
        <div className="name">Adriana Behar</div>
        <div className="flag">
          <span>Bra</span>
          <img src="https://res.cloudinary.com/du17bhl36/image/upload/v1533091025/Flag_of_Brazil.svg"/>
        </div>
      </Container>
    )
  }
}

