import Home from './routes/home/homeComponent'
import { Routes, Route} from 'react-router-dom';
import Navigation from './routes/navigation/navigationComponent';
import SignIn from './routes/sign-in/signInComponent';

const Shop = () =>{
  return(<></>)
}

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='sign-in' element={<SignIn/>}/>
      </Route>
      
    </Routes>
  )
};

export default App;