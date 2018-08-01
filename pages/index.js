import {Component} from 'react'
import Page from '../components/shared/Page'
import Header from '../components/shared/Header'
import LeftColumn from '../components/shared/LeftColumn'
import Card from '../components/athlete/Card'
import Contact from '../components/athlete/Contact'
import Main from '../components/athlete/Main'

export default class Liqid extends Component {
  render() {
    return (
      <Page>
        <Header />
        <LeftColumn>
          <Card />
          <Contact />
        </LeftColumn>
        <Main />
      </Page>
    )
  }
}
