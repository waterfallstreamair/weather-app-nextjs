import { combineReducers } from 'redux'
import * as types from './types'

const initialState = {
  lastUpdate: 0,
}

const weatherReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_WEATHER:
      return {
        ...state,
        lastUpdate: new Date(),
        ...payload
      }
    default:
      return state
  }
}

const reducers = {
  weather: weatherReducer,
}

export default combineReducers(reducers)
