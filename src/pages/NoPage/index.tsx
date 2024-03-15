// NoPage.js

import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { Knots } from '../../types/knots';
import { Container } from './styles';

function NoPage() {
  const { id } = useParams();
  const [no, setNo] = useState<Knots>();
  const [checked, setChecked] = useState<boolean>(false);
  const [prevId, setPrevId] = useState<number | null>(null);
  const [nextId, setNextId] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadNo() {
      try {
        const response = await api.get(`/no/${id}`);
        setNo(response.data);
        const statusChecked = localStorage.getItem(`no_${id}_checked`);
        if (statusChecked === 'true') {
          setChecked(true);
        } else {
          setChecked(false);
        }
      } catch (error) {
        console.log("Nó não encontrado", error);
      }
    }

    loadNo();
  }, [id]);

  useEffect(() => {
    async function fetchNodes() {
      try {
        const response = await api.get("/");
        const nodes = response.data;

        // Filtra os nós com linkImage preenchido
        const filteredNodes = nodes.filter((node: Knots) => node.linkImage !== "");

        // Encontra o índice do nó atual
        const currentIndex = filteredNodes.findIndex((node: Knots) => node._id === id);

        // Define os IDs dos nós anterior e próximo
        setPrevId(currentIndex > 0 ? filteredNodes[currentIndex - 1]._id : null);
        setNextId(currentIndex < filteredNodes.length - 1 ? filteredNodes[currentIndex + 1]._id : null);
      } catch (error) {
        console.error("Erro ao buscar nós", error);
      }
    }

    fetchNodes();
  }, [id]);

  const handleChecked = () => {
    setChecked(true);
    localStorage.setItem(`no_${id}_checked`, 'true');
  };

  const handlePrev = () => {
    if (prevId) {
      navigate(`/no/${prevId}`);
      window.scrollTo(0, 0); // Rola para o topo da página
    }
  };

  const handleNext = () => {
    if (nextId) {
      navigate(`/no/${nextId}`);
      window.scrollTo(0, 0); // Rola para o topo da página
    }
  };

  if (!no) {
    return <h2 style={{ padding: '2rem', fontSize: 23 }}>Carregando...</h2>;
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

        {/* Renderiza os botões de navegação */}
        <div className="content-navigate">
          <a href="/">Home</a>
          <button className="navigation-button" disabled={!prevId} onClick={handlePrev}>Anterior</button>
          <button className="navigation-button" disabled={!nextId} onClick={handleNext}>Próximo</button>
        </div>

        {/* Renderiza o botão de concluir somente se o card não estiver concluído */}
        {!checked && <button className="checked" onClick={handleChecked}>Concluir o Nó</button>}
      </Container>
    </>
  )
}

export default NoPage;
