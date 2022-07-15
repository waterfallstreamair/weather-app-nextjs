import { Provider } from 'react-redux'

import { useStore } from '../store'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import '../styles/index.css'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
      <Provider store={store}>
        <Layout>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Layout>
      </Provider>
  )
}
