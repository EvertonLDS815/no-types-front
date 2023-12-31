import {useEffect, useState} from 'react'
import No from '../../components/No'
import api from '../../services/api'
import Modal from '../../components/Modal'
import { Header, Container } from './styles'

import {Knots} from '../../types/knots'
import imageLogo from '../../assets/nos-e-amarras.jpg'

function Home() {
    const [nos, setNos] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [noArray, setNoArray] = useState<Knots>()
    
    useEffect(() => {
        api.get("/").then((response) => {
            setNos(response.data);
            // console.log(response.data);
          });

        }, [])

        
        
        
        function getHandleOpen(arr: Knots) {
          setIsModalVisible(true)
          setNoArray(arr)
        }
        
        function getHandleClose() {
          setIsModalVisible(false)
        }
        useEffect(() => {
          document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
              getHandleClose();
            }
          });
        }, [getHandleClose]);

        const image = "https://img.freepik.com/vetores-gratis/glitch-error-404-page-background_23-2148090410.jpg?w=2000";
        return (
      <>
      <Header>
        <h1 id="title-page">Nós e amarras<img width={83} src={imageLogo} /></h1>

      </Header>
        <Container>
          {isModalVisible && <Modal onCloseModal={getHandleClose} args={noArray} />}
          {nos.map((item: Knots) => (
            <No key={item._id}
              name={item.name}
              description={item.description}
              linkImage={item.linkImage? item.linkImage : image}
              type={item.type}
              nivel={item.nivel}
              linkVideo={item.linkVideo}
              onModalClick={getHandleOpen}
              imageExem={image}
              />
              ))}
        </Container>
      </>
    )
  }
  
export default Home
  