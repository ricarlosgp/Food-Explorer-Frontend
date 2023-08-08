import imgHome from '../../assets/imgHome.svg'
import { Header } from '../../components/Header'
import { HeaderAdm } from '../../components/HeaderAdm'
import { Footer } from '../../components/Footer'
import { CarouselControls } from '../../components/CarouselControls'
import { Plate } from '../../components/Plate'
import {  useState } from 'react'

import { Container, SectionSabores, Main } from './styles'

export function Home() {
  const [plate, setPlate] = useState([])

  const user = JSON.parse(localStorage.getItem("@rocketfood:user"));

  const Refeições = []

  const Sobremesas = []

  const Bebidas = []

  plate.map(item=>{
    switch(item.category){
      case 'Refeições' :
        Refeições.push(item)

        Refeições.sort((a, b)=>{
          if(a.id < b.id){
            return -1
          }else{
            return true
          }
        })
        break;
        
      case 'Sobremesa' :
        Sobremesas.push(item)

        Sobremesas.sort((a, b)=>{
          if(a.id < b.id){
            return -1
          }else{
            return true
          }
        })
        break;

      case 'Bebidas' :
        Bebidas.push(item)

        Bebidas.sort((a, b)=>{
          if(a.id < b.id){
            return -1
          }else{
            return true
          }
        })
        break;

      default :
      alert('Error')
    }
  })

  return (
    <Container>
      {user.admin === 1 ? <HeaderAdm plate={plate} setPlate={setPlate} /> : <Header setPlate={setPlate} plate={plate} />}

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
          {
            Refeições && Refeições.map((item, index)=>(
              <div key={String(index)}>
                <Plate
                plate={item}
                />
              </div> 
            )) 
          }
        </CarouselControls>

        <h2>Sobremesas</h2>
        <CarouselControls>
          {
            Sobremesas && Sobremesas.map((item, index)=>(
              <div key={String(index)}>
                <Plate
                plate={item}
                />
              </div> 
            )) 
          }
        </CarouselControls>

        <h2>Bebidas</h2>
        <CarouselControls>
          {
            Bebidas && Bebidas.map((item, index)=>(
              <div key={String(index)}>
                <Plate
                plate={item}
                />
              </div> 
            )) 
          }
        </CarouselControls>

      </Main>

      <Footer />
    </Container>
  )
}
