import {Component, Fragment} from 'react'
import Container from './styles'

export default class Page extends Component {
  render() {
    return (
      <Container>
        {this.props.children}
      </Container>
    )
  }
}

