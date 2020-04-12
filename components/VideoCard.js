import React from 'react'
import Link from 'next/link'

import styles from '../assets/components/VideoCard.module.css'

export default class VideoCard extends React.Component {
  constructor(props) {
    super(props)
    this.videoCardRef = React.createRef()
  }

  componentDidMount() {
    const coverFileUrl = `${window.location.origin}/streams/${this.props.name}/${this.props.coverFile}`
    this.videoCardRef.current.style.backgroundImage = `url(${coverFileUrl})`
  }

  render() {
    return (
      <div className={styles.card}>
        <div className={styles.cardImg} ref={this.videoCardRef}></div>
        <div className={styles.cardText}>
          <span>{this.props.title}</span>
          <p>{this.props.description}</p>
        </div>
        <div className={styles.cardFooter}>
          <Link href="/hls_stream/[name]" as={`/hls_stream/${this.props.name}`}>
            <span>Watch</span>
          </Link>
        </div>
      </div>
    )
  }
}
