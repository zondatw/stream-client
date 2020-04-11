import React from 'react'
import Hls from 'hls.js'

export default class HLSVideo extends React.Component {
  constructor(props) {
    super(props)
    this.videoRef = React.createRef()
  }

  init_video(video, videoUrl) {
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

  componentDidMount() {
    this.videoUrl = `${window.location.origin}/streams/${this.props.name}/stream.m3u8`
    this.init_video(this.videoRef.current, this.videoUrl)
  }

  render() {
    return <video controls ref={this.videoRef}></video>
  }
}
