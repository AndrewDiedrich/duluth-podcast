import '../styles/globals.css'
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import Header from '../src/components/shared/navBar'
// import Footer from '../src/components/shared/'
function MyApp({ Component, pageProps }) {
  return <div>
<Header />
<Component {...pageProps} />
  </div>
 
}

export default MyApp
