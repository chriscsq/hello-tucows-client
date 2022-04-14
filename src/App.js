import { Routes, Route } from 'react-router-dom'

import Layout from './layout/Layout';
import AddRestaurantPage from './pages/AddRestaurant';
import RestaurantsPage from './pages/RestaurantsPage';
function App() {
  return (
    <Layout>

      <Routes>
        <Route exact path="/" element={<RestaurantsPage />} ></Route>
        <Route path="/add-restaurant" element={<AddRestaurantPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
