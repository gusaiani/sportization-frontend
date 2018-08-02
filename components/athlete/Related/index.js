import {Component} from 'react'
import Container from './styles'
import data from 'lib/data'
import {imageUrl} from 'utils/image'

export default class AthleteCard extends Component {
  render() {
    const athletes = Object.keys(data).map((key) => {
      return {
        slug: key,
        photo: data[key].photo
      }
    })

    return (
      <Container>
        <h5>Similar Athletes</h5>

        {athletes.map(({slug, photo}) => {
          const photoUrl = imageUrl(photo)
          return (
            <div style={{backgroundImage: `url(${photoUrl})`}}/>
          )
        })}
      </Container>
    )
  }
}

