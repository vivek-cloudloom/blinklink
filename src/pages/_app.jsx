import PageLayout from '../components/common/PageLayout'
import '../style/index.scss'

export default function MyApp({ Component, pageProps }) {
  return <PageLayout><Component {...pageProps} /></PageLayout>
}
