import React from 'react'

export const WeatherContext = React.createContext({})

export interface WeatherPropsType {
  weather: string;
  high: number;
  low: number;
}

export const WeatherProvider = WeatherContext.Provider;
export const WeatherConsumer = WeatherContext.Consumer;
