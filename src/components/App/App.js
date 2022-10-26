import React from 'react';
import { ContentWrapper } from '../ContentWrapper';
import Dashboard from '../../pages/Dashboard';
import { SideBar } from '../SideBar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../../pages/Login/Login';
import AuthGuard from '../../guards/log.guard';
import { ProductDetail } from '../ProductDetail';
import { ProductCreate } from '../../pages/ProductCreate';
import { ProductEdit } from '../../pages/ProductEdit';
import { Chart } from '../Chart';
import { LastProductInDb } from '../LastProductInDb';
import { Stats } from '../Stats';

function App() {

  return (
    <React.Fragment>
      <div id='wrapper'>
        <SideBar />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={ <Navigate to="/dashboard" /> } />
            <Route path="*" element={ <> Not Found </> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/dashboard" element={ <Dashboard /> } />
            <Route path="/productos" element={ <Chart /> } />
            <Route path="/ultimoproducto" element={ <LastProductInDb /> } />
            <Route path="/estadisticas" element={ <Stats /> } />
            <Route element={ <AuthGuard />}>
              <Route path="/detalle/:id" element={ <ProductDetail /> } />
              <Route path="/producto/crear" element={ <ProductCreate /> } />
              <Route path="/producto/editar/:id" element={ <ProductEdit /> } />
            </Route>
          </Routes>
        </ContentWrapper>
      </div>
    </React.Fragment>
  );
}

export default App;
