import { useState, useEffect } from "react";
import { baseUrl } from "./APIFunctions";
import axios from "axios";

export const TripList = () => {
    const [trips, setTripsValue] = useState([])

    useEffect (() => {
       axios.get(`${baseUrl}/trips`)
       .then (res => {
       setTripsValue(res.data.trips)
       })
       .catch ( error => {
       console.log(error)
       })
    }, [])
   
    return trips
}

export const Application = (form, id) => {
    
    useEffect (() => {
        axios.post(`${baseUrl}/${id}/apply`, form)
    })
    .then (res => {
        console.log(res.response.data)
    })
    .catch (error => {
        console.log(error.response)
    })
    
}

export const Login = (form) => {
    axios.post(`${baseUrl}/login`, form)
    .then( res => {
        console.log(res.response.data)
    })
    .catch ( error => {
        console.log( error.response)
    })
}