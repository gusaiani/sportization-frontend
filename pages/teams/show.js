import {Component} from 'react'
import Page from 'components/shared/Page'
import Header from 'components/shared/Header'
import LeftColumn from 'components/shared/LeftColumn'
import RightColumn from 'components/shared/RightColumn'
import Card from 'components/shared/Card'
import Contact from 'components/athlete/Contact'
import Related from 'components/athlete/Related'
import Main from 'components/team/Main'
import teams from 'lib/data/teams'

export default class Sportization extends Component {
  static async getInitialProps(context) {
    const slug = context.query.slug || 'adriana-shelda'
    const team = teams[slug]
    return {team}
  }

  render() {
    const {team} = this.props
    return (
      <Page>
        <Header />
        <LeftColumn>
          <Card {...team} />
          <Contact />
        </LeftColumn>
        <Main {...team} />
        <RightColumn>
          <Related />
        </RightColumn>
      </Page>
    )
  }
}
