import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchData } from '../utility'
import './Tour.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';


const url='https://raw.githubusercontent.com/mkatay/json-tours/main/tours'


export const Tour = () => {
    const navigate=useNavigate()
    const param =useParams()
    const [tour, setTour]=useState(null)   
    useEffect(()=>{
        fetchData(url, setTour, param.id)
    },[])
 
    console.log(tour)

  return (
    <div className='tour-container'>
       {tour && <div className='tour-holder'> 
       <LazyLoadImage
      effect='blur'
      alt={tour.name}
      src={tour.image}
      placeholderSrc='../assets/react.svg' // use normal <img> attributes as props
       />
        <h3>{tour.name}</h3>
        <p>{tour.info}</p>
        <p className='price'>Price: {tour.price} EUR</p>
        <button onClick={()=>navigate('/tours')}>Go back</button>
        </div>}
    </div>
  )
}

