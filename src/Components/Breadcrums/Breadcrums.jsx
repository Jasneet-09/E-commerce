import React from 'react'
import './BreadCrums.css'
import arrow from '../Assets/arrow.png';
const BreadCrums = (props) =>{
    const {product} = props;
    return(
        <div className="breadcrums">
            HOME <img src={arrow} alt="" /> 
            SHOP <img src={arrow} alt="" /> 
            {product.category} <img src={arrow} alt="" />
            {product.name}
        </div>
    )
}

export default BreadCrums;