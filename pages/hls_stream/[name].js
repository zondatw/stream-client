import { useRouter } from 'next/router'

import Layout from '../../components/Layout'
import HLSVideo from "../../components/HLSVideo"

export default function HLSStream() {
  const router = useRouter()
  const { name } = router.query

  return (
    <Layout title="HLS Stream">
      <HLSVideo name={name} />
    </Layout>
  )
}
