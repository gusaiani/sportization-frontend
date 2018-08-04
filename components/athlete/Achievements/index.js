import {Component} from 'react'
import Container from './styles'
import {imageUrl} from 'utils/image'

export default class AthleteAchievements extends Component {
  render() {
    const {achievements} = this.props
    return (
      <Container>
        <h5>Top Achievements</h5>

        {achievements.map(({times, achievement}) => {
          return (
            <p>{times}× {achievement}</p>
          )
        })}
      </Container>
    )
  }
}

