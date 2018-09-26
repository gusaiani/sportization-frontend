import {Component} from 'react'
import Link from 'next/link'
import Page from 'components/shared/Page'
import {Logo, Tagline, Links} from './index_styles'
import {imageUrl} from 'utils/image'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter
} from '@fortawesome/fontawesome-free-brands'

export default class Sportization extends Component {
  render() {
    return (
      <Page>
        <Logo src={imageUrl('sportization-logo-large.png')}/>

        <Tagline src={imageUrl('sportization-tagline-large.png')}/>

        <Links>
          <Link href="https://www.facebook.com/Sportization/">
            <a className="facebook" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </Link>
          <Link href="https://www.twitter.com/sportization">
            <a className="twitter" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </Link>
          <Link href="https://www.instagram.com/sportization">
            <a className="instagram" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </Link>
          <Link href="https://www.youtube.com/channel/UCOKGLFLC7KXcuvAA6a6ASSQ">
            <a className="youtube" target="_blank">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </Link>
        </Links>
      </Page>
    )
  }
}
