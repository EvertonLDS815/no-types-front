// NoPage.js

import { useEffect, useState } from 'react';
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
        setChecked(statusChecked === 'true');
      } catch (error) {
        console.log("Nó não encontrado", error);
        navigate('/', { replace: true });
      }
    }

    loadNo();
  }, [navigate, id]);

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

  useEffect(() => {
    // Desliga o comportamento de restaurar scroll do navegador
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({ top: 0, behavior: "auto" });

    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, [id]);


  function handleChecked() {
    setChecked(true);
    localStorage.setItem(`no_${id}_checked`, 'true');
  }

  function handleUnChecked() {
    setChecked(false);
    localStorage.removeItem(`no_${id}_checked`);
  }

  function handlePrev() {
    if (prevId) {
      navigate(`/no/${prevId}`);
    }
  }

  function handleNext() {
    if (nextId) {
      navigate(`/no/${nextId}`);
    }
  }

  if (!no) {
    return <h2 style={{ padding: '2rem', fontSize: 23 }}>Carregando...</h2>;
  }

  return (
    <>
      <Container key={id}>
        <h2>{no.name}</h2>

        <div className="content">
          <Link to={no.linkImage} target="_blank">
            <img key={`img-${id}`} src={no.linkImage} alt={no.name} />
          </Link>
          <div>
            <p>{no.description}</p>

            <ul>
              {no.type && <li>{no.type}</li>}
              {no.nivel && <li>{no.nivel}</li>}
            </ul>
          </div>
        </div>

        {no.linkVideo && no.linkVideo !== "" && (
          <iframe
            key={`video-${id}`}
            src={`${no.linkVideo.replace("watch?v=", "/embed/")}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}

        {/* Botões de navegação */}
        <div className="content-navigate">
          <a href="/">Home</a>
          <button className="navigation-button" disabled={!prevId} onClick={handlePrev}>Anterior</button>
          <button className="navigation-button" disabled={!nextId} onClick={handleNext}>Próximo</button>
        </div>

        {/* Botões de concluir/remover */}
        {!checked && <button className="checked" onClick={handleChecked}>Concluir o Nó</button>}
        {checked && <button className="unchecked" onClick={handleUnChecked}>Remover</button>}
      </Container>
    </>
  );
}

export default NoPage;