import React from 'react';
import './style/css/video_player.css';

const VideoPlayer = ({setCurrentVideo, currentVideo}) => {
  return (
    <section className="video">
      <section className="video_background" onClick={() => setCurrentVideo(null)}></section>
      <section className="video_box">
        <embed src={currentVideo} type=""/>
      </section>
      <section className="exit" onClick={() => setCurrentVideo(null)} ><i className="fas fa-2x fas fa-times"></i></section>
    </section>
  )
}

export default VideoPlayer;