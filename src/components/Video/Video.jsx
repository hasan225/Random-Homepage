import React from 'react'
import mountain from "../../assets/video/Mountains - 81945.mp4"

const Video = () => {
  return (
    <section className="Section">
    <video className="w-full h-60 object-cover rounded-lg" controls muted src={mountain}></video>
    </section>
  )
}

export default Video