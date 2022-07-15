import { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import moment from 'moment'

import { getWeather } from '../requests'
import { Modal } from '../components/modal'
import { Calendar } from '../components/calendar'
import { Tabs } from '../components/tabs'
import Weather from '../components/weather'
import { CITIES, DEFAULT_CITY } from '../config'
import { setWeather } from '../actions'

const Index = () => {
  const weather = useSelector((state) => state.weather)
  const [date, setDate] = useState(new Date())
  const [modalData, setModalData] = useState({ isOpen: false, text: '', title: '' })
  const dispatch = useDispatch()
  
  useEffect(() => {
    (async () => {
      let json = await getWeather({ city: DEFAULT_CITY })
      dispatch(setWeather({ weather: json }))
    })()
  }, [getWeather, setWeather, dispatch])

  const handleTabChange = useCallback(index => {
    (async () => {
      const cities = Object.keys(CITIES)
      let json = await getWeather({ city: cities[index] })
      dispatch(setWeather({ weather: json }))
    })()
  }, [getWeather, setWeather, dispatch, CITIES])
  
  const handleCalendarChange = useCallback(dt => {
    const index = -moment().subtract(7, 'days').diff(dt, 'days')
    if (index >= 14 || index < 0) {
      setModalData({ text: 'No data for this date.', title: 'No data', isOpen: true })
    } else {
      setDate(dt)
    }
  }, [])
  
  const onClose = useCallback(() => {
    setModalData({ isOpen: false, text: '', title: '' })
  }, [])
  
  const { isOpen, text, title } = modalData
  return (
      <div className="app">
        <h1 className="text-4xl text-slate-700 ml-10 my-10" >
          Weather App
        </h1>
        <div className="flex flex-wrap place-items-start 
          place-content-start ml-10 mb-10 ">
          <Tabs tabs={CITIES} onChange={handleTabChange}>
            <Weather weather={weather} date={date} />
          </Tabs>
          <Calendar onChange={handleCalendarChange} />
        </div>
        <Modal isOpen={isOpen} text={text} title={title} onClose={onClose} />
      </div>
  )
}

export default Index
