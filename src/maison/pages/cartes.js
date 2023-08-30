import React from 'react';
import { Link } from 'react-router-dom';

const Cartes = ({cadre}) => {
  return (

    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="..." class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{cadre.nom}</h5>
            <p class="card-text">
              {cadre.description}
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </p>

            <Link to="#">
              <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </Link>
          </div>
        </div>
      </div>

    </div>

  )
};

export default Cartes;

