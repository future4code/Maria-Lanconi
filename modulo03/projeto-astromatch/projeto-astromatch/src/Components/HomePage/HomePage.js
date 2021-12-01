import axios from "axios";
import {useState} from "react";
import {useEffect} from "react";
import {axiosConfig} from "../../APIConst/APIConst";
import {baseurl} from "../../APIConst/APIConst";

const HomePage = (props) => {

    // ----States----
     const [profiles, setProfiles] = useState('homepage')

    useEffect (() => {
        getProfile()
    },[])

    // ----ASTROMATCH Functions---- 

    const getProfile = () => {
        axios.get(`${baseurl}/person`, axiosConfig)
        .then(res => {
        setProfiles(res.data.profile)
        })
        .catch(error => {
        console.log(error)
        })
    }

    return (
        <div>
            <h1>HomePage</h1>
            {profiles.name}
        </div>
    )
}

export default HomePage;