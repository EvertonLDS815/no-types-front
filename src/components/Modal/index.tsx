
import { ModalProps } from '../../types/modal'
import { Container, Info } from '../Modal/styles'
import { useEffect } from 'react'

function Modal({args, onCloseModal}: ModalProps) {

    useEffect(() => {
        document.addEventListener("keydown", (event) => {
          if (event.key === "Escape") {
            onCloseModal();
          }
        });
      }, [onCloseModal]);

    return (
        <Container>
            <Info>
                <span ><i onClick={onCloseModal} className="bx bx-x"></i></span>
                <h1>{args}</h1>
            </Info>

        </Container>
    )
}

export default Modal