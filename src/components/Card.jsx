import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Card.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import placeholderImg from '../assets/react.svg'

export const Card = ({id, image, info, name, price}) => {
    let truncatedInfo = info.substring(0,150)

    const navigate = useNavigate()
  return (
    <div className='card'>
       <LazyLoadImage
      effect='blur'
      alt={name}
      src={image}
      height={200}
      placeholderSrc={placeholderImg} // use normal <img> attributes as props
       />
        <div className='card-content'>
            <h3>{name}</h3>
            <p>{truncatedInfo}</p>
            <button className='details-btn' onClick={()=>navigate('/tour/'+id)}>Details</button>

        </div>
    </div>
  )
}

