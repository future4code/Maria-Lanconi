import axios from 'axios';
import { baseUrlRecipe, baseUrlUser } from './APIConfig';
import { useState, useLayoutEffect } from 'react';

// ---- ENDPOINT ----

export const Login = (form) => {
    axios.post(`${baseUrlUser}/login`, form)
    .then( res => {
        localStorage.setItem('token', res.data.token)
    })
    .catch( error => {
        console.log(error.response)
    })
}

export const SignUp = (form, history) => [
    axios.post(`${baseUrlUser}/signup`, form)
    .then( res => {
        localStorage.setItem('token', res.data.token)
        history.push('/')
    })
    .catch( error => {
        console.log(error.response)
    })
]

export const FeedRecipes = () => {

    const [feed, setFeedValue] = useState([])
    const token = localStorage.getItem('token')

    useLayoutEffect(() => {
        axios.get(`${baseUrlRecipe}/feed`, {
            headers: {
                Authorization: token
            }
        })
        .then (res => {
            setFeedValue(res.data)
        })
        .catch ((error) => {
            console.log(error.response)
        })
    })

    return feed
}

export const Details = (id) => {

    const [recipe, setRecipeValue] = useState([{}])
    const token = localStorage.getItem('token')

    useLayoutEffect(() => {
        axios.get(`${baseUrlRecipe}/${id}`, {
            headers: {
                Authorization: token
            }
        })
        .then (res => {
            setRecipeValue(res.data)
        })
        .catch ((error) => {
            console.log(error.response)
        })
    })
    return recipe
}