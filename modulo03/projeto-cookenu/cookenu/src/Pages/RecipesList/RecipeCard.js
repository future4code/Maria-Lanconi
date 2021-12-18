import * as Styled from '../../StyledComponents/StyledComponents'

function RecipeCard(props) {
    return(
        
        <Styled.FeedCardDisplay>   
            <Styled.ImageCard src={props.img}/>
            <Styled.TitleCard onClick={() => {props.changePage(props.id)}}>{props.title}</Styled.TitleCard>
        </Styled.FeedCardDisplay>
    )
}

export default RecipeCard;