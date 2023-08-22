import {Fragment, useContext}from 'react'
import ProductCard from '../../components/product-card/productCardComponent';
import './shopStyles.scss'
import { CategoriesContext } from './../../contexts/categoriesContext';

const Shop = () => {
    const {categoriesMap} = useContext(CategoriesContext);

  return (
    <Fragment>
      
      {Object.keys(categoriesMap).map(title => (
          <Fragment key={title}>
            <h2>{title}</h2>
            <div className='products-container'>
              {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product}/>
              ))}
            </div>
            
          </Fragment>
      ))
      }
      
      
    </Fragment>
  )
}

export default Shop