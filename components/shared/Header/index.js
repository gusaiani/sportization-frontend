import Link from 'next/link'
import {Component} from 'react'
import Container, {Img} from './styles'

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Link href="/">
          <Img src="/static/images/sportization-logo.png"/>
        </Link>
      </Container>
    )
  }
}
