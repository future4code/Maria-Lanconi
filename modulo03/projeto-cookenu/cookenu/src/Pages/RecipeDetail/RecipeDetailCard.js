import * as Styled from '../../StyledComponents/StyledComponents'

function RecipeDetailCard (props) {
    return (
        <Styled.DetailDisplay>
            <div>
                <Styled.ImgDetail src={props.img}/>
                <Styled.ContentDetail>Postado por: {props.user} em {props.date} </Styled.ContentDetail>
            </div>

            <div>
                <Styled.TitleDetail>{props.title}</Styled.TitleDetail>
                <Styled.ContentDetail>{props.description}</Styled.ContentDetail>
            </div>
        </Styled.DetailDisplay>
    )
}

export default RecipeDetailCard;