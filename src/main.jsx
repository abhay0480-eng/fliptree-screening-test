import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import CartPage from './pages/CartPage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import AuthLayout from './components/AuthLayout/AuthLayout.jsx';
import Contact from './pages/Contact.jsx';
import Blog from './pages/Blog.jsx';
import NotFound from './pages/NotFound.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<AuthLayout authentication={false} ><HomePage/></AuthLayout>} />
        <Route path="cart" element={<AuthLayout ><CartPage/></AuthLayout>} />
        <Route path="product" element={<AuthLayout  ><ProductPage/></AuthLayout>} />
        <Route path="contact" element={<AuthLayout ><Contact/></AuthLayout>} />
        <Route path="blog" element={<AuthLayout  ><Blog/></AuthLayout>} />
        <Route path="*" element={<NotFound />} />
      </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
