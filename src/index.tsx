import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { App } from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { WeatherForecast } from './weather-forecast/WeatherForecast'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/project/weather-forecast"
          element={
            <QueryClientProvider client={queryClient}>
              <WeatherForecast />
            </QueryClientProvider>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()