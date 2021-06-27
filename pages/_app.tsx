import 'tailwindcss/tailwind.css'
import '../styles/fonts.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout className="font-poppins">
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
