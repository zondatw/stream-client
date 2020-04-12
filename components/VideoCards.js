import React from 'react'

import fetch from 'isomorphic-unfetch'

import styles from '../assets/components/VideoCards.module.css'
import VideoCard from './VideoCard'

export default class Videos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  async updateData() {
    const res = await fetch(`${window.location.origin}/streams/get_video_list`)
    const apiData = await res.json()
    this.setState({ data: apiData })
  }

  componentDidMount() {
    this.updateData()
  }

  render() {
    return (
      <div className={styles.cardContainer}>
        {this.state.data.map((video) => (
          <VideoCard
            key={video.name}
            title={video.title}
            description={video.description}
            name={video.name}
            coverFile={video.cover_file}
          />
        ))}
      </div>
    )
  }
}
