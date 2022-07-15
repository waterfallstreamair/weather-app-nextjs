export const WEATHER_URL = `https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&hourly=temperature_2m,relativehumidity_2m,windspeed_10m&past_days=7`

export const CITIES = {
    Kiev: { lat: 50.4422, lon: 30.5367},
    NewYork: { lat: 40.71, lon: -74.01},
    London: { lat: 51.5002, lon: -0.1262},
    Berlin: { lat: 52.52, lon: 13.41},
    Paris: { lat: 48.8567, lon: 2.3510},
    Tokyo: { lat: 35.6785, lon: 139.6823},
}

export const DEFAULT_CITY = 'Kiev'