import { MAX_LENGTH } from "$std/semver/_shared.ts";
import { CityAPI, CountryAPI, PhoneAPI, WeatherAPI } from "./type.ts";

export const Phone = async(telefono:string) => { 
  const url = `https://api.api-ninjas.com/v1/validatephone?number=${telefono}`
  const API_KEY = Deno.env.get("API_KEY")
  if (!API_KEY) { return new Response("Error")}
  const data = await fetch(
    url, {
    headers: {
      'X-Api-Key': API_KEY
    },}
  )
  const resultado:PhoneAPI = await data.json()
  return resultado
}

export const Country = async(pais:string) => { 
  const url = `https://api.api-ninjas.com/v1/country?name=${pais}`
  const API_KEY = Deno.env.get("API_KEY")
  if (!API_KEY) { return new Response("Error")}
  const data = await fetch(
    url, {
    headers: {
      'X-Api-Key': API_KEY
    },}
  )
  const resultado:CountryAPI[] = await data.json()
  return resultado[0]
}

export const Ciudad = async(ciudad:string) => { 
  const url = `https://api.api-ninjas.com/v1/city?name=${ciudad}`
  const API_KEY = Deno.env.get("API_KEY")
  if (API_KEY) {
    const data = await fetch(
      url, {
      headers: {
        'X-Api-Key': API_KEY
      },
    }
    )
  
    const resultado: CityAPI[] = await data.json()


  
    return resultado[0]
  }
  else { 
    const nunca: CityAPI = {
      name: "mal",
      latitude: 12,
      longitude: 31,
      country:"mal"
    }
    return nunca
  }
}



export const GeocodingAPI = async(pais:string, ciudad: string) => { 
  const url = `https://api.api-ninjas.com/v1/geocoding?city=${ciudad}&country=${pais}`
  const API_KEY = Deno.env.get("API_KEY")
  if (!API_KEY) { return new Response("Error")}
  const data = await fetch(
    url, {
    headers: {
      'X-Api-Key': API_KEY
    },}
  )
  const resultado:CountryAPI[] = await data.json()
  return resultado[0]
}

export const TempAPI = async(lat:number, lon: number) => { 
  const url = `https://api.api-ninjas.com/v1/geocoding?lat=${lat}&lon=${lon}`
  const API_KEY = Deno.env.get("API_KEY")
  if (API_KEY) {
    const data = await fetch(
      url, {
      headers: {
        'X-Api-Key': API_KEY
      },
    }
    )
    const resultado: WeatherAPI = await data.json()
    return resultado
  }
  return {temp: 3}
}