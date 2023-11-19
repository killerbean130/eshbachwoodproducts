import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Eshach Wood Products</title>
        <meta
          name="description"
          content="Discover Eshbach Wood Products for premium end grain flooring and
          table tops, expertly crafted in Lancaster, PA from sustainably
          harvested lumber. Embrace our commitment to quality and environmental
          stewardship in every product."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
