import styled, { keyframes } from 'styled-components'
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}
`

// ----App Style---

export const AppDisplay = styled.div `
    background-color: #171717;  
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`

// ----General Container----

export const GeneralDisplay = styled.div `
    background-color: #F6F6F6; 
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 98vh;
    min-width: 30vw;
    max-width: 30vw;
    margin: 1vh;
    border-radius: 10px;
    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.5);
`

export const GeneralHeader = styled.div `
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid grey;
    margin: 15px;

    p {
        font-weight: bolder;
        font-size: 22px;
        margin: 5px 15px;
        color: #171717;

        span {
            color: #700B97;
        }
    }

    img {
        width: 35px;
        margin: 0px 15px;
    }
`
// ----HomePage Styled----

export const ProfileContent = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: 65%;
    margin: 3vh;
    
`
export const ImgConfig = styled.div `
    background-color: #171717;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 10px;
   
    img {
        height: 100%;
        width: 100%;
        border-radius: 10px;
        box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.3);
    }
    

`

export const InfoConfig = styled.div `
    flex-direction: column;
    text-align: justify;
    position: absolute;
    width: 25%;
    bottom: 22%;
    left: 37%;
    color: #fff;
    text-shadow: -0.5px 0 #171717, 0 0.5px #171717, 0.5px 0 #171717, 0 -0.5px #171717;
`

export const ButtonConfig = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    height: 50px;
    margin: 15px;

    img {
        width: 80px;
    }
`

// ----Matches Styled----

export const MatchesPageContent = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 25vw;
    
    border-bottom: 1px solid #EAEAEA;

    img {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        margin: 3px;
    }

    p {
        font-weight: bolder;
        margin: 2px;
        margin-left: 10px;
    }


`