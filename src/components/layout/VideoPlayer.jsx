import React from 'react';
import './css/video_player.css';

const VideoPlayer = ({setCurrentVideo, currentVideo}) => {
  return (
    <section className="video">
      <section className="video_background" onClick={() => setCurrentVideo(null)}></section>
      <section className="video_box">
        <embed src={currentVideo} type=""/>
      </section>
    </section>
  )
}

export default VideoPlayer;