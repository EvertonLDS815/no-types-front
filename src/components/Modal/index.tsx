
import { Knots } from '../../types/knots';
import { Container, Info } from '../Modal/styles'


interface ModalProps {
    args: Knots;
    onCloseModal: () => void;
}

function Modal({args, onCloseModal}: ModalProps) {


    console.log(args)



    return (
        <Container>
            <Info>
                <span ><i onClick={onCloseModal} className="bx bx-x"></i></span>
                <h1>{args.name}</h1>
                <p>{args.description}</p>
                <span>{args.nivel}</span>
            </Info>

        </Container>
    )
}

export default Modal