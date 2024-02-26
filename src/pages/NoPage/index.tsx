import { useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../services/api';
import { Knots } from '../../types/knots';
import { Container } from './styles';


function NoPage() {
      const { id } = useParams();
      const [no, setNo] = useState<Knots>();
      
      useEffect(() => {
        async function loadNo() {
          await api.get(`/no/${id}`)
          .then((response) => {
            setNo(response.data);
          }).catch((err) => {
            console.log("Nó não encontrado", err);
          })
        }

        loadNo();

        return () => {
          console.log('Componente foi desmontado!')
        }
      }, [])

      if(no === undefined) {
        return (
          <h2>Carregando...</h2>
        )
      }
        return (
      <>
        <Container>
          <h2>{no.name}</h2>

          <div className="content">
            <Link to={no.linkImage? no.linkImage : no.imageExem} target='_blank'>
              <img src={no.linkImage} />
            </Link>
            <p>{no.description}</p>
          </div>

          {no.linkVideo !== "" && (<iframe src={`${no.linkVideo?.replace("watch?v=", "/embed/")}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>)}
        </Container>
      </>
    )
  }
  
export default NoPage;
  