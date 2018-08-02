import {Component} from 'react'
import Page from '../components/shared/Page'
import Header from '../components/shared/Header'
import LeftColumn from '../components/shared/LeftColumn'
import RightColumn from '../components/shared/RightColumn'
import Card from '../components/athlete/Card'
import Contact from '../components/athlete/Contact'
import Related from '../components/athlete/Related'
import Main from '../components/athlete/Main'
import data from '../lib/data'

export default class Sportization extends Component {
  static async getInitialProps(context) {
    const slug = context.query.slug || 'adriana-behar'
    const athlete = data[slug]
    return {athlete}
  }

  render() {
    const {athlete} = this.props
    return (
      <Page>
        <Header />
        <LeftColumn>
          <Card {...athlete} />
          <Contact />
        </LeftColumn>
        <Main {...athlete} />
        <RightColumn>
          <Related />
        </RightColumn>
      </Page>
    )
  }
}
