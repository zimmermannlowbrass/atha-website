import React from "react";
import Carousel from "react-multi-carousel";

function Quilts() {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 
        }
      }

    const quilts = [{}]
    return (
        <section className="quilts">
            These are the quilts
            <Carousel responsive={responsive} infinite={true}>
                <div>quilt1</div>
                <div>quilt2</div>
                <div>quilt3</div>
            </Carousel>
        </section>
    )
}

export default Quilts;