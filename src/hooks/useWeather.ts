import { useState, useEffect, useCallback } from 'react'

const KALAW_LAT = 20.633333
const KALAW_LON = 96.566666

export interface WeatherData {
  temperature: number
  humidity: number
  weatherCode: number
  windSpeed: number
  time: string
}

export interface WeatherCondition {
  label: string
  icon: string
}

const WEATHER_CODES: Record<number, WeatherCondition> = {
  0: { label: 'Clear sky', icon: 'Sun' },
  1: { label: 'Mainly clear', icon: 'Sun' },
  2: { label: 'Partly cloudy', icon: 'CloudSun' },
  3: { label: 'Overcast', icon: 'Cloud' },
  45: { label: 'Fog', icon: 'CloudFog' },
  48: { label: 'Depositing rime fog', icon: 'CloudFog' },
  51: { label: 'Light drizzle', icon: 'CloudDrizzle' },
  53: { label: 'Moderate drizzle', icon: 'CloudDrizzle' },
  55: { label: 'Dense drizzle', icon: 'CloudDrizzle' },
  56: { label: 'Freezing drizzle', icon: 'CloudDrizzle' },
  57: { label: 'Dense freezing drizzle', icon: 'CloudDrizzle' },
  61: { label: 'Slight rain', icon: 'CloudRain' },
  63: { label: 'Moderate rain', icon: 'CloudRain' },
  65: { label: 'Heavy rain', icon: 'CloudRain' },
  66: { label: 'Freezing rain', icon: 'CloudRain' },
  67: { label: 'Heavy freezing rain', icon: 'CloudRain' },
  71: { label: 'Slight snow', icon: 'Snowflake' },
  73: { label: 'Moderate snow', icon: 'Snowflake' },
  75: { label: 'Heavy snow', icon: 'Snowflake' },
  77: { label: 'Snow grains', icon: 'Snowflake' },
  80: { label: 'Slight rain showers', icon: 'CloudRain' },
  81: { label: 'Moderate rain showers', icon: 'CloudRain' },
  82: { label: 'Violent rain showers', icon: 'CloudRain' },
  85: { label: 'Slight snow showers', icon: 'Snowflake' },
  86: { label: 'Heavy snow showers', icon: 'Snowflake' },
  95: { label: 'Thunderstorm', icon: 'CloudLightning' },
  96: { label: 'Thunderstorm with hail', icon: 'CloudLightning' },
  99: { label: 'Thunderstorm with heavy hail', icon: 'CloudLightning' },
}

export function getWeatherCondition(code: number): WeatherCondition {
  return WEATHER_CODES[code] || { label: 'Unknown', icon: 'Cloud' }
}

interface OpenMeteoResponse {
  current: {
    time: string
    interval: number
    temperature_2m: number
    relative_humidity_2m: number
    weather_code: number
    wind_speed_10m: number
  }
}

interface UseWeatherReturn {
  weather: WeatherData | null
  condition: WeatherCondition | null
  isLoading: boolean
  error: string | null
  refetch: () => void
}

export function useWeather(): UseWeatherReturn {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchWeather = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${KALAW_LAT}&longitude=${KALAW_LON}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=Asia/Yangon`

      const response = await fetch(url)

      if (!response.ok) {
        throw new Error('Failed to fetch weather data')
      }

      const data: OpenMeteoResponse = await response.json()

      setWeather({
        temperature: Math.round(data.current.temperature_2m),
        humidity: data.current.relative_humidity_2m,
        weatherCode: data.current.weather_code,
        windSpeed: Math.round(data.current.wind_speed_10m),
        time: data.current.time,
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchWeather()
  }, [fetchWeather])

  const condition = weather ? getWeatherCondition(weather.weatherCode) : null

  return {
    weather,
    condition,
    isLoading,
    error,
    refetch: fetchWeather,
  }
}
