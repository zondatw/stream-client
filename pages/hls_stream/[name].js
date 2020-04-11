import { useRouter } from 'next/router'

import HLSVideo from "../../components/HLSVideo"

export default function HLSStream() {
  const router = useRouter()
  const { name } = router.query

  return (
    <div>
      <h1>HLS Stream</h1>
      <HLSVideo name={name} />
    </div>
  )
}
