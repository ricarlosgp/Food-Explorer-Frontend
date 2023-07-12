import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { HeaderAdm } from '../../components/HeaderAdm'
import { IoIosArrowBack } from 'react-icons/io'
import {useParams, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { CgBorderStyleSolid } from 'react-icons/cg'
import { api } from '../../services/api'

import { Container } from './styles'

export function Details() {
  const [plate, setPlate] = useState([])
  const [ingredients, setIngredients]=  useState([])
  
  const navigate = useNavigate();
  const params = useParams();

  const user = JSON.parse(localStorage.getItem("@rocketfood:user"));

  useEffect(()=>{
    async function fetchPlate(){
        const response = await api.get(`/plates/${params.id}`);
        setPlate(response.data[0])
        setIngredients(response.data[1])
    }
    fetchPlate();
  });

  function handleBack() {
    navigate('/')
  }

  return (
    <Container>
      {user.admin === 1 ? <HeaderAdm /> : <Header />}

      <div className="wrapper-1">
        <div className="wrapper-img">
          <div onClick={handleBack} className="back">
            <IoIosArrowBack />
            <span>voltar</span>
          </div>
          <div className='imgWrapper'>
            <img src={`${api.defaults.baseURL}/files/${plate.imagem}`} alt='' />
          </div>
        </div>

        <div className="wrapper-description">
          <h1>{plate.title}</h1>

          <div className="text">
            <p>{plate.description}</p>
          </div>

          <div className="wrapper-tags">
            
            <ul>
              {ingredients && ingredients.map(ingredient => {
                return(
                  <li key={ingredient.id}>{ingredient.name}</li>
                )
              })
              }
            </ul>

          </div>

          <div className="wrapper-control">
            <CgBorderStyleSolid />
            <span>01</span>
            <AiOutlinePlus />

            <div className="wrapper-button">
              <button>incluir R$ {plate.price}</button>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper-footer">
        <Footer />
      </div>
    </Container>
  )
}
