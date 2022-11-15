import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='pt-BR'>
        <Head>
          <meta name="description" content="Os melhores lanches da região estão aqui! Confira nossas opções." />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
          <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cabin+Sketch:wght@400;700&family=Fredoka+One&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}