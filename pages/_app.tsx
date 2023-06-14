import { AppProps } from 'next/app'
import { Layout } from '../components/Layout/Layout'
import 'semantic-ui-css/semantic.min.css'
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
