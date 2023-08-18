import Home from './routes/home/homeComponent'
import { Routes, Route} from 'react-router-dom';
import Navigation from './routes/navigation/navigationComponent';
import Authentication from './routes/auth/authComponent';
import Shop from './routes/shop/shopComponent';


const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='auth' element={<Authentication/>}/>
      </Route>
      
    </Routes>
  )
};

export default App;