import React from 'react';

export default function Card(props) {

  return (
    <div className="card mb-3 border-0">

      <div class="row no-gutters mb-4">

        <div class="col-md-4">
          <img src={`../images/${props.img}`}  class="card-img" alt="..."></img>
        </div>

        <div class="col-md-8">
          <div class="card-body">
            <h5><i class="fa fa-plane" aria-hidden="true"></i>   {props.country}    <a href={`${props.maps}`} target="_blank" rel="noopener noreferrer" className='gray'>       View on Google Maps
              </a>
            </h5>
            <h3>{props.title}</h3>
            <br></br>
            <p><strong>{props.dates}</strong></p>
            <p class="card-text">{props.description}</p>
          </div>
        </div>

      </div>
      <hr class="solid margin-4"></hr>

    </div>

  )
}
