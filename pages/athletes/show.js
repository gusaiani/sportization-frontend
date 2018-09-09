import {Component} from 'react'
import Page from 'components/shared/Page'
import Header from 'components/shared/Header'
import LeftColumn from 'components/shared/LeftColumn'
import RightColumn from 'components/shared/RightColumn'
import Card from 'components/shared/Card'
import Contact from 'components/athlete/Contact'
import Related from 'components/athlete/Related'
import Main from 'components/athlete/Main'
import athletes from 'lib/data/athletes'

export default class Athletes extends Component {
  static async getInitialProps(context) {
    const slug = context.query.slug || 'adriana-behar'
    const athlete = athletes[slug]
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
