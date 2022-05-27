import { Chip } from '@mui/material'
import axios from 'axios'
import React, {useState, useEffect } from 'react'

const Genres = ({
    type,selectedgenres,genres,setGenres,
    setselectedgenres,setpage
}) => {

    const fetchGenres = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/genre/${type}/list?api_key=de1f3376637b835e4463e358e1e2143b&language=en-US`
        );
       setGenres(data.genres);
       
      };
console.log(genres)
useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({}); // unmounting
    };
    // eslint-disable-next-line
  }, []);

  
  return (
    <div>
     
     
      
     
     
    </div>
  )
}

export default Genres
