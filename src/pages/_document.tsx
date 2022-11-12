import { Head, Html, Main, NextScript } from "next/document";

const Document = () => (
  <Html
    className={"flex min-h-screen flex-col scroll-smooth [color-scheme:dark]"}
  >
    <Head>
      <link
        href="/assets/images/favicons/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/assets/images/favicons/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/assets/images/favicons/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link href="/assets/images/favicons/site.webmanifest" rel="manifest" />
      <link
        color="#000000"
        href="/assets/images/favicons/safari-pinned-tab.svg"
        rel="mask-icon"
      />
      <link href="/assets/images/favicons/favicon.ico" rel="shortcut icon" />
      <meta content="#2b5797" name="msapplication-TileColor" />
      <meta
        content="/assets/images/favicons/browserconfig.xml"
        name="msapplication-config"
      />
      <meta content="#000000" name="theme-color" />
    </Head>
    <body className="flex flex-1 flex-col bg-black font-sans text-white">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
