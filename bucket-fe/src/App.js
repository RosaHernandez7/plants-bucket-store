import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import { MainView } from './components/MainView';
import ProductUser  from './pages/ProductUser';
import Cart from './pages/Cart'
import AdminView from './pages/AdminView'
import MainContent from './components/MainContent';

function App() {

  function handleSubmit(e){
    console.log("hola "+ e.value);
  }
  return (
    <div className="content">
     <Header/> <hr/>
     <MainView/> <hr/>
     <MainContent/>
     <Routes>
      <Route  path="cart" element={<Cart  />}/>
      <Route  path="user-view" element={<ProductUser/>}/>
      <Route  path="admin-view" element={<AdminView/>}/>
     </Routes>
    </div>
  );
}

export default App;
