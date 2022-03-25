import PageLayout from "../components/common/PageLayout";
import "../style/index.scss";
import Head from 'next/head'
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>blinklink</title>
        <meta name="description" content="Blinklink" />
      </Head>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  );
}
