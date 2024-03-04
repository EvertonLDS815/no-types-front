import { Link } from 'react-router-dom'
import {Knots} from '../../types/knots'
import { Container } from './styles'
import { useEffect, useState } from 'react';


function No(props: Knots) {
    const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    const statusChecked = localStorage.getItem(`no_${props._id}_concluido`);
    if (statusChecked === 'true') {
        setChecked(true);
    }
  }, [props._id]);

  const handleChecked = () => {
    setChecked(true);
    localStorage.setItem(`no_${props._id}_checked`, 'true');
  };

  return (
    <>
      {props.linkImage !== props.imageExem && (
        <Container className={checked ? 'concluido' : ''}>
          <div className="image-link">
            <Link to={`/no/${props._id}`}>
              <img src={props.linkImage} alt={props.name}/>
            </Link>
          </div>
          <h3>{props.name}</h3>
          <span>{props.type}</span>
          <span>{props.nivel}</span>
          {!checked && <button onClick={handleChecked}>Concluir</button>}
        </Container>
      )}
    </>
  );
}


export default No