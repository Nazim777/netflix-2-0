

import { Container } from '@mui/system';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MainNav from './components/MainNav'
import Trending from './components/Pages/Trending/Trending'
import Movies from './components/Pages/Movies/Movies';
import Series from './components/Pages/Series/Series';
import Search from './components/Pages/Search/Search';
function App() {
  
  return (
    <>
     <BrowserRouter>
     <Header/>
    <div className="App">
     <Container>
       <Routes>
           <Route path='/' element={<Trending/>} />  
          <Route path='/movies' element={<Movies/>} /> 
         <Route path='/series' element={<Series/>} />  
         <Route path='/search' element={<Search/>} />

       </Routes>
       

     </Container>
       
  
    </div>
    <MainNav/>
    </BrowserRouter>
    </>
  );
}

export default App;
