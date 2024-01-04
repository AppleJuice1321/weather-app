"use client"
import axios from "axios"
import { useState, useEffect } from "react"

// const lat = 44
// const lon = 50
// const key = "c4269e90fafa9f07271340308e200f63"
const API_KEY = process.env.NEXT_PUBLIC_API_KEY

axios.defaults.baseURL = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${API_KEY}`
export default function useAxios(endpoint) {
    const [response, setResponse] = useState(null) // no start value until api fetch
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(function() {
        async function getWeatherInfo() { // promise
            try {
                //throw new Error("This is an error")
                const RESPONSE = await axios.get(endpoint)
                setResponse(RESPONSE.data)
            } catch (error) {
                setError(error)                
            } finally {
                setLoading(false)
            }
        }
        getWeatherInfo()
    }, [])

    return { response, error, loading }
}