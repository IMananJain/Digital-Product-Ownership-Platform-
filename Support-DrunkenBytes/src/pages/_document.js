import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="author" content="Akshat Gadodia" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" sizes="192x192" href="favicon-192x192.png" />
                <link rel="icon" type="image/png" sizes="512x512" href="favicon-512x512.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="64x64" href="favicon-64x64.png" />
                <link rel="icon" type="image/png" sizes="128x128" href="favicon-128x128.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
                <link rel="icon" type="image/x-icon" href="favicon.ico" />
                <meta name="robots" content="noindex"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}