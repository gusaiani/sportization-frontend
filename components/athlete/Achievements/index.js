import {Component} from 'react'
import Container from './styles'
import {imageUrl} from 'utils/image'
import {ordinal} from 'utils/ordinal'

export default class AthleteAchievements extends Component {
  render() {
    const {achievements} = this.props
    return (
      <Container>
        <h5>Top Achievements</h5>

        {achievements.map(({event, times, rank}) => {
          return (
            <div>
              <p>{event}</p>
              <p>{ordinal(rank)}</p>
              <p>{times}×</p>
            </div>
          )
        })}
      </Container>
    )
  }
}

