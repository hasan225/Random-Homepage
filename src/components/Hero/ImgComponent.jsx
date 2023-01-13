import React from 'react'

const ImgComponent = ({img,cls}) => {
  return (
    <>
       <img className={cls} src={img} alt="" /> 
    </>
  )
}

export default ImgComponent