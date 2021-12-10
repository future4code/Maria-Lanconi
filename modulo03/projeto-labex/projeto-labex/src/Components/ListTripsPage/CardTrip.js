import * as Styled from '../../StyledComponents/StyledComponents'

function CardTrip (props) {
    return (
        <Styled.CardDisplay>
            <h1>{props.name}</h1>
            <div>
                <p><span>Descrição:</span> {props.description}</p>
                <p><span>Planeta:</span> {props.planet}</p>
                <p><span>Duração:</span> {props.duration} dias</p>
                <p><span>Data:</span> {props.date}</p>
            </div>
        </Styled.CardDisplay>
    )
}

export default CardTrip;