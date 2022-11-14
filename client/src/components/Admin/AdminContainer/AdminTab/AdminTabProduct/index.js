import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addProducts } from '../../../../../features/listProducts/listProductsSlice'
import { CategorySelect } from '../../../../NewCart/CategorySelect'
import Insert from '../../Insert'
import './adminTabProduct.css'

export default function AdminTabProduct() {
  const dispatch = useDispatch()
  const { categoryId } = useSelector((state) => state.categorySelect)

  // const [productByCategory, setproductByCategory] = useState([])
  const { products } = useSelector((state) => state.listProducts)
  console.log(products)

  useEffect(() => {
    productsByCategory()
  }, [categoryId])

  

  const productsByCategory = async () => {
    if (categoryId > 0) {
      const result = await fetch(
        `http://www.localhost:4000/products/category/${categoryId}`,
      )
      const products = await result.json()
      // setproductByCategory(products)
      dispatch(addProducts(products))
    }
  }

  return (
    <div>
      <div className="adminproducts">
        <CategorySelect />
        <Insert name="product" />
      </div>
      {products.map((product) => (
        <div>{product.name_product}</div>
      ))}
    </div>
  )
}
