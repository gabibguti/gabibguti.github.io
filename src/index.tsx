import React from 'react'
import ReactDOM from 'react-dom'
import { IntlProvider } from 'react-intl'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { App } from './App'
import './index.css'
import './main.css'
import { Movies } from './movies/Movies'
import { TopMovies } from './movies/TopMovies'
import reportWebVitals from './reportWebVitals'
import { WeatherForecast } from './weather-forecast/WeatherForecast'

const queryClient = new QueryClient()

ReactDOM.render(
  <>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Gloock&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Gloock&family=Martian+Mono:wght@100..800&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Gloock&family=Martian+Mono:wght@100..800&family=Staatliches&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Gloock&family=Martian+Mono:wght@100..800&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Staatliches&display=swap" rel="stylesheet" />
    </head>
    <body>
      <QueryClientProvider client={queryClient}>
        <React.StrictMode>
          <Router>
            <Routes>
              <Route path="/" element={<App />} />
              <Route
                path="/project/weather-forecast"
                element={
                  <IntlProvider locale="en">
                    <WeatherForecast />
                  </IntlProvider>
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
                path="project/movies/top-rated"
                element={
                  <IntlProvider locale="en">
                    <TopMovies />
                  </IntlProvider>
                }
              />
            </Routes>
          </Router>
        </React.StrictMode>
      </QueryClientProvider>
    </body>
  </>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
