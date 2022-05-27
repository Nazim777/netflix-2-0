import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Button, TextField, Typography } from '@mui/material'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import './Search.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/system';
import SingleContent from '../../SigleContent/SingleContent';
import CustomPagination from '../../Pagination/CustomPagination';
import CopyrightIcon from '@mui/icons-material/Copyright';
const Search = () => {
  const [content,setcontent] =useState([])
  const [page,setpage] =useState(1)
  const [numberOfPage, setNumberOfPages] =useState(1)
  const [searchText,setsearchText] =useState('')
  const [type,setType] =useState(0)
 
    const fetchSearch=async()=>{
      try {
        const {data} = await axios.get(`https://api.themoviedb.org/3/search/${type?"tv":"movie"}?api_key=de1f3376637b835e4463e358e1e2143b&language=en-US&query=${searchText}&page=${page}&include_adult=false`)
      setcontent(data.results)
      setNumberOfPages(data.total_pages)
        
      } catch (error) {
        console.log(error)
        
      }
      
    }
 //console.log(content)
 const handleChange = (event, newValue) => {
  setType(newValue);
};
  useEffect(()=>{
    fetchSearch()
// eslint-disable-next-line 
  },[type,page])
  return (
    <>
    <div className='searchbox' >
     <TextField style={{backgroundColor:'#fff',flex:1}} variant='filled' label='Search' onChange={(e)=>setsearchText(e.target.value)} />
     <Button variant='contained' style={{marginLeft:'10px',padding:'10px'}} onClick={fetchSearch} ><ManageSearchIcon fontSize='large'/></Button>

    
    </div>
    <Box sx={{marginBottom:'15px'}}>
<Tabs
   value={type}
   onChange={handleChange}
   textColor="black"
   indicatorColor="secondary"
   aria-label="secondary tabs example"
 >
   <Tab  label="Search Movies" />
   <Tab label="Search TV Series" />
  
 </Tabs>
</Box>

<div className="trending">
          {
            content && content.map((item)=>{
             //console.log(item)
             return(
               <>
               <SingleContent 
               key={item.id}
               
               id={item.id}
               media_type={type? 'tv' :'movie'}
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
     <Typography sx={{textAlign:'center', marginTop:'10px'}}>
    Copyright  <CopyrightIcon sx={{fontSize:'16px'}}/> All Right Reserved By Mohammad Nazim Hossain

     </Typography>

</>
  )
}

export default Search
