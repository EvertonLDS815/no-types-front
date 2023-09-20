import {useEffect, useState} from 'react'
import No from '../../components/No'
import api from '../../services/api'
import Modal from '../../components/Modal'
import { Container } from './styles'

import {Knots} from '../../types/knots'

function Home() {
    const [nos, setNos] = useState([])
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
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
        return (
      <>
        <h2>Home</h2>
        <Container>
          {isModalVisible && <Modal onCloseModal={getHandleClose} args={noArray} />}
          {nos.map((item: Knots) => (
            <No key={item._id}
              name={item.name}
              description={item.description}
              linkImage={item.linkImage? item.linkImage : "https://img.freepik.com/vetores-gratis/glitch-error-404-page-background_23-2148090410.jpg?w=2000"}
              type={item.type}
              nivel={item.nivel}
              linkVideo={item.linkVideo}
              onModalClick={getHandleOpen}
              />
              ))}
        </Container>
      </>
    )
  }
  
export default Home
  