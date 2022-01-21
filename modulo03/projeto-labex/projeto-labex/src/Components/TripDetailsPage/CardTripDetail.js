import * as Styled from '../../StyledComponents/StyledComponents'

function CardTripDetail(props) {
    return (
            <div>
                <Styled.TripDetailDisplay>
                <Styled.CardDisplay>
                    
                        <div>
                            <p><span>Nome:</span> {props.trip.name}</p>
                            <p><span>Descrição:</span> {props.trip.description}</p>
                            <p><span>Planeta:</span> {props.trip.planet}</p>
                            <p><span>Duração:</span> {props.trip.duration} dias</p>
                            <p><span>Data:</span> {props.trip.date}</p>
                        </div>
                    </Styled.CardDisplay>
                    
                    <Styled.CardDisplay>
                        <div>
                            <h4>Candidatos:</h4>
                            {props.person ?
                                props.person.map(item => {
                                    return (
                                        <div>
                                            <p><span>Nome:</span> {item.name}</p>
                                            <p><span>Profissão:</span> {item.profession}</p>
                                            <p><span>Requerimento:</span> {item.applicationText}</p>
                                            <p><span>País:</span> {item.country}</p>
                                            <button onClick={() => {props.choose(item.id, true)}}>Aceitar</button>
                                            <button onClick={() => {props.choose(item.id, false)}}>Negar</button>
                                        </div>
                                    )
                                }) :
                                <p>Não existem candidatos ainda :(</p>}
                        </div>
                    </Styled.CardDisplay>
                    </Styled.TripDetailDisplay>

                    
                </div>
            
    )
}

export default CardTripDetail;