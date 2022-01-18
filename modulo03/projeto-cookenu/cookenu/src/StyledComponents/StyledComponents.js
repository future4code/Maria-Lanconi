import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

// ---- Global Style ----

    export const GlobalStyle = createGlobalStyle`
    body {
        background-color: #FFEEE6;
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    `

// ---- General Display ----

    export const GeneralDisplay = styled.div`
        display: grid;
        height: 100vh;
        grid-template-rows: 120px 1fr;
    `
    
// ---- General User Display ----

    export const UserDisplay = styled.div `
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `
    export const FormUserDisplay = styled.div `
        display: flex;
        height: 50%;
        width: 50%;
        min-width: 500px;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    `
    export const TitleFormUser = styled.h2 `
        color: #F78812;
        font-size: 36px;
    `

    export const InputDisplay = styled.input `
        height: 30px;
        width: 300px;
        margin: 5px;
        border: 2px solid grey;
        border-radius: 15px;
        font-size: 16px;
        padding: 5px;
    `

    export const ButtonDisplay = styled.button `
        background-color: #F78812;
        height: 35px;
        width: 150px;
        margin: 20px;
        border: 2px solid #F78812;
        border-radius: 15px;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
    `

    export const LinkFormat = styled.p `
        color: #F78812;
        cursor: pointer;
    `

// ---- Header ----

    export const HeaderDisplay = styled.div `
        background-color: #FF5403;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0px 50px;
    `
    export const MenuDisplayHeader = styled.div `
        display: flex;
        width: 300px;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

    `
    
    // ---- Header Content ----
        export const HeaderTitle = styled.h1 `
            color: #fff;
            font-size: 34px;
            text-shadow: -1px 4px 0 #F78812, -1px 4px 0 #F78812, 1px -1px 0 #F78812, -1px -1px 0 #F78812;
        `
        export const MenuHeader = styled.h4 `
            color: #fff;
            font-weight: bold;
            font-size: 20px;
            cursor: pointer;
        `

// ---- Feed ----

export const FeedDisplay = styled.div `
    display: grid;
    width: ;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    padding: 20px;
`

export const FeedCardDisplay = styled.div `
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 250px;
    min-width: 350px;
    padding: 10px 0px;
    border-radius: 10px;
`
    // ---- Feed Content ----
    
        export const ImageCard = styled.img `
            width: 300px;
            border-radius: 5px;
        `

        export const TitleCard = styled.h4 `
            color: #F78812;
            cursor: pointer;
        `
// ---- Recipe Detail ----

export const RecipeDisplay = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
`

export const DetailDisplay = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;

`
    // ---- Detail Content ----
    
        export const ImgDetail = styled.img `
            width: 800px;
            height: 400px;
        `

        export const TitleDetail = styled.h3 `
            color: #F78812;
        `

        export const ContentDetail = styled.p `
            color: #F78812;
        `
    
            

        
       