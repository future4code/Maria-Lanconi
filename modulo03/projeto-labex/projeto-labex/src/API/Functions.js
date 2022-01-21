import { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom';
import { baseUrl } from "./APIFunctions";
import axios from "axios";

//---Acess Control---

export const Control = (history) => {
    useEffect(() => {
        
        const token = localStorage.getItem('token')
        if(token  === null) {
            history.push('/login')
        }
    }, [])
}

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
        console.log(res.data)
    })
    .catch (error => {
        console.log(error.response)
    })
    
}

export const Login = (form, history) => {
    axios.post(`${baseUrl}/login`, form)
    .then( res => {
        localStorage.setItem('token', res.data.token)
        history.push('/admin/trips/list')
    })
    .catch ( error => {
        console.log(error.response)
    })
}

export const TripDetail = (idTrip, history) => {

    const [details, setDetailsValue] = useState({})

    useEffect (() => {
        const token = localStorage.getItem('token')
        axios.get(`${baseUrl}/trip/${idTrip}`, {
            headers: {
                auth: token
            }
        })
        .then ( res => {
            setDetailsValue(res.data.trip)
        })
        .catch ( error => {
            console.log(error.response)
        })
    },[])

    return details
}

export const CandidateDetail = (idTrip, history) => {

    const [candidates, setCandidatesValue] = useState([])

    useEffect (() => {
        const token = localStorage.getItem('token')
        axios.get(`${baseUrl}/trip/${idTrip}`, {
            headers: {
                auth: token
            }
        })
        .then ( res => {
            setCandidatesValue(res.data.trip.candidates)
        })
        .catch ( error => {
            console.log(error.response)
        })
    },[])

    return candidates
}

export const CreateTrip = (form) => {
    const token = localStorage.getItem('token')
    axios.post(`${baseUrl}/trips`, form, {
        headers: {
            auth: token
        }
    })
   
}

export const DeleteTrip = (id) =>{
    const token = localStorage.getItem('token')
    axios.del(`${baseUrl}/trips/${id}`, {
        headers: {
            auth: token
        }
    })
    .then ( res => {
        console.log(res.data)
    })
    .catch (error => {
        console.log(error.response.data)
    })
}

export const ChoosePerson = (tripId, candidateId, choice) => {
    const token = localStorage.getItem('token')
    const body = {
        approve: choice
    }
    axios.put(`${baseUrl}/trips/${tripId}/candidates/${candidateId}/decide`, body, {
        headers: {
            auth: token
        }
    })
    .then( res => {
        console.log(res.data)
        
    }).catch ( error => {
        console.log(error.response.data)
        
    })
}