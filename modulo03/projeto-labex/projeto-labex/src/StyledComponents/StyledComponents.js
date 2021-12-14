import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

//----Palette----
//#A1A5A6 (content)
//#6593A6 (button)
//#353D40 (tittle)
//#9D9A91 (tittle 'Labe')
//#223E47 (tittle 'X')

//----Global----

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

//----Base Display----

export const BaseDisplay = styled.div `
  height: 100vh;
  display: grid;
  grid-template-rows: 100px 1fr; 

`
//----Base Content Display----

export const ContentDisplay = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`

//----Base Form Display----

export const FormDisplay = styled.form `
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 750px;

  h1 {
    color: #353D40
  }

  input {
    padding: 5px;
    margin: 10px;
    height: 45px;
    width: 80%;
    border-radius: 10px;
    font-size: 16px
  }

  select {
    padding: 5px;
    margin: 10px;
    height: 50px;
    width: 82%;
    border-radius: 10px;
    font-size: 16px
  }
`

//----Header Page----

export const HeaderDisplay = styled.div `
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;

 h1 {
  margin: 60px;
  color: #9D9A91;
  font-size: 34px;
  cursor: pointer;
}
  span {
    color: #223E47;
    cursor: pointer;
  }
 } 

 div {
  width: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 60px;

  button {
    background-color: #6593A6;
    border: 3px solid #6593A6;
    width: 45%;
    height: 40px;
    border-radius: 5px;
    color: #ffffff;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
  }
 }
`


//----Home Page----

export const HomeDisplay = styled.div `
  display: flex;
  justify-content: space-between;

  div {
    height: 300px;
    width: 40%;
    text-align: center;
    margin-left: 100px;
    margin-top: 20vh;
    
    h1 {
    color: #223E47;
    }

    p {
    width: 100%;
    color: #A1A5A6;
    }
  }
  

  
  img{
   margin-right: 3%;
   width: 650px;
  }
`

//----Trip Page----

export const TripPageDisplay = styled.div `
  display: grid;
  width: 85%;
  grid-template-columns: repeat(2, 1fr);
  align-items: stretch;
  row-gap: 10px;
  column-gap: 10px;
`

export const ButtonDisplay = styled.div `
  width: 350px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 2.5%;
  
  button {
      background-color: #6593A6;
      border: 3px solid #6593A6;
      min-width: 40%;
      height: 40px;
      border-radius: 5px;
      color: #ffffff;
      font-weight: bold;
      font-size: 18px;
      cursor: pointer;
  }
`

  //----Cards Trip/Detail----
  export const CardDisplay = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    color: #A1A5A6;

    h1 {
      text-align: center;
      color: #353D40;
    } 

    div{
      text-align: justify;
      width: 500px;
      min-width: 400px

      span {
        color: #9D9A91;
        font-weight: bold;
      }
    }
    
    button {
      background-color: #6593A6;
      border: 3px solid #6593A6;
      width: 125px;
      height: 25px;
      border-radius: 5px;
      color: #ffffff;
      font-weight: bold;
      font-size: 18px;
      cursor: pointer;
      margin: 0px 10px;
    
    }
  `
  export const DisplayButton2 = styled.div `
    display: flex;
    flex-direction: row;
    align-item: center;
    justify-content: center;
    max-width: 100%;
  `

  
  //----Admin Page----

  export const AdminPageDisplay = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
  `
  export const AdminMenu = styled.div `
    display: flex;
    flex-direction: column;
    text-align: left;
    height: 80%;
    width: 200px;
    margin-left: 60px;
    padding: 5px;
  

    p {
      color: #353D40;
      font-weight: bold;
      margin: 5px;
      margin-left: 0px;
      cursor: pointer;
    }
    
  `
    export const DetailDisplay = styled.div `
      margin-left: 50px ;
      width: 75%;
    `
    //----Trip Details----

    export const TripDetailDisplay = styled.div `
      display: flex;
      flex-direction: row;
      margin: 0px 10%;
      justify-content: space-around;
    `
    //----Create Trip----

    export const CreateTripDisplay = styled.div `
      display: flex;
      width: 75%;
      justify-content: center;

    `