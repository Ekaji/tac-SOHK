/* eslint-disable react/jsx-key */
import Head from 'next/head'
import Landing from './test/landing.jsx'
import Volunteer from '../components/volunteer.jsx'
import OngoingProjects from '../components/ongoing_projects.jsx'
import CardSlider from '../components/cardSlider.jsx'
import VideoIntro from '../components/videoIntro.jsx'
import LatestNews from '../components/latestNews'


export default function Home() {
  const deviceType = 'mobile'
  return (
    <div >
      <Head>
        <title>TAC Africa</title>
        <meta name="description" content="TAC Africa Website" />
        <link rel="icon" href="/TAC_LOGO.png" />
      </Head>
      <Landing deviceType={deviceType} />
      {/* <VideoIntro /> */}
      <LatestNews text2={'News'} />
      <CardSlider text3={'Training'} text2={' Specialized skills'} text1={'Digital'} />
      <OngoingProjects />
      <Volunteer />
    </div>
  )
}
