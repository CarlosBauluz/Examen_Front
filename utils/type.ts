export type PhoneAPI = {
  is_valid: boolean,
  country: string
  location: string
  timezones: string[]
}

export type CountryAPI = {
  capital: string
  name: string
}

export type CityAPI = {
  name: string,
  latitude: number,
  longitude: number,
  country: string

}


export type WeatherAPI = {
  temp: number
}

export type TODO = {
  temp: number,
  city: string,
  country: string
}