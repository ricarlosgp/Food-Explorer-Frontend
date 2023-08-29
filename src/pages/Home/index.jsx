import imgHome from '../../assets/imgHome.svg'
import { Header } from '../../components/Header'
import { HeaderAdm } from '../../components/HeaderAdm'
import { Footer } from '../../components/Footer'
import { Plate } from '../../components/Plate'
import { useEffect, useState } from 'react'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


import { Container, SectionSabores, Main, ContainerSlider } from './styles'

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

  const [itemsToShow, setItemsToShow] = useState(1); 

  useEffect(() => {
    function updateItemsToShow() {
      if (window.innerWidth >= 1100) {
        setItemsToShow(4);
      } else if((window.innerWidth <= 1100) && (window.innerWidth >= 800)) {
        setItemsToShow(2);
      } else if(window.innerWidth <= 800) {
        setItemsToShow(1.5);
      }
    }

    window.addEventListener('resize', updateItemsToShow);

    updateItemsToShow();

    return () => {
      window.removeEventListener('resize', updateItemsToShow);
    };
  }, []);

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

        <ContainerSlider>
          <div className="carousel-wrapper">
            <Carousel
              showArrows={true}
              infiniteLoop={false}
              autoPlay={false}
              showStatus={false}
              showIndicators={false} 
              centerMode={true}
              interval={3000}
              showThumbs={false}
              centerSlidePercentage={(100 / itemsToShow)}
            >
              {Refeições.map(item => (
                <div >

                  <Plate key={item.id} plate={item} />
                </div>
              ))}
            </Carousel>
          </div>
        </ContainerSlider>
        
    
      </Main>

      <Footer />
    </Container>
  )
}

// style={{margin: '0 100px'}}