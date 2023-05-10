import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="author" content="Akshat Gadodia" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="favicon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="favicon-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="favicon-64x64.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href="favicon-128x128.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"></link>
        <meta property="og:locale" content="en_GB" />
        <meta name="language" content="en" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="google-site-verification"
          content="PoMi28FhjxO_aIrwLNHaZNakmU1vRPrrDzP9GE_OB14"
        />
        <meta name="robots" content="index,follow" />
        {/* <meta name="referrer" content="strict-origin-when-cross-origin"/> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
