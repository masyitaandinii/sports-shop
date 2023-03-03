import Head from 'next/head'
import About from '../components/About'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sports Online Shop</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
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
