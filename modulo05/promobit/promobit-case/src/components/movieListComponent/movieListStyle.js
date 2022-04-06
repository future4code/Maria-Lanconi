import styled from 'styled-components'

export const ImageListIcon = styled.img `
    width: 176px;
    height: 264px;
    border: 1px solid #E7E7E7;
    box-sizing: border-box;
    border-radius: 5px;
`
export const MovieTitle = styled.p `
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    &:hover {
        color: #3D0E82;
        cursor: pointer;
    }
`
export const ReleaseDate = styled.span `
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #646464
`