import React from 'react'

import styles from '../assets/components/VideoCards.module.css'
import VideoCard from './VideoCard'

export default class Videos extends React.Component {
  render() {
    return (
      <div className={styles.cardContainer}>
        <VideoCard />
      </div>
    )
  }
}
