import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../services/api';
import { Knots } from '../../types/knots';
import { Container } from './styles';

function NoPage() {
  const { id } = useParams();
  const [no, setNo] = useState<Knots>();
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    async function loadNo() {
      try {
        const response = await api.get(`/no/${id}`);
        setNo(response.data);
        const statusChecked = localStorage.getItem(`no_${id}_checked`);
        if (statusChecked === 'true') {
          setChecked(true);
        }
      } catch (error) {
        console.log("Nó não encontrado", error);
      }
    }

    loadNo();

    return () => {
      console.log('Componente foi desmontado!')
    }
  }, [id]);

  const handleConcluir = () => {
    setChecked(true);
    localStorage.setItem(`no_${id}_checked`, 'true');
  };

  if (no === undefined) {
    return (
      <h2 style={{padding: '2rem', fontSize: 23}}>Carregando...</h2>
    )
  }

  return (
    <>
      <Container>
        <h2>{no.name}</h2>

        <div className="content">
          <Link to={no.linkImage ? no.linkImage : no.imageExem} target='_blank'>
            <img src={no.linkImage} alt={no.name} />
          </Link>
          <div>
            <p>{no.description}</p>

            <ul>
              <li>{no.type}</li>
              <li>{no.nivel}</li>
            </ul>
          </div>
        </div>

        {no.linkVideo !== "" && (
          <iframe src={`${no.linkVideo?.replace("watch?v=", "/embed/")}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        )}

        {/* Renderiza o botão de concluir somente se o card não estiver concluído */}
        {!checked && <button className="checked" onClick={handleConcluir}>Concluir o Nó</button>}
      </Container>
    </>
  )
}

export default NoPage;
