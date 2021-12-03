import axios from "axios";
import react, {useState} from "react";
import {useEffect} from "react";
import {axiosConfig} from "../../APIConst/APIConst";
import {baseurl} from "../../APIConst/APIConst";
import * as Styled from "../StyledComponents/StyledComponents"
import buttonDelete from "../../Img/botao-excluir.png"
import buttonCheck from "../../Img/verificado.png"
import profile from "../../Img/profile.png"

const HomePage = (props) => {

    // ----States / Functions----
     const [profiles, setProfiles] = useState({})
     const [viewProfiles, setViewProfile] = useState(0)
    
    useEffect (() => {
        getProfile()
    },[viewProfiles])

    useEffect (() => {
        clear();
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

    const likePerson = profileId => {
        const body = {
            id: profileId,
            choice: true
        }
        axios.post(`${baseurl}/choose-person`, body, axiosConfig)
        .then(res => {
            console.log(res.data)
            setViewProfile(viewProfiles +1)
        })
        .catch(error => {
            console.log(error)
            })
    }

    const dislikePerson = profileId => {
        const body = {
            id: profileId,
            choice: false
        }
        axios.post(`${baseurl}/choose-person`, body, axiosConfig)
        .then(res => {
            console.log(res.data)
            setViewProfile(viewProfiles +1)
        })
        .catch(error => {
            console.log(error)
            })
    }

    const clear = () => {
        axios.put(`${baseurl}/clear`, axiosConfig)
        .then(res => {
            console.log(res.data)
        })
        .catch(error => {
            console.log(error)
            })
    }

    return (
        <Styled.GeneralDisplay>

            <Styled.GeneralHeader >
                <p>Astro<span>Match</span></p>
                <img src={profile} onClick={props.changePage}></img>
            </Styled.GeneralHeader >

            <Styled.ProfileContent>

                <Styled.ImgConfig>
                    <img src={profiles.photo} width="100px"></img>
                </Styled.ImgConfig>

                <Styled.InfoConfig>
                    <h2>{profiles.name}, {profiles.age}</h2>
                    <p>{profiles.bio}</p>
                </Styled.InfoConfig>

            </Styled.ProfileContent>
            
            <Styled.ButtonConfig>
            <img src={buttonCheck} onClick={() => {likePerson(profiles.id)}}></img>
                <img src={buttonDelete} onClick={() => {dislikePerson(profiles.id)}}></img>
            </Styled.ButtonConfig>

            
        </Styled.GeneralDisplay>
    )
}

export default HomePage;