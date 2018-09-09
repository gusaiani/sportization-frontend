import {Component} from 'react'
import Container from './styles'
import {ordinal} from 'utils/ordinal'
import Achievement from 'components/athlete/Achievement'

export default class AthleteAchievements extends Component {
  render() {
    const {achievements} = this.props
    return (
      <Container>
        <h5>Top Achievements</h5>

        {achievements.map(({event, times, rank}, i) => {
          return (
            <Achievement
              key={i}
              event={event}
              rank={rank}
              times={times}
            />
          )
        })}
      </Container>
    )
  }
}

