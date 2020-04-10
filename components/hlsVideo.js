import React from 'react'
import Hls from 'hls.js'

function init_video(video, videoUrl) {
  if (Hls.isSupported()) {
    let hls = new Hls()
    hls.attachMedia(video)
    hls.loadSource(videoUrl)
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.addEventListener('canplay', function () {
      video.play()
    })
    video.src = videoUrl
  }
}

export default class HLSVideo extends React.Component {
  constructor(props) {
    super(props)
    this.videoUrl = 'streams/stream.m3u8'
    this.videoRef = React.createRef()
  }

  componentDidMount() {
    init_video(this.videoRef.current, this.videoUrl)
  }

  render() {
    return <video controls ref={this.videoRef}></video>
  }
}
