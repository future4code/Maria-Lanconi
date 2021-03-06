import axios from "axios";
import {useState} from "react";
import {useEffect} from "react";
import {axiosConfig} from "../../APIConst/APIConst";
import {baseurl} from "../../APIConst/APIConst";
import * as Styled from "../StyledComponents/StyledComponents"
import matches from "../../Img/group.png"
import PersonIcon from '@mui/icons-material/Person';

const MatchesPage = (props) => {

    // ----States / Functions----
    const [matchesList, setMatchesList] = useState([])

    useEffect (() => {
        getMatches()
    }, [])

    const mapMatchesList = matchesList.map( item => {
        return <Styled.MatchesPageContent>
            <div>
                <img src= {item.photo}></img>
            </div>
            
            <div> 
                <p>{item.name}</p>
            </div>
        </Styled.MatchesPageContent>
    })
    
    // ----ASTROMATCH Functions---- 
    const getMatches = () => {
        axios.get(`${baseurl}/person`, axiosConfig)
        .then(res => {
            const newMatchesList = [...matchesList, res.data.profile]
            setMatchesList(newMatchesList)
        })
        .catch(error => {
            console.log(error)
        })
    }
    console.log(matchesList)
    
    return (
        <Styled.GeneralDisplay>

            <Styled.GeneralHeader >
                <PersonIcon sx={{
                    fontSize: 40,
                    color: '#700B97',
                }} onClick={props.changePage}/>
                <p>Astro<span>Match</span></p>
            </Styled.GeneralHeader >

            <p>
                {mapMatchesList}
            </p>
        </Styled.GeneralDisplay>
    )
}

export default MatchesPage;