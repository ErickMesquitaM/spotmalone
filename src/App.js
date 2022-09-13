import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Nav from './componets/Nav';
import Home from "./componets/Home";
import Search from "./componets/Search";
import Library from "./componets/Library";

import BarMusic from "./componets/BarMusic";

export default function App() {

  const [page, setPage] = useState('home')

  useEffect(() => {
    let elem = document.getElementById(page)
    let img = document.getElementById(page + 'Img')
    elem.classList.add('linkActive')
    img.src = img.src.replace(page, page + "Actived")
  }, [ page ])


  return (
    <Router>
      <div className="App">

        <Nav />

        <Routes>
          <Route path='/' element={ <Home page={page} setPage={setPage} /> } />
          <Route path='/search' element={ <Search page={page} setPage={setPage} /> } />
          <Route path='/library' element={ <Library page={page} setPage={setPage} /> } />
          <Route path='/musicliked' element={ <h1>músicas curtidas</h1> } />
          <Route path='*' element={ <h1>Error[401]: page don't found</h1>  } />
        </Routes>

        <BarMusic />

      </div>
    </Router>
  );
}