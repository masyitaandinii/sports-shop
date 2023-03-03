import Head from 'next/head'
import About from '../components/About'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Projects from '../components/Product'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sports Online Shop</title>
        <link rel="icon" href="/fav.png" />
      </Head>
      <Navbar/>
    <Main />
    <Projects />
    <About />
    <Footer />
    </div>
  )
}
