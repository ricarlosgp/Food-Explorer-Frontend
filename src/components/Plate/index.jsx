import { CgBorderStyleSolid } from 'react-icons/cg'
import { AiOutlinePlus, AiOutlineHeart } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import plateImage from '../../assets/plateImg.svg'
import { useState, useEffect } from 'react'
import { Container } from './styles'

export function Plate() {
  const [widthScreen, setWidthScreen] = useState()

  useEffect(() => {
    setWidthScreen(window.innerWidth)

    window.onresize = () => {
      setWidthScreen(window.innerWidth)
    }
  }, [widthScreen])

  return (
    <Container>
      <div className="wrapper-heart-svg">
        <AiOutlineHeart />
      </div>

      <div className="wrapper-img">
        <img src={plateImage} />
      </div>

      <div className="wrapper-description">
        <div>
          <h3>Spaguetti Gambe</h3>
          <IoIosArrowForward />
        </div>
        <p className={widthScreen >= 800 ? '' : 'hidden'}>
          Massa fresca com camarões e pesto teste teste
        </p>

        <span>R$ 49,87</span>
      </div>

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
