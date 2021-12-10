import react, { useState, useEffect } from "react";
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

