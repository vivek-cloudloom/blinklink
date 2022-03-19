import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <link
          href="https://db.onlinewebfonts.com/c/6aa06a9a432b8417171f60d8351aa310?family=Torus+Notched+SemiBold"
          rel="stylesheet"
          type="text/css"
        /> */}
        {/* <link
          href="https://fonts.cdnfonts.com/css/avenir-next-lt-pro"
          rel="stylesheet"
        /> */}
        {/* <link
          href="//db.onlinewebfonts.com/c/23a52005216dca8d403521d06834f924?family=AvenirNextW10-Medium"
          rel="stylesheet"
          type="text/css"
        /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
