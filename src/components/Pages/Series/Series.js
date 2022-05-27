import axios from 'axios'
import React,{useState,useEffect} from 'react'
import CustomPagination from '../../Pagination/CustomPagination'
import SingleContent from '../../SigleContent/SingleContent'

const Series = () => {
  const [content,setcontent] =useState([])
  const [page,setpage] =useState(1)
  const [numberOfPage, setNumberOfPages] =useState(1)
  const fetchseries= async()=>{
    const {data}= await axios.get (`https://api.themoviedb.org/3/discover/tv?api_key=de1f3376637b835e4463e358e1e2143b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
    //console.log(data)
    setcontent(data.results)
    setNumberOfPages(data.total_pages)
  }
  console.log(content)
useEffect(()=>{
fetchseries()
},[page])
  return (
    <div>
       <span className='pageTitle'>TV Series</span>


       <div className="trending">
          {
            content && content.map((item)=>{
            // console.log(item)
             return(
               <>
               <SingleContent 
               key={item.id}
               
               id={item.id}
               media_type='tv'
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
      <CustomPagination setpage={setpage} numberOfPage={numberOfPage}/>


      
    </div>
  )
}

export default Series
