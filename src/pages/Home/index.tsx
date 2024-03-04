import {useEffect, useState} from 'react'
import No from '../../components/No'
import api from '../../services/api'
import { Container } from './styles'
import Header from '../../components/Header';

import {Knots} from '../../types/knots'

function Home() {
    const [nos, setNos] = useState([])
    useEffect(() => {
        api.get("/").then((response) => {
            setNos(response.data);
            // console.log(response.data);
          });

        }, [])

        const image = "https://img.freepik.com/vetores-gratis/glitch-error-404-page-background_23-2148090410.jpg?w=2000";
        return (
      <>
        <Header />
        {nos.length > 0 && (
          <Container>
          {nos.map((item: Knots) => (
            <No key={item._id}
              _id={item._id}
              name={item.name}
              description={item.description}
              linkImage={item.linkImage? item.linkImage : image}
              type={item.type}
              nivel={item.nivel}
              linkVideo={item.linkVideo}
              imageExem={image}
              />
              ))}
        </Container>
        )}
      </>
    )
  }
  
export default Home
  