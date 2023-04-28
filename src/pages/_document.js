import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      className="object-cover bg-[url(https://source.unsplash.com/1L71sPT5XKc)]"
    >
      <Head>
        <link rel="icon" href="/man.ico" />
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>
      <body className="object-cover bg-[url(https://source.unsplash.com/1L71sPT5XKc)]">
        <Main/>
        <NextScript />
      </body>
    </Html>
  );
}
