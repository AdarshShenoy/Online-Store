import {useContext}from 'react'
import { ProductsContext } from '../../contexts/productsContext'
import ProductCard from '../../components/product-card/productCardComponent';
import './shopStyles.scss'

const Shop = () => {
    const {products} = useContext(ProductsContext);

  return (
    <div className='products-container'>
        {products.map((products) => (
            <ProductCard key={products.id} product={products}/>
        ))}
    </div>
  )
}

export default Shop