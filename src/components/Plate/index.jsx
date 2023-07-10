import { CgBorderStyleSolid } from 'react-icons/cg'
import { AiOutlinePlus, AiOutlineHeart } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { BsFillPencilFill } from 'react-icons/bs'
import { api } from '../../services/api'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react'
import { Container } from './styles'

export function Plate({plate}) {
  const [widthScreen, setWidthScreen] = useState()

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("@rocketfood:user"));

  useEffect(() => {
    setWidthScreen(window.innerWidth)

    window.onresize = () => {
      setWidthScreen(window.innerWidth)
    }
  }, [widthScreen])

  function handleEdit() {
    navigate(`/PlateEdit/${plate.id}`)
  }

  return (
    <Container>
      <div className="wrapper-heartOrPencil-svg">
        {user.admin === 1 ? 
        <button onClick={handleEdit}><BsFillPencilFill /></button>
        :
        <button><AiOutlineHeart /></button>
        }
      </div>

      <Link to={`/Details/${plate.id}`}>
        <div className="wrapper-img">
          <img src={`${api.defaults.baseURL}/files/${plate.imagem}`} alt='' />
        </div>

        <div className="wrapper-description">
          <div>
            <h3>{plate.title}</h3>
            <IoIosArrowForward />
          </div>
          <p className={widthScreen >= 800 ? '' : 'hidden'}>
            {plate.description}
          </p>

          <span>R$ {plate.price}</span>
        </div>
      </Link>


      <div className="wrapper-control">
        <div className="wrapper-buttons">
          <CgBorderStyleSolid />
          <span>01</span>
          <AiOutlinePlus />
        </div>

        <div className="wrapper-button">
          <button>incluir</button>
        </div>
      </div>
    </Container>
  )
}
