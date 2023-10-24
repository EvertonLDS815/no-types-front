import {Knots} from '../../types/knots'
import { Container } from './styles'


function No(props: Knots) {

    return (
        <>
            {props.linkImage !== props.imageExem && (
                <Container>
                    <div className="image-link">
                        <img src={props.linkImage} alt={props.name} onClick={() => props.onModalClick(props)}/>
                    </div>
                    <h3 onClick={() => props.onModalClick(props)}>{props.name}</h3>
                    <span>{props.type}</span>
                    <span>{props.nivel}</span>
                </Container>
            )}
        </>
    )
}

export default No