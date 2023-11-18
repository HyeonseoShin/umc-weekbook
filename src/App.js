import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import Header from './pages/Header'
import Home from './pages/Home'
import Celebirity from './pages/Celebirity'
import TV from './pages/TV'
import NotFound from './pages/NotFound'
import Movie from './Components/Movie'
import { movies } from './movieDummy'
import MovieDetail from './pages/DetailPage/MovieDetail'
import Loginpage from './Components/LoginPage'
import { isHtmlElement } from 'react-router-dom/dist/dom'

function App() {
  return (
    <div className="root-wrap">
      {' '}
      <BrowserRouter>
        {' '}
        //A{' '}
        <Routes>
          {' '}
          //B <Route path="/" element={<Home />} />{' '}
          <Route path="/Movie" element=
            {
              <div className="app-container">
                {
                  movies.returns.map((item) => {
                    return(
                      <Movie
                      poster_path={item.poster_path}
                      title={item.title}
                      vote_average={item.vote_average}
                      overview={item.overview}
                      key={item.id}
                      />
                    )
                  })
                }
              </div>
            }>
          </Route>

          <Route to="/celebirity" element={<Celebirity />}>
          </Route>

          <Route path="/tv" element={<div className='app-container'>
            {
              tvs.results.map((item) => {
                return(
                  <TV poster_path={item.poster_path} name={item.name} vote_average={item.vote_average} key={item.id} />
                )
              })
            }
            </div>
          }></Route>

          <Route path={
            '/movie/:title'
          }
          element = {
          <MovieDetail>
          </MovieDetail>
          }>
          </Route>

          <Route path="/*" element={
          <NotFound>
          </NotFound>
          }>
          </Route>

          <Route path={"tv/:name"} element={
          <tvDetail>

          </tvDetail>
          }>
          </Route>

          <Route path="/*" element={
          <Loginpage>
          </Loginpage>
          }>
          </Route>
        </Routes>{' '}
      </BrowserRouter>{' '}
    </div>
  )
}

export default App