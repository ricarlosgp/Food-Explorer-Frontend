import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'

import {IoIosArrowBack} from 'react-icons/io'

import {AiOutlinePlus} from 'react-icons/ai'
import {CgBorderStyleSolid} from 'react-icons/cg'
import SaladaRavanello from "../../assets/plates/saladaRavanello.svg"

import {Container} from './styles';

export function Details() {

  return (
    <Container>
      <Header />

      <div className='wrapper-1'>
        <div className='wrapper-img'>
          <div className='back'>
            <IoIosArrowBack />
            <span>voltar</span>
          </div>
          <img 
          src={SaladaRavanello}
          alt="Salada Ravanello"
          />
        </div>

        <div className='wrapper-description'>
          <h1>Salada Ravanello</h1>

          <div className='text'>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.
            </p>
          </div>

          <div className='wrapper-tags'>
            <ul>
              <li>alface</li>
              <li>cebola</li>
              <li>cebola</li>
              <li>cebola</li>
            </ul>
          </div>

          <div className='wrapper-control'>
            <CgBorderStyleSolid />
            <span>01</span>
            <AiOutlinePlus />

            <div className='wrapper-button'>
              <button>
                incluir R$ 25,00
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='wrapper-footer'>
       <Footer />
      </div>
    </Container>
  )
}
