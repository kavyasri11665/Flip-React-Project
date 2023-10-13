import React from 'react';
import image1 from './image1.webp';
import image2 from './image2.webp';
import image3 from './image3.webp';
import image4 from './image4.webp';
import image5 from './image5.webp';
import image6 from './image6.webp';
import image8 from './image8.webp';
import image9 from './image9.webp';
export default function Slidebar()
{
    return(
        <>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image1} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={image2} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={image3} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={image4} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={image5} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={image6} class="d-block w-100" alt="..." />
    </div>
    
    <div class="carousel-item">
      <img src={image8} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={image9} class="d-block w-100" alt="..." /> 
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}