import imgHome from '../../assets/imgHome.svg'
import { Header } from '../../components/Header'
import { HeaderAdm } from '../../components/HeaderAdm'
import { Footer } from '../../components/Footer'
import { CarouselControls } from '../../components/CarouselControls'
import { Plate } from '../../components/Plate'

import { Container, SectionSabores, Main} from './styles'

export function Home() {
  return (
    <Container>
      <HeaderAdm />

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
          <Plate />
          <Plate />
          <Plate />
          <Plate />
          <Plate />
          <Plate />
        </CarouselControls>

        <h2>Bebidas</h2>
        <CarouselControls>
          <Plate />
          <Plate />
          <Plate />
          <Plate />
          <Plate />
          <Plate />
        </CarouselControls>

        <h2>Sobremesas</h2>
        <CarouselControls>
          <Plate />
          <Plate />
          <Plate />
          <Plate />
          <Plate />
          <Plate />
        </CarouselControls>
      </Main>

      <Footer />
    </Container>
  )
}
