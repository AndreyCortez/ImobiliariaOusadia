import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css'

import './Information.css';


const Information = () => {
  let string = ["Sensibly designed and with a high level of décor throughout, this Ventura Home has an extensive list of features including:", <br/>,  
  "• Three large bedrooms, two quality bathrooms", <br/>, 
  "• Spacious home office directly adjacent to entry", <br/>, 
  "• Quality kitchen with double oven & granite tops", <br/>, 
  "• Open plan living with direct panoramic views of canals", <br/>,
  "• Separate Theatre Room for bingeing those shows", <br/>, 
  "• Amazing indoor/outdoor waterfront entertaining areas",<br/>, 
  "• Sliding frameless glass doors & bi-fold windows",<br/>, 
  "• Fully ducted & zoned reverse cycle air conditioning"];
  return (
    < >
    <h1>
      17 Waterlily Drive, Dudley Park.
    </h1>

    <h2>
      From $1,320,000
    </h2>

    
    <div class="constainer">
      <div class="description">
      <p>
      {string}

      </p>
       </div>
    </div>
  

    </>
  );
};

export default Information;
