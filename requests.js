//import useSwr from 'swr'
import axios from 'axios'
import { WEATHER_URL, CITIES } from './config'

export const get = async (url) => {
    const res = await axios.get(url)
    return res.data
}

export const put = async (url, body) => {
    const res = await axios.put(url, body)
    return res.data
}

const getWeatherUrl = ({ city }) => {
    return WEATHER_URL
        .replace('{lat}', CITIES[city].lat)
        .replace('{lon}', CITIES[city].lon)
}

export const getWeather = async ({ city }) => {
    const res = await get(getWeatherUrl({ city }))
    console.log({ res, city })
    return res
}

//export url => useSwr(url, fetcher)