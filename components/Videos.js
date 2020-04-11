import React from 'react'
import Link from 'next/link'

import fetch from 'isomorphic-unfetch'

const VideoLink = (props) => (
  <li>
    <Link href="/hls_stream/[name]" as={`/hls_stream/${props.name}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default class Videos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  async updateData() {
    const res = await fetch(`${window.location.origin}/streams/get_video_list`)
    const apiData = await res.json()
    this.setState({data: apiData})
  }

  componentDidMount() {
    this.updateData()
  }

  render() {
    return (
      <ul>
        {this.state.data.map((video) => (
          <VideoLink key={video.name} title={video.title} name={video.name} />
        ))}
      </ul>
    )
  }
}
