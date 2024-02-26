import { Link } from 'react-router-dom'
import {Knots} from '../../types/knots'
import { Container } from './styles'


function No(props: Knots) {
    return (
        <>
            {props.linkImage !== props.imageExem && (
                <Container>
                    <div className="image-link">
                        <Link to={`/no/${props._id}`}>
                            <img src={props.linkImage} alt={props.name}/>
                        </Link>
                    </div>
                    <h3>{props.name}</h3>
                    <span>{props.type}</span>
                    <span>{props.nivel}</span>
                </Container>
            )}
        </>
    )
}

export default No