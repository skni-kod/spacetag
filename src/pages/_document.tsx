import { Head, Html, Main, NextScript } from "next/document";

const Document = () => (
  <Html
    className="flex min-h-screen scroll-p-4 flex-col scroll-smooth [color-scheme:dark]"
    lang="en"
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
      <meta content="Track satellites in 3D." name="description" />
      <meta
        content="max-image-preview:none,noarchive,none,noimageindex,nositelinkssearchboxx,nosnippet,notranslate"
        name="robots"
      />
    </Head>
    <body className="flex flex-grow flex-col bg-black font-sans text-white">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
