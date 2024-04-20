import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com'/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@100..700&family=Rubik:wght@700&display=swap"
          rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@1,600&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}