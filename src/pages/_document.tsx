import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document { 
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }
  render() {
    return (
      <Html lang="fa" dir='rtl'> 
        <Head>
        <link rel="shortcut icon" href="/favicon.png" />     
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

}

export default MyDocument