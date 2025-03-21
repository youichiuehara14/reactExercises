import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import HomePage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';

/**
 * The `App` component serves as the root component of the application and sets up the routing structure
 * using React Router. It defines the main navigation paths and their corresponding components.
 *
 * Routes:
 * - `/` (HomePage): Displays the home page of the application.
 * - `/product` (Product): Displays the product page.
 * - `/pricing` (Pricing): Displays the pricing page.
 * - `*` (PageNotFound): Catches all undefined routes and displays a "Page Not Found" component.
 *
 * Components:
 * - `BrowserRouter`: Wraps the application to enable routing functionality.
 * - `Routes`: Contains all the route definitions for the application.
 * - `Route`: Defines individual routes and their associated components.
 *
 * Note:
 * - The `*` path acts as a wildcard to handle any undefined routes, ensuring a graceful fallback.
 *
 * @component
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
