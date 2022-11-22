import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addProducts } from '../../../../../features/listProducts/listProductsSlice'
import { CategorySelect } from '../../../../NewCart/CategorySelect'
import Insert from '../../Insert'
import './adminTabProduct.css'

export default function AdminTabProduct() {
  const dispatch = useDispatch()
  const { categoryId } = useSelector((state) => state.categorySelect)
  const { products } = useSelector((state) => state.listProducts)
  console.log(products)

  useEffect(() => {
    productsByCategory()
  }, [categoryId])

  const productsByCategory = async () => {
    try{
      if (categoryId > 0) {
        const result = await fetch(
          `http://www.localhost:4000/products/category/${categoryId}`,
        )
        if(result.ok){
          const products = await result.json()
          dispatch(addProducts(products))
        }
      }
    }catch(error){
      console.error(error)
    }
  }

  return (
    <div>
      <div className="adminproducts">
        <CategorySelect />
        <Insert className= 'insert' name="product" />
      </div>
      {products.map((product) => (
        <div className='listProducts'>{product.name_product}</div>
      ))}
    </div>
  )
}
