import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { ContainerSlider } from './styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

export const CarouselControls = ({ children }) => {
  const [itemsToShow, setItemsToShow] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    function updateItemsToShow() {
      if (window.innerWidth >= 1450) {
        setItemsToShow(4);
      } else if(window.innerWidth >= 1100 && window.innerWidth <= 1490) {
        setItemsToShow(2.5);
      } else if (window.innerWidth <= 1100 && window.innerWidth > 800) {
        setItemsToShow(1.5);
      } else if (window.innerWidth >= 490 && window.innerWidth <= 800) {
        setItemsToShow(2.2);
      } else if (window.innerWidth <= 490) {
        setItemsToShow(1.5);
      }
    }

    window.addEventListener('resize', updateItemsToShow);

    updateItemsToShow();

    return () => {
      window.removeEventListener('resize', updateItemsToShow);
    };
  }, []);

  const next = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const prev = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const updateCurrentSlide = (index) => {
    setCurrentSlide(index);
  };

  const showButton = window.innerWidth >= 800 && children.length >= 4
  
  return (
    <ContainerSlider>
      <div className="carousel-wrapper">
        <Carousel
          showArrows={false}
          infiniteLoop={false}
          autoPlay={false}
          showStatus={false}
          showIndicators={false}
          centerMode={true}
          interval={3000}
          showThumbs={false}
          centerSlidePercentage={100 / itemsToShow}
          selectedItem={currentSlide}
          onChange={updateCurrentSlide}
        >
          {children}
        </Carousel>
         {showButton && <>
          <div className='bg-back'>
            <button onClick={prev}><IoIosArrowBack /></button>
          </div>
          <div className='bg-forward'>
            <button onClick={next}><IoIosArrowForward /></button>
          </div>
          </>
          }
      </div>
    </ContainerSlider>
  );
};
