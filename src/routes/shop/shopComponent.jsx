import { Route, Routes } from 'react-router-dom';
import './shopStyles.scss'
import CategoriesPreview from '../categories-preview/categoriesPreviewComponent';
import Category from '../category/categoryComponent';

const Shop = () => {

  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path =":category" element={<Category/>}/>

    </Routes>
      
   
  )
}

export default Shop