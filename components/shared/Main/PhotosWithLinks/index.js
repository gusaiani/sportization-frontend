import {Component} from 'react'
import Link from 'next/link'
import Container from './styles'
import {imageUrl} from 'utils/image'

export default class AthleteCard extends Component {
  render() {
    const {label, items} = this.props
    return (
      <Container>
        <h5>{label}</h5>

        {items.map(item => {
          const {photo, slug} = item
          const photoUrl = imageUrl(photo)

          return <Link href={`/athletes?slug=${slug}`} as={`/athletes/${slug}`}>
            <div style={{backgroundImage: `url(${photoUrl})`}}/>
          </Link>
        })}
      </Container>
    )
  }
}
