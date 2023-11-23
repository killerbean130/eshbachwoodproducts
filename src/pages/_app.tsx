import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Eshach Wood Products</title>
        <meta
          name="keywords"
          content="Eshbach Wood Products,
                  End Grain Flooring,
                  End Grain Table Tops,
                  Sustainable Woodworking,
                  Lancaster Wood Products,
                  Craftsmanship in Wood,
                  Eco-Friendly Wood Products,
                  Pennsylvania Lumber,
                  Artisanal Wood Design,
                  Quality Wood Furnishings,
                  Woodworker,
                  Sawmill"
        />
        <meta property="og:title" content="Eshach Wood Products" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eshbachwoodproducts.com/" />
        <meta property="og:site_name" content="Eshach Wood Products" />
        <meta
          property="og:image"
          content="https://eshbachwoodproducts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fewpl.cb515d9a.png&w=640&q=75"
        />
        <meta
          property="og:image:secure_url"
          content="https://eshbachwoodproducts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fewpl.cb515d9a.png&w=640&q=75"
        />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height" content="519" />
        <meta property="og:image:alt" content="Eshbach wood products logo" />
        <meta
          name="description"
          property="og:description"
          content="Discover Eshbach Wood Products for premium end grain flooring and
          table tops, expertly crafted in Lancaster, PA from sustainably
          harvested lumber. Embrace our commitment to quality and environmental
          stewardship in every product."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-PH94PQX5DQ"
      ></Script>
      <Script id="google-analytics">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PH94PQX5DQ');`}
      </Script>

      <Component {...pageProps} />
    </>
  );
}
