import React from 'react'
import "../style/Product.scss"
import PDproductDesc from './PD-productDesc'
import PDProductImgs from './PD-productImgs'
import ShopnowBtn from "./styledComponents/ShopnowBtn"
import { useParams } from 'react-router-dom'


const Product = () => {
  const params = useParams();
  return (
  
<section id="product">
    <div className="product-container container-lg p-0 p-lg-auto mb-4">
    <div className="row justify-content-lg-around justify-content-center align-items-center text-center text-lg-start">
      <PDProductImgs id={params.id}/>
      <PDproductDesc id={params.id}/>
      </div>
    </div>
  </section>
  )
}


export default Product