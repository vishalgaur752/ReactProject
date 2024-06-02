import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider, } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JObsPage from './pages/JObsPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route  path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JObsPage />} />
      <Route path='*' element={<NotFoundPage />} />

    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
}

export default App