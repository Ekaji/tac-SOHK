/* eslint-disable react/jsx-key */
import Layout from '../components/layout/Layout'
import dynamic from 'next/dynamic'
import NextNProgress from "nextjs-progressbar";
import '../styles/layout/hamburger.css'
import '../styles/globals.scss'
import '../styles/component.styles/contact.scss' //! do not remove
import 'font-awesome/css/font-awesome.min.css'
import 'react-multi-carousel/lib/styles.css';
import 'react-loading-skeleton/dist/skeleton.css'


const flowbite = dynamic(() => import('flowbite'), { ssr: false })
dynamic(() => import('tw-elements'), { ssr: false })


function MyApp({ Component, pageProps }) {

  return (
      <Layout>
        <NextNProgress />
        <Component {...pageProps} />
      </Layout>
    )
  }
export default MyApp
