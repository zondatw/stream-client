import React from 'react'

import styles from '../assets/components/VideoCard.module.css'

export default class VideoCard extends React.Component {
  constructor(props) {
    super(props)
    this.videoCardRef = React.createRef()
  }

  componentDidMount() {
    this.videoCardRef.current.style.backgroundImage = 'url("test.png")'
  }

  render() {
    return (
      <div className={styles.card}>
        <div className={styles.cardImg} ref={this.videoCardRef}></div>
        <div className={styles.cardText}>
          <span>Test Title</span>
          <p>
            this is test video.this is test video.this is test video.this is
            test video.this is test video. this is test video.this is test
            video.this is test video.this is test video.this is test video.
          </p>
        </div>
        <div className={styles.cardFooter}>
          <span>Watch</span>
        </div>
      </div>
    )
  }
}