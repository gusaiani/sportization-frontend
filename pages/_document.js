import Document, {Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

export default class AppDocument extends Document {
  static getInitialProps({renderPage}) {
    const sheet = new ServerStyleSheet()
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = [sheet.getStyleElement()]
    return {...page, styleTags, prod: process.env.NODE_ENV === 'production'}
  }

  render() {
    const {styleTags, prod} = this.props

    return (
      <html>
        <Head>
          {styleTags}

          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />

          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-126452166-1"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-126452166-1');
              `
            }}
          />

        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
