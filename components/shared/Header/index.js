import {Component} from 'react'
import Container, {Img} from './styles'

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Img src="/static/images/sportization-logo.png"/>
      </Container>
    )
  }
}
