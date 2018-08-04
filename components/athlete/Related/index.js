import Link from 'next/link'
import {Component} from 'react'
import Container from './styles'
import data from 'lib/data'
import {imageUrl} from 'utils/image'

export default class Related extends Component {
  render() {
    const athletes = Object.keys(data).map((key) => {
      return {
        slug: key,
        photo: data[key].photo
      }
    })

    return (
      <Container>
        <h5>Related People</h5>

        {athletes.map(({slug, photo}) => {
          const photoUrl = imageUrl(photo)
          return (
            <Link
              key={slug}
              href={`/athletes?slug=${slug}`}
              as={`/athletes/${slug}`}
            >
              <a style={{backgroundImage: `url(${photoUrl})`}}/>
            </Link>
          )
        })}
      </Container>
    )
  }
}

