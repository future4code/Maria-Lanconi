import styled from 'styled-components';

export const MovieDetailContainer = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #2D0C5E;
`

export const MovieInfoContainer = styled.div `
    padding: 15px 50px ;
    height: 287px;
    width: 100%;
    display: flex;
    justify-items: space-between;
`
export const MovieInfoContainerChildren = styled.div `
    padding: 0px 50px ;
    height: 287px;
    width: 700px;
    min-width: 500px;
    display: flex;
    flex-flow: column;
    align-items: left;
    justify-content: center;
`
export const DetailPageMainImg = styled.img `
    width: 383px;
    height: 540px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 8px;
`
export const MainTittle = styled.p `
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;
    color: #FFFFFF;
`
export const SecondaryTitle = styled.p `
    margin: 10px 0px;
    padding: 0;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
`

export const MovieInfos = styled.span `
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: justify;
    color: #DDDDDD;
`

