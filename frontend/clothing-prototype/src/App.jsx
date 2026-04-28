import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import('./pages/HomePage'));
const Navbar = lazy(() => import('./components/Navbar'));
const MenDashboard = lazy(() => import("./pages/MenDashboard"));
const WomenDashboard = lazy(() => import("./pages/WomenDashboard"));
const GirlsDashboard = lazy(() => import('./pages/GirlsDashboard'));
const BoysDashboard = lazy(() => import('./pages/BoysDashboard'));
const AllProductsPage = lazy(() => import('./pages/AllProductsPage'));
const LoginPage = lazy(() => import("./components/LoginPage"));
const SignUpPage = lazy(() => import("./components/SignUpPage"));
const ProductPage = lazy(() => import('./pages/ProductsPage'));

function App() {
  return (
    <BrowserRouter>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/allProductsPage' element={<AllProductsPage />} />
          <Route path='/menDashboard' element={<MenDashboard />} />
          <Route path='/womenDashboard' element={<WomenDashboard />} />
          <Route path='/boysDashboard' element={<BoysDashboard />} />
          <Route path='/girlsDashboard' element={<GirlsDashboard />} />
          <Route path='/loginPage' element={<LoginPage />} />
          <Route path='/signUpPage' element={<SignUpPage />} />
          <Route path='/productDetail' element={<ProductPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;