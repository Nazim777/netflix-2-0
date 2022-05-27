import React from 'react'
import './SingleContent.css'
import { img_300,unavailable } from '../config/Config'
import ContentModal from '../ContentModal/ContentModal'

import Badge from '@mui/material/Badge';
const SingleContent = ({id,media_type,title,poster,vote,date}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
    {/* <div > class name media */}
        <Badge badgeContent={vote} color={vote>6? "primary" : "secondary"} />
       
        
       
       
        <img className='poster' src={ poster?`${img_300}/${poster}`:unavailable} alt={title} />
        <b className='title'> {title}</b>
        <span className='subTitle'>{media_type=='tv'?'TV Series':'Movies'}</span>
        <span className='subTitle'>{date}</span>

        
      
   
    </ContentModal>
  )
}

export default SingleContent
