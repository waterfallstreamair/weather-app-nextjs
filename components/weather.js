import { useState, useEffect, } from 'react'
import moment from 'moment'
import { mean, round } from 'lodash'
import { SunIcon, CloudIcon } from '@heroicons/react/outline'

const Weather = ({ date, weather }) => {
  const [weatherData, setWeatherData] = useState({})
  
  useEffect(() => {
    const index = -moment().subtract(7, 'days').diff(date, 'days')
    if (index < 14) {
      const t = weather.hourly?.temperature_2m.slice(index * 24, (index + 1) * 24)
      const w = weather.hourly?.windspeed_10m.slice(index * 24, (index + 1) * 24)
      const h = weather.hourly?.relativehumidity_2m.slice(index * 24, (index + 1) * 24)
      const temperature = round(mean(t) || 0)
      const wind = round(mean(w) || 0)
      const humidity = round(mean(h) || 0) 
      setWeatherData({ temperature, wind, humidity })
    }
  }, [date, weather])
  
  const { temperature, wind, humidity } = weatherData
  
  return (
    <div className="grid grid-cols-2 place-content-start 
      place-items-start text-xl text-slate-700 italic">
      <div className="flex text-slate-200">
        <SunIcon className="w-20 h-20" />
        <CloudIcon className="w-20 h-20" />
      </div>
      <ul className="space-y-4">
        <li>{`Temperature ${temperature} °C`}</li> 
        <li>{`Wind ${wind} km/h`}</li>
        <li>{`Humidity ${humidity} %`}</li>
      </ul>
    </div>
  )
}

export default Weather
