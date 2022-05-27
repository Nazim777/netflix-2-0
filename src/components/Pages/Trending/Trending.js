import axios from 'axios'
import React, { useState,useEffect } from 'react'
import SingleContent from '../../SigleContent/SingleContent'
import './Trending.css'
import CustomPagination from '../../Pagination/CustomPagination'

const Trending = () => {
  const [content,setcontent] =useState([])
  const [page,setpage] =useState(1)
  const fethdata=async()=>{
   const {data}= await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=de1f3376637b835e4463e358e1e2143b&page=${page}`)
   setcontent(data.results)
  // console.log(data.results)
  }


useEffect(()=>{
fethdata()
// eslint-disable-next-line
},[page])
  return (
    <div>
      <div className='pageTitle'> Trending</div>
        <div className="trending">
          {
            content && content.map((item)=>{
             //console.log(item)
             return(
               <>
               <SingleContent 
               key={item.id}
               
               id={item.id}
               media_type={item.media_type}
               title={item.title || item.name}
               poster={item.poster_path || item.backdrop_path}
               date={item.release_date || item.first_air_date}
               vote= {item.vote_average}

               />
               
               </>
             )
            })
          }
        </div>
      <CustomPagination setpage={setpage}/>
    </div>
  )
}

export default Trending
