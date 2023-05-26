import imgHome from '../../assets/imgHome.svg';
import {Header} from '../../components/Header'

import { Plate } from '../../components/Plate'

import {Container, SectionSabores} from './styles';

export function Home() {

  return (
    <Container>
        <Header/>

        <SectionSabores>
          <div className='wrapper-img'>
            <img src={imgHome} alt='logo frutas'/>
          </div> 
            
          <div className='wrapper-description'>
            <div>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </div>
        </SectionSabores>

        <Plate />
    </Container>
  )
}
