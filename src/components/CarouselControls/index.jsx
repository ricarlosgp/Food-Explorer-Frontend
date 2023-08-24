// import Carousel from 'react-elastic-carousel';
// import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md';

// import { Container } from "./styles";

// export const CarouselControls = ({children}) => {
//   const breakPoints = [
//     { width: 1, itemsToShow: 1.5 },
//     { width: 700, itemsToShow: 2 },
//     { width: 1200, itemsToShow: 3 },
//     { width: 1400, itemsToShow: 4 },
//   ];

//   function carousel(){
//     carousel.slidePrev();
//   };
  
//   function carouselNext(){
//     carousel.slideNext();
//   };

//   return (
//     <Container>
//       <div className='wrapper_plates' id={`${children.length < 4 ? 'addMargin' : ''}`}>

//         <div 
//         className='wrapper_button back' 
//         id={`${children.length < 4 || window.innerWidth < 832 ? 'hidden' : ''}`}
//         >
//           <button onClick={carousel}><MdArrowBackIosNew /></button>
//         </div>

//         <Carousel
//         breakPoints={breakPoints}
//         pagination={false}
//         showEmptySlots
//         transitionMs={900}
//         ref={ref => (carousel = ref)}
//         > 
//           {children}
//         </Carousel>

//         <div 
//         className='wrapper_button forward' 
//         id={`${children.length < 4 || window.innerWidth < 832 ? 'hidden' : ''}`}
//         >
//           <button onClick={carouselNext}><MdArrowForwardIos /></button>
//         </div>

//       </div>
//     </Container>
//   )
// }

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useState } from 'react'

export const CarouselControls = ({children}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  // const [sliderRefDesktop, instanceRef] = useKeenSlider<HTMLDivElement>({
  //   mode: 'free-snap',
  //   slides: {
  //     perView: 2.5,
  //     spacing: 48,
  //   },
  //   slideChanged(slider) {
  //     setCurrentSlide(slider.track.details.rel)
  //   },
  //   created() {
  //     setLoaded(true)
  //   },
  // })

  // const sliderRef =
  //   window.widthScreen <= 800 ? sliderRefMobile : sliderRefDesktop

  // function handleAddProductInCart(productId) {
  //   const product = products.find((product) => product.id === productId)

  //   if (product) {
  //     addProductInCart({ productId, product })
  //     toast('added to cart')
  //   }
  // }

  // const handleSliderNext = () => {
  //   if (instanceRef.current) {
  //     instanceRef.current.next()
  //     const isLastSlide =
  //       currentSlide === instanceRef.current.track.details.slides.length - 2
  //     setLoaded(!isLastSlide)
  //   }
  // }

  // const handleSliderPrev = () => {
  //   if (instanceRef.current) {
  //     instanceRef.current.prev()
  //     setLoaded(currentSlide !== 0)
  //   }
  // }

  // const hoverAnimation =
  //   widthScreen && widthScreen >= 800
  //     ? 'group-hover:animation-hover-show animation-hover-hidden'
  //     : 'flex justify-between items-center'
  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {children}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              style={{color: 'red'}}
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              style={{color: 'red'}}
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}
