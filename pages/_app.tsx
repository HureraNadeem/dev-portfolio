import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '@/components/layout/layout'

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import ScrollToTopButton from '@/components/scroll-to-tp-button/scroll-to-top-button'
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
        <ScrollToTopButton />
      </Layout>
    </>
  )
}
