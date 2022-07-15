import * as types from './types'

export const setWeather = ({ weather }) => 
  ({ 
    type: types.SET_WEATHER,
    payload: { ...weather }
  })
