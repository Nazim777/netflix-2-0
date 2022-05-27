import axios from 'axios'
import React,{useEffect, useState} from 'react'
//import Genres from '../../Genres/Genres'
import CustomPagination from '../../Pagination/CustomPagination'
import SingleContent from '../../SigleContent/SingleContent'


const Movies = () => {
  const [page,setpage]=useState(1)
  const [content, setcontent]=useState([])
  const [numberOfPage, setNumberOfPages] =useState(1)
  //const [genres,setGenres] =useState([])
  //const [selectedgenres,setselectedgenres] =useState([])
  
  const fetchdata= async()=>{
    const {data} =await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=de1f3376637b835e4463e358e1e2143b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}`)
setcontent(data.results)
setNumberOfPages(data.total_pages)
//console.log(data)
  }
  useEffect(()=>{
fetchdata()
// eslint-disable-next-line
  },[ page])
  return (
    <div>
     <span className='pageTitle'>Movies</span>
     {/* <Genres
     type='movie'
     genres={genres}
     setGenres={setGenres}
     selectedgenres={selectedgenres}
     setselectedgenres={setselectedgenres}
     setpage={setpage}

     /> */}
     <div className="trending">
          {
            content && content.map((item)=>{
             //console.log(item)
             return(
               <>
               <SingleContent 
               key={item.id}
               
               id={item.id}
               media_type='movie'
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

export default Movies
