import React from 'react'
import './cow.css'

export const Cow = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>


  <div>
  <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>

    <div>
    <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      </div>

    <div>
    <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>

    <div>
    <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>

    </div>

    

  )
}
