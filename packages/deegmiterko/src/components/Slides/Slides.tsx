import React, { FunctionComponent } from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

type SlidesType = {
  children: React.ReactNode[];
}

const Slides: FunctionComponent<SlidesType> = ({ children }) => {

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={3}
    >
      <Slider>
        {children.map((child, index) => (
          <Slide index={index}>{child}</Slide>
        ))}
      </Slider>
    </CarouselProvider>
  );
}

export default Slides;
