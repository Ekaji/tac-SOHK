/* eslint-disable react/jsx-key */
import Head from 'next/head'
import LandingPage from '../components/landingPage.jsx'
import Volunteer from '../components/volunteer.jsx'
import OngoingProjects from '../components/ongoing_projects.jsx'
import CardSlider from '../components/cardSlider.jsx'
import VideoIntro from '../components/videoIntro.jsx'
import LatestNews from '../components/latestNews'


export default function Home() {
  return (
    <div >
      <Head>
        <title>TAC Africa</title>
        <meta name="description" content="TAC Africa Website" />
        <link rel="icon" href="/TAC_LOGO.png" />
      </Head>
      <LandingPage />
      {/* <VideoIntro /> */}
      <LatestNews text2={'News'} />
      {/* <CardSlider  text2='Labs' text3={""} />
      <OngoingProjects />
      <Volunteer /> */}
    </div>
  )
}
