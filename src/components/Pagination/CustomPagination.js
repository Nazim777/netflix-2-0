import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const CustomPagination = ({setpage,numberOfPage=100}) => {
const handleChange=(item)=>{
    setpage(item)
    window.scroll(0,0)

}
  return (
    <div style={{display:'flex',justifyContent:'center',width:'100%',marginTop:'10px'}}>
        <Stack  spacing={2}>
      
      <Pagination  count={numberOfPage} onChange={(e)=>handleChange(e.target.textContent)} color="secondary"
      hideNextButton hidePrevButton 
      />
      
    </Stack>
    </div>
  )
}

export default CustomPagination
