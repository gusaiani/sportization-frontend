import {Component} from 'react'
import Container from './styles'
import {ordinal} from 'utils/ordinal'

export default class AthleteAchievement extends Component {
  render() {
    const {event, rank, times} = this.props
    return (
      <Container className={ordinal(rank)}>
        <p className="event">{event}</p>
        <p className="rank">{ordinal(rank)}</p>
        <p>{times}×</p>
      </Container>
    )
  }
}

