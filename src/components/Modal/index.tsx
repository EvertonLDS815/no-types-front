
import { Knots } from '../../types/knots';
import { Container, Info } from '../Modal/styles'


interface ModalProps {
    args: Knots | undefined;
    onCloseModal: () => void;
}

function Modal({args, onCloseModal}: ModalProps) {

    if (args === undefined) {
        return
    }


    return (
        <Container>
            <Info>
                <div className="head-modal">
                    <h1>{args.name}</h1>
                    <span><i onClick={onCloseModal} className="bx bx-x"></i></span>
                </div>
                <div className="cont">
                    <img src={args.linkImage} />
                    <ul>
                        {args.nivel && (<li>{args.nivel}</li>)}
                        {args.type && (<li>{args.type}</li>)}
                    </ul>
                    <p>{args.description}</p>
                    {args.linkVideo !== "" && (<iframe src={`${args.linkVideo?.replace("watch?v=", "/embed/")}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>)}
                </div>
            </Info>

        </Container>
    )
}

export default Modal