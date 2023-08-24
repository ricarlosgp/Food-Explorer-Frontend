import imgHome from '../../assets/imgHome.svg'
import { Header } from '../../components/Header'
import { HeaderAdm } from '../../components/HeaderAdm'
import { Footer } from '../../components/Footer'
import { CarouselControls } from '../../components/CarouselControls'
import { Plate } from '../../components/Plate'
import {  useState } from 'react'

import { Container, SectionSabores, Main, ContainerSlider } from './styles'

import { useKeenSlider } from "keen-slider/react"
import {IoMdArrowDropright, IoMdArrowDropleft} from 'react-icons/io'

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

  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    mode: 'snap',
    slides: {
      perView: 2.5,
      spacing: 10,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  //console.log(instanceRef.current.track)

  const handleSliderNext = () => {
    if (instanceRef.current) {
      instanceRef.current.next()
      const isLastSlide =
        currentSlide === instanceRef.current.track.details.slides.length - 2
      setLoaded(!isLastSlide)
    }
  }

  const handleSliderPrev = () => {
    if (instanceRef.current) {
      instanceRef.current.prev()
      setLoaded(currentSlide !== 0)
    }
  }


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

        {/* <h2>Refeições</h2>
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
        </CarouselControls> */}
<ContainerSlider>
        <div ref={sliderRef} className="keen-slider">
          {
            Sobremesas && Sobremesas.map((item, index)=>(
              <div className='keen-slider__slide' key={String(index)}>
                <Plate
                plate={item}
                />
              </div> 
            )) 
          }
        </div>
        {loaded && instanceRef.current && (
          <div className='arrows'>
            <div className='arrow-left'>
              <Arrow 
                size={38}
                left
                onClick={(e) =>
                  e.stopPropagation() || handleSliderPrev()
                }
                disabled={currentSlide === 0}
              />
            </div>

            <div className='arrow-right'>
              <Arrow
                size={38}
                onClick={(e) =>
                  e.stopPropagation() || handleSliderNext
                }
                disabled={
                  currentSlide ===
                  instanceRef && instanceRef.current.track.details.slides.length - 1
                }
              />
            </div>

          </div>
        )}
      </ContainerSlider>
      </Main>

      <Footer />
    </Container>
  )
}


function Arrow(props) {
  const disabled = props.disabled ? ' arrow--disabled' : ''
  const arrowDirection = props.left ? 'arrow--left' : 'arrow--right'

  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${arrowDirection} ${disabled}`}
      viewBox="0 0 24 24"
    >
      {props.left && <IoMdArrowDropleft size={12}  />}
      {!props.left && <IoMdArrowDropright size={12} color="red" />}
    </svg>
  )
}