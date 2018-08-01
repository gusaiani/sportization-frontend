import {Component, Fragment} from 'react'
import Header from '../components/shared/Header'
import Card from '../components/athlete/Card'
import Main from '../components/athlete/Main'

export default class Liqid extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Card />
        <Main />
      </Fragment>
    )
  }
}
