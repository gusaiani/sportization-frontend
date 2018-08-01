import {Component} from 'react'
import Container from './styles'

export default class Liqid extends Component {
  render() {
    return (
      <Container>
        {this.props.children}
      </Container>
    )
  }
}
