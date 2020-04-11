import Link from 'next/link'

const VideoLink = props => (
  <li>
    <Link href="/hls_stream/[name]" as={`/hls_stream/${props.name}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default function Index() {
  return (
    <div>
      <h1>Play List</h1>
      <ul>
        <VideoLink title="Test Title" name="test_stream" />
      </ul>
    </div>
  )
}
