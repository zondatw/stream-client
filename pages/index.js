import Layout from '../components/Layout'
import Videos from '../components/Videos'
import VideoCards from '../components/VideoCards'

export default function Index() {
  return (
    <Layout title="Play List">
      <Videos />
      <VideoCards />
    </Layout>
  )
}
