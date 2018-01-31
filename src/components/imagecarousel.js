import React , { Component } from 'react';
import Slider from 'react-slick';

class ImageCarousel extends Component {
  render(){

    var settings = {
      arrows:true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding:'50px',
      className:'arrows'
    };

    return(
      <div className="container pics">
        <Slider {...settings}>
          {this.props.pics.map((value,index) => {
            return (
                <img className="img_height" key={index} src={`http://farmbazaar.co.in/read.php?file=${value}`} alt="product" />
                  )
          })}
        </Slider>
        </div>
    );
  }
}

export default ImageCarousel;
