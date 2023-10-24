
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
                <div className="head-modal">
                    <h1>{args.name}</h1>
                    <span><i onClick={onCloseModal} className="bx bx-x"></i></span>
                </div>
                <div className="cont">
                    <img src={args.linkImage} />
                    <p>{args.description}</p>
                    {args.linkVideo !== "" && (<iframe src={`${args.linkVideo?.replace("watch?v=", "/embed/")}`} title="A loja de conveniência na noite de verão chuvosa 🌧️ Lista de reprodução de Lofi Night Lofi chuvosa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>)}
                </div>
            </Info>

        </Container>
    )
}

export default Modal