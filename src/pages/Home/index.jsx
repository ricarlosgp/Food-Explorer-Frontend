import imgHome from '../../assets/imgHome.svg'
import { Header } from '../../components/Header'
import { HeaderAdm } from '../../components/HeaderAdm'
import { Footer } from '../../components/Footer'
import { CarouselControls } from '../../components/CarouselControls'
import { Plate } from '../../components/Plate'
import {  useState } from 'react'

import { Container, SectionSabores, Main} from './styles'

export function Home() {
  const [plate, setPlate] = useState([])
  //console.log(plate)

  const user = JSON.parse(localStorage.getItem("@rocketfood:user"));

  return (
    <Container>
      {user.admin === 1 ? <HeaderAdm plate={plate} setPlate={setPlate} /> : <Header />}

      <Main>
        <SectionSabores>
          <div className="wrapper-img">
            <img src={imgHome} alt="logo frutas" />
          </div>

          <div className="wrapper-description">
            <div>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </div>
        </SectionSabores>

        <h2>Refeições</h2>
        <CarouselControls>
          {plate && plate.map((plate) => {
            return(
              <Plate plate={plate} />
            )
          })}
        </CarouselControls>

      </Main>

      <Footer />
    </Container>
  )
}
