import React, { useState, useEffect } from 'react'
import AdminTabCategory from './AdminTabCategory'
import AdminTabProduct from './AdminTabProduct'

import { useSelector, useDispatch } from 'react-redux'

import { addProducts } from '../../../../features/listProducts/listProductsSlice'

import { CategorySelect } from '../../../NewCart/CategorySelect'
import './adminTab.css'

export default function AdminTab({ name }) {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   nameElement()
  // }, [name])

  // const [category, setCategory] = useState('')
  // const [product, setProduct] = useState('')

  // const nameElement = () => {
  //   if (name === 'category') {
  //     setCategory('category')
  //   }
  //   if (name === 'product') {
  //     setProduct('product')
  //   }
  // }

  // const { categories } = useSelector((state) => state.listCategory)
  // const { categoryId } = useSelector((state) => state.categorySelect)
  // const { products } = useSelector((state) => state.listProducts)

  // const elemetTab = async () => {
  //   if (name === 'category') {
  //   } else {
  //     if (name === 'product') {
  //       if (categoryId > 0) {
  //         const result = await fetch(
  //           `http://www.localhost:4000/products/category/${categoryId}`,
  //         )
  //         const products = await result.json()

  //         //dispatch(addProducts(products))
  //         setproductByCategory(products)
  //         console.log(productByCategory)
  //       }
  //     }
  //   }
  // }

  return (
    <div className="tab">
      {name === 'category' ? <AdminTabCategory /> : <AdminTabProduct />}

      {/* {categories.map((category) => (
        <div>{category.name_category}</div>
      ))} */}
      {/* <CategorySelect />
      {productByCategory.map((product) => (
        <div>{product.name_product}</div>
      ))} */}
    </div>
  )
}
