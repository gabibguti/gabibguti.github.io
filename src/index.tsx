import React from 'react'
import ReactDOM from 'react-dom'
import { IntlProvider } from 'react-intl'
import { QueryClient, QueryClientProvider } from 'react-query'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { App } from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { WeatherForecast } from './weather-forecast/WeatherForecast'
import './main.css'
import { Movies } from './movies/Movies'
import { TopMovies } from './movies/TopMovies'
import { TopTVShows } from './movies/TopTVShows'
import { AllMovies } from './movies/AllMovies'
import { AllTVShows } from './movies/AllTVShows'
import { TopMoviesFromAllTime } from './movies/TopMoviesFromAllTime'

const queryClient = new QueryClient()

ReactDOM.render(
  <>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Gloock&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Gloock&family=Martian+Mono:wght@100..800&display=swap" rel="stylesheet" />
  </head>
  <body>
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/project/weather-forecast"
          element={
            <QueryClientProvider client={queryClient}>
              <IntlProvider locale="en">
                <WeatherForecast />
              </IntlProvider>
            </QueryClientProvider>
          }
        />
        <Route
          path="project/movies"
          element={
            <IntlProvider locale="en">
              <Movies />
            </IntlProvider>
          }
        />
        <Route
          path="project/movies/:year"
          element={
            <IntlProvider locale="en">
              <Movies />
            </IntlProvider>
          }
        />
        <Route
          path="project/movies/top-movies/:year"
          element={
            <IntlProvider locale="en">
              <TopMovies />
            </IntlProvider>
          }
        />
        <Route
          path="project/movies/top-tv-shows/:year"
          element={
            <IntlProvider locale="en">
              <TopTVShows />
            </IntlProvider>
          }
        />
        <Route
          path="project/movies/all-movies/:year"
          element={
            <IntlProvider locale="en">
              <AllMovies />
            </IntlProvider>
          }
        />
        <Route
          path="project/movies/all-tv-shows/:year"
          element={
            <IntlProvider locale="en">
              <AllTVShows />
            </IntlProvider>
          }
        />
        <Route
          path="project/movies/top-movies-all-time"
          element={
            <IntlProvider locale="en">
              <TopMoviesFromAllTime />
            </IntlProvider>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
  </body>
  </>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
